import { GoogleGenAI } from "@google/genai";

// FIXED 1: The NEW SDK requires the object syntax if you use a custom key name
const ai = new GoogleGenAI({ apiKey: process.env.MY_SECRET_API_KEY });

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    // Safety check so Vercel doesn't fail silently
    if (!process.env.MY_SECRET_API_KEY) {
        console.error("API Key is missing in Vercel Environment Variables");
        return res.status(500).json({ error: "Missing API Key" });
    }

    const userText = req.body.userInput || "";

    try {
        const prompt = `
            Analyze this user input: "${userText}"
            Match their skills and interests to exactly ONE of these specific roles based on the following categories:
            
            - cyber: Digital Forensics, Cybersecurity Consultant, Penetration Tester, Security Analyst
            - media: Video Editor, Content Creator, Creative Producer, Photographer/Videographer
            - computing: Data Scientist, UX/UI Designer, Full Stack Developer, Graphic Designer

            Return ONLY a valid JSON object with the following keys:
            1. "category": Must be strictly one of ['media', 'computing', 'cyber', 'unknown']
            2. "role": The exact specific job title from the list above (or "Unknown Input")
            3. "accuracy": Integer between 75-99 representing match confidence (or 0 for unknown)
            4. "reason": A short, punchy 1-sentence explanation of why they match this specific role based on what they typed.
            
            CRITICAL: Return ONLY valid JSON. Do not use markdown formatting, do not use backticks, and do not include any other words.
        `;

        // FIXED 2: The NEW SDK uses ai.models.generateContent
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        // FIXED 3: In the NEW SDK, .text is a property, not a function ()
        let text = response.text;
        
        // Clean up accidental AI markdown
        text = text.replace(/```json/gi, '').replace(/```/g, '').trim();

        const cleanData = JSON.parse(text);
        res.status(200).json(cleanData);

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "NEURAL_LINK_FAILURE", message: error.message });
    }
}