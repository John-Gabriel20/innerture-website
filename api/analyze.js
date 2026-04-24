import { GoogleGenAI } from "@google/genai";

// 1. Correct initialization for the NEW @google/genai SDK
const ai = new GoogleGenAI({ apiKey: process.env.MY_SECRET_API_KEY });

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const userText = req.body.userInput || "";

    try {
        const prompt = `
            Analyze this input: "${userText}"
            Return a JSON object with:
            1. "match": One of ['media', 'computing', 'cyber', 'unknown']
            2. "accuracy": Integer (75-99, or 0 for unknown)
            
            CRITICAL: Return ONLY valid JSON. Do not use markdown formatting, do not use backticks, and do not include any other words.
        `;

        // 2. Correct function call for the NEW SDK (no "getGenerativeModel")
        // We removed the buggy config rules that caused the 400 errors.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0
            }
        });

        // 3. Extract the text (It's a property now, not a function)
        let rawText = response.text;
        console.log("Raw AI Output:", rawText);

        // 4. Safety net: Strip out markdown backticks just in case the AI ignores the rule
        rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();

        try {
            const cleanData = JSON.parse(rawText);
            res.status(200).json(cleanData);
        } catch (parseError) {
            console.error("Failed to parse JSON, falling back.", parseError);
            res.status(200).json({ match: "unknown", accuracy: 0 });
        }

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "NEURAL_LINK_FAILURE" });
    }
}