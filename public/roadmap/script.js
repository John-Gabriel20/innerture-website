
const roadmapDatabase = {
    
    "digital-forensics": {
        category: "Cybersecurity", title: "Digital Forensics Analyst", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Cybersecurity / Forensics", desc: "Master operating system architecture, file systems, and understands legal chain of custody.", link: "https://www.sans.org/", linkText: "View SANS Programs ↗", roi: "+12% Base Salary", companies: "FBI, Mandiant, CrowdStrike", insiderTip: "Highlight 'forensic imaging lab hours' explicitly on your resume to bypass HR filters for federal jobs." },
            { type: "Technical Skill", title: "Autopsy & EnCase Mastery", desc: "Gain hands-on experience recovering deleted data and analyzing memory dumps.", link: "https://www.sleuthkit.org/", linkText: "View Autopsy Training ↗", roi: "+18% Interview Callbacks", companies: "Standard for Enterprise IR Teams", insiderTip: "Create a GitHub repo documenting how you recovered flags from sample memory dumps. Link this in your portfolio." },
            { type: "Industry Cert", title: "GCFE Certification", desc: "Prove your investigation skills in court or boardroom settings.", link: "https://www.giac.org/", linkText: "View GCFE Exam ↗", roi: "+$15k Salary Bump", companies: "FireEye, IBM, DoD", insiderTip: "GCFE holders are aggressively fast-tracked to Senior Analyst roles compared to non-certified peers." },
            { type: "Advanced Strategy", title: "Malware Reverse Engineering", desc: "Learn to decompile ransomware using Ghidra and IDA Pro to trace attack origins.", link: "https://ghidra-sre.org/", linkText: "Get Ghidra Labs ↗", roi: "+35% Premium Market Value", companies: "NSA, CISA, Tier 1 Incident Response", insiderTip: "Combining standard forensics with Assembly language analysis puts you in the top 5% of earners in this field.", isPremiumStep: true },
            { type: "Career Zenith", title: "Expert Witness Preparation", desc: "Master the legal vernacular required to testify complex technical findings to a jury.", link: "https://www.sans.org/", linkText: "View Legal Prep ↗", roi: "+$30k Retainer Increases", companies: "Private Legal Consulting Firms", insiderTip: "Private firms pay massive premiums for analysts who can survive hostile cross-examination without folding.", isPremiumStep: true }
        ]
    },
    "cybersecurity-consultant": {
        category: "Cybersecurity", title: "Cybersecurity Consultant", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in IT or Business", desc: "Bridge technical defense with executive boardroom risk strategy.", link: "https://www.isaca.org/", linkText: "Explore ISACA ↗", roi: "+10% Offer Value", companies: "PwC, KPMG, EY, McKinsey", insiderTip: "Consultancies value your ability to calculate 'Annualized Loss Expectancy' more than your ability to configure a firewall." },
            { type: "Framework Mastery", title: "NIST & ISO 27001", desc: "Learn to audit multi-million dollar companies against government standards.", link: "https://www.nist.gov/", linkText: "View NIST Framework ↗", roi: "+22% Billing Rate", companies: "Big 4, Federal Contractors", insiderTip: "Build a mock audit template in Excel and bring it to your interview to prove immediate value." },
            { type: "Industry Cert", title: "CISSP Path", desc: "The ultimate managerial validation for high-level security architecture.", link: "https://www.isc2.org/", linkText: "View CISSP Path ↗", roi: "+25% Lifetime ROI", companies: "Google Cloud, AWS, Booz Allen", insiderTip: "Even if you lack the 5 years experience, passing the exam makes you an 'Associate of ISC2', which highly impresses recruiters." },
            { type: "Advanced Strategy", title: "Virtual CISO (vCISO) Mentoring", desc: "Learn how to act as a fractional Chief Information Security Officer for mid-sized startups.", link: "https://vCISOacademy.com/", linkText: "View vCISO Strategy ↗", roi: "$250+/hr Consulting Rate", companies: "B2B FinTech & HealthTech Startups", insiderTip: "Startups can't afford a full-time CISO. Pitching yourself as a fractional vCISO creates incredibly lucrative recurring revenue.", isPremiumStep: true },
            { type: "Career Zenith", title: "Big 4 Case Interview Prep", desc: "Master the frameworks required to pass grueling multi-round consulting interviews.", link: "https://igotanoffer.com/", linkText: "View Case Studies ↗", roi: "+40% Base Salary Bump", companies: "Deloitte, McKinsey, Bain", insiderTip: "Master the 'STAR' method tailored specifically for enterprise data breach scenarios to ace the final partner round.", isPremiumStep: true }
        ]
    },
    "penetration-tester": {
        category: "Cybersecurity", title: "Penetration Tester", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Computer Science", desc: "Master networking internals and scripting languages (Python/Bash) for attack automation.", link: "https://www.codecademy.com/", linkText: "Learn Automation ↗", roi: "+15% Base Salary", companies: "Rapid7, Bishop Fox, NCC Group", insiderTip: "A deep understanding of TCP/IP and HTTP protocols is far more important than knowing how to use automated scanning tools." },
            { type: "Practical Lab", title: "HackTheBox Practice", desc: "Stop reading and start exploiting vulnerable machines in a safe, legal sandbox.", link: "https://www.hackthebox.com/", linkText: "Start Hacking ↗", roi: "+40% Tech Assessment Pass Rate", companies: "Recognized by top security boutiques", insiderTip: "Achieving a 'ProHacker' rank on HTB is frequently accepted by recruiters in lieu of 1-2 years of formal experience." },
            { type: "Industry Cert", title: "OSCP Practical Exam", desc: "A grueling 24-hour exam that is the most respected technical cert in the industry.", link: "https://www.offensive-security.com/", linkText: "View OSCP Details ↗", roi: "+$20k Salary Increase", companies: "Apple, Meta, Tier 1 Red Teams", insiderTip: "Focus heavily on manual privilege escalation (Windows and Linux). Relying on Metasploit will cause you to fail." },
            { type: "Advanced Strategy", title: "Bug Bounty Track Record", desc: "Hunt for vulnerabilities in major platforms via HackerOne and Bugcrowd.", link: "https://www.hackerone.com/", linkText: "View HackerOne ↗", roi: "High Variable Income", companies: "Uber, PayPal, Department of Defense", insiderTip: "A single valid CVE listed on your resume instantly bypasses the HR filter and gets you directly to the technical hiring manager.", isPremiumStep: true },
            { type: "Career Zenith", title: "Executive Remediation Reporting", desc: "Learn to translate complex exploit chains into business-risk reports for CEOs.", link: "https://www.sans.org/", linkText: "View Reporting Templates ↗", roi: "+30% Promotion Rate", companies: "Enterprise Red Teams globally", insiderTip: "Hackers who can break in are common. Hackers who can write clear, non-technical risk reports for the board become Red Team Leads.", isPremiumStep: true }
        ]
    },
    "security-analyst": {
        category: "Cybersecurity", title: "Security Analyst (SOC)", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Cybersecurity", desc: "Focus on network traffic analysis and understanding the cyber kill chain.", link: "https://www.wireshark.org/", linkText: "Master Wireshark ↗", roi: "+10% Starting Offer", companies: "Cisco, Palo Alto Networks", insiderTip: "Demonstrate extreme proficiency with Wireshark and PCAP analysis during technical interviews to stand out." },
            { type: "Tool Mastery", title: "Splunk Log Analysis", desc: "Learn how to sift through millions of logs in real-time to track hacker footprints.", link: "https://www.splunk.com/", linkText: "View Splunk Training ↗", roi: "+15% Market Value", companies: "Required by 85% of Fortune 500 SOCs", insiderTip: "Create a free Splunk instance at home, ingest your own router logs, and build a custom dashboard to show recruiters." },
            { type: "Industry Cert", title: "CompTIA CySA+", desc: "Apply behavioral analytics to combat cybersecurity threats on enterprise networks.", link: "https://www.comptia.org/", linkText: "View CySA+ Details ↗", roi: "+12% Negotiation Power", companies: "Microsoft Defense, Target Security", insiderTip: "Unlike CEH which is offensive, CySA+ proves you know how to configure blue-team defenses, which is what 80% of jobs require." },
            { type: "Advanced Strategy", title: "SOAR & Python Automation", desc: "Write scripts that automatically quarantine infected machines the moment an alert triggers.", link: "https://www.paloaltonetworks.com/", linkText: "Explore SOAR Automation ↗", roi: "+25% Salary Increase", companies: "CrowdStrike, SentinelOne", insiderTip: "Automating repetitive Level-1 triage tasks is the fastest, most guaranteed way to be promoted to Tier 2 or Tier 3.", isPremiumStep: true },
            { type: "Career Zenith", title: "Threat Hunting & Intel", desc: "Transition from waiting for alerts to actively hunting for hidden adversaries using YARA.", link: "https://virustotal.github.io/yara/", linkText: "Master YARA Rules ↗", roi: "+$22k Salary Bump", companies: "Mandiant, Unit 42", insiderTip: "Proactive threat hunting requires knowing what normal looks like. Master baseline behaviors to command elite threat intel salaries.", isPremiumStep: true }
        ]
    },

    
    "video-editor": {
        category: "Creative Media", title: "Video Editor", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Film Studies", desc: "Study narrative pacing, classic structure, and emotional manipulation through visuals.", link: "https://www.masterclass.com/", linkText: "View Narrative Masterclass ↗", roi: "+10% Day Rate", companies: "Netflix, Condé Nast, Sony", insiderTip: "Don't just learn the buttons. Learn 'J-Cuts' and 'L-Cuts' to mask audio transitions seamlessly—it's the hallmark of a pro." },
            { type: "Specialization", title: "Advanced Color Grading", desc: "Master DaVinci Resolve color theory, nodes, and LUTs for cinematic quality.", link: "https://www.blackmagicdesign.com/", linkText: "DaVinci Resolve Training ↗", roi: "+25% Freelance Premium", companies: "HBO, A24, Ad Agencies", insiderTip: "A strong color grade turns a $500 corporate video into a $5,000 asset. Learn the zone system." },
            { type: "Portfolio Shift", title: "Build Niche Reels", desc: "Stop generalizing; build 3 distinct reels targeted at specific commercial sectors.", link: "https://vimeo.com/", linkText: "Reel Strategy Guide ↗", roi: "+50% Lead Conversion", companies: "Ogilvy, Red Bull, Vice", insiderTip: "Keep your reel under 60 seconds. Put your absolute best, highest-budget looking shot as the very first clip." },
            { type: "Advanced Strategy", title: "Offline-to-Online VFX Workflows", desc: "Learn to proxy 8K footage and properly hand off XML timelines to Audio Mixers.", link: "https://nofilmschool.com/", linkText: "View VFX Workflows ↗", roi: "+30% Studio Hiring Rate", companies: "Major Post-Production Houses", insiderTip: "Editors who don't know how to properly prep timelines for colorists and sound engineers are blacklisted from high-end agencies.", isPremiumStep: true },
            { type: "Career Zenith", title: "Agency Roster Acquisition", desc: "Move from individual clients to getting onto the preferred vendor lists for ad agencies.", link: "https://www.productionhub.com/", linkText: "Browse Agency Rosters ↗", roi: "Consistent $10k+ Months", companies: "Wieden+Kennedy, TBWA", insiderTip: "Cold email Creative Directors offering to do a free 15-second TikTok cutdown of their latest campaign to prove your speed.", isPremiumStep: true }
        ]
    },
    "content-creator": {
        category: "Creative Media", title: "Content Creator", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Marketing", desc: "Understand human psychology and campaigns that drive measurable sales.", link: "https://academy.hubspot.com/", linkText: "HubSpot Content Cert ↗", roi: "+15% Corporate Base", companies: "VaynerMedia, HubSpot, TikTok", insiderTip: "Focus on 'Direct Response' marketing principles. Brands hire creators who know how to drive a click, not just get a view." },
            { type: "Technical Skill", title: "Algorithm & SEO Mastery", desc: "Master YouTube CTR/AVD and SEO hook structures to hack audience retention.", link: "https://creatoracademy.youtube.com/", linkText: "YouTube SEO Training ↗", roi: "+30% Growth Velocity", companies: "MrBeast Media, Night, Spotter", insiderTip: "The first 3 seconds dictate 80% of retention. Write your hook and design your thumbnail before you even shoot the video." },
            { type: "Industry Cert", title: "Data for Creators", desc: "Learn retention graph analysis to pitch sponsorships professionally.", link: "https://analytics.google.com/", linkText: "View Data Certs ↗", roi: "+40% Sponsorship Deal Size", companies: "Global Brand Agencies", insiderTip: "When pitching a brand, show them your audience demographics (age/location) rather than just your total subscriber count." },
            { type: "Advanced Strategy", title: "Media Kit Architecture", desc: "Design a professional, data-driven Media Kit that justifies high-tier sponsorship rates.", link: "https://www.canva.com/", linkText: "Build a Media Kit ↗", roi: "+$5k Per Integration", companies: "SeatGeek, NordVPN, Audible", insiderTip: "Never give a flat rate. Always offer 3 tiers of pricing (Good, Better, Best) to anchor their budget expectations higher.", isPremiumStep: true },
            { type: "Career Zenith", title: "Multi-Platform Funnels", desc: "Convert passive short-form scrollers into paying newsletter or community subscribers.", link: "https://substack.com/", linkText: "Explore Substack Funnels ↗", roi: "Independence from Algorithms", companies: "Patreon, Skool, Substack", insiderTip: "The algorithm can change overnight and kill your views. Moving 5% of your audience to an email list guarantees your career survival.", isPremiumStep: true }
        ]
    },
    "creative-producer": {
        category: "Creative Media", title: "Creative Producer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Media Management", desc: "Learn budgeting, complex scheduling, and managing diverse creative teams.", link: "https://www.ep.com/", linkText: "Learn Film Budgeting ↗", roi: "+12% Base Salary", companies: "Disney, Apple TV, Spotify", insiderTip: "Mastering 'Movie Magic Budgeting' software will instantly qualify you for entry-level studio production roles." },
            { type: "Methodology", title: "Agile for Art Teams", desc: "Adapt tech project management (Jira/Asana) for fast-paced creative art teams.", link: "https://asana.com/", linkText: "View Agile Workflows ↗", roi: "+18% Hiring Preference", companies: "EA Games, Epic Games", insiderTip: "Creatives hate corporate micromanagement. Frame Agile stand-ups as 'unblocking' sessions to win your team's loyalty." },
            { type: "Industry Cert", title: "PMP Certification", desc: "Proves you can handle massive budgets and timelines without failure.", link: "https://www.pmi.org/", linkText: "View PMP Details ↗", roi: "+$25k Salary Bump", companies: "Universal, Paramount, Major Agencies", insiderTip: "PMP is a brutal exam, but the ROI is staggering because ad agencies view it as an insurance policy against budget overruns." },
            { type: "Advanced Strategy", title: "Union Regulations (SAG/DGA)", desc: "Navigate the complex web of union talent, overtime laws, and set compliance.", link: "https://www.sagaftra.org/", linkText: "View SAG Compliance ↗", roi: "+$15k Salary Increase", companies: "Netflix Studios, HBO", insiderTip: "A producer who accidentally violates a SAG meal-penalty rule can cost a production thousands. Knowing this inside-out makes you indispensable.", isPremiumStep: true },
            { type: "Career Zenith", title: "Pitch Deck & Funding Acquisition", desc: "Master the psychological pacing of a 10-slide standard pitch deck to secure greenlights.", link: "https://www.canva.com/", linkText: "View Pitch Decks ↗", roi: "Executive Producer Credit", companies: "A24, Blumhouse, Angel Investors", insiderTip: "Don't just sell the story. Slide 8 must always be 'Comparable Market Comps' proving exactly how this project makes a profit.", isPremiumStep: true }
        ]
    },
    "photographer-videographer": {
        category: "Creative Media", title: "Photographer / Videographer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.F.A. in Photography", desc: "Master exposure, lens compression, and storytelling before post-production.", link: "https://www.skillshare.com/", linkText: "Lens Compression Guide ↗", roi: "+15% Studio Rate", companies: "Vogue, Conde Nast, Highsnobiety", insiderTip: "A slightly out-of-focus shot with great emotion will always beat a tack-sharp shot with dead eyes. Directing talent is 80% of the job." },
            { type: "Technical Specialization", title: "Studio Lighting Masterclass", desc: "Learn shaping light with strobes and multi-point multi-strobe setups for commercial work.", link: "https://www.profoto.com/", linkText: "Master Studio Strobes ↗", roi: "+35% Rate Increase", companies: "Nike, Adidas, Apple Shoots", insiderTip: "Natural light is an excuse for amateurs. Learn 'Rembrandt' and 'Butterfly' lighting to control the mood in any environment." },
            { type: "Portfolio Strategy", title: "Create Spec Commercials", desc: "Clients need to see proof. Shoot 3 high-end 'fake' commercials for target brands.", link: "https://www.fstoppers.com/", linkText: "Spec Commercial Tips ↗", roi: "Breaks experience barriers", companies: "Top Talent Agencies", insiderTip: "Rent an incredible location for 2 hours, hire a real model, and shoot a spec ad. It instantly elevates your perceived tier." },
            { type: "Advanced Strategy", title: "High-End Retouching Pipelines", desc: "Master frequency separation and establish outsourcing pipelines for massive galleries.", link: "https://phlearn.com/", linkText: "Learn Frequency Separation ↗", roi: "+40% Time Efficiency", companies: "E-Commerce Giants", insiderTip: "Stop editing everything yourself. Knowing how to direct and manage overseas retouchers defines your profit margins.", isPremiumStep: true },
            { type: "Career Zenith", title: "B2B Retainer Contracts", desc: "Move away from exhausting one-off gigs by securing quarterly visual asset retainers.", link: "https://thefutur.com/", linkText: "B2B Sales for Creatives ↗", roi: "Predictable Six-Figure Income", companies: "Direct-to-Consumer Brands", insiderTip: "Pitch brands on 'Content Libraries'—giving them 30 new assets every month for a flat $3,000/mo fee. Consistent cash flow changes everything.", isPremiumStep: true }
        ]
    },

    
    "data-scientist": {
        category: "Creative Computing", title: "Data Scientist", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Math or CS", desc: "Master calculus and probability statistics for writing complex ML algorithms.", link: "https://www.khanacademy.org/", linkText: "Master Linear Algebra ↗", roi: "+20% Base Salary", companies: "Meta, OpenAI, Netflix", insiderTip: "Don't ignore Linear Algebra. It is the literal foundation of how neural networks process multi-dimensional data." },
            { type: "Technical Skill", title: "Python Data Stack", desc: "Learn Pandas, Matplotlib, and Scikit-Learn for manipulatiing messy data.", link: "https://www.kaggle.com/", linkText: "Kaggle Pandas Labs ↗", roi: "+15% Interview Callbacks", companies: "Required by 90% of Data Roles", insiderTip: "A beautifully clean, well-commented Jupyter Notebook in your GitHub portfolio is worth 100 times more than a generic resume." },
            { type: "Industry Cert", title: "AWS Machine Learning", desc: "Proves you can deploy and scale models on enterprise cloud infrastructure.", link: "https://aws.amazon.com/", linkText: "AWS ML Certification ↗", roi: "+$18k Salary Premium", companies: "Capital One, Uber, Palantir", insiderTip: "Being able to build a model locally is fine. Being able to containerize it and deploy it via an AWS SageMaker endpoint gets you hired." },
            { type: "Advanced Strategy", title: "Deep Learning (PyTorch)", desc: "Build advanced Computer Vision and Natural Language Processing (NLP) models.", link: "https://pytorch.org/", linkText: "Build PyTorch Models ↗", roi: "+35% Market Value", companies: "Anthropic, Google DeepMind", insiderTip: "Focus on fine-tuning pre-existing LLMs (like LLaMA or BERT) on custom datasets. This is currently the most heavily recruited skill in tech.", isPremiumStep: true },
            { type: "Career Zenith", title: "LeetCode Data Structures Prep", desc: "Master the algorithmic whiteboard tests that gatekeep Tier 1 tech salaries.", link: "https://leetcode.com/", linkText: "Grind LeetCode Algorithms ↗", roi: "+$50k Offer Variance", companies: "FAANG / MAANG", insiderTip: "Tech giants won't just test your ML knowledge. You must comfortably traverse binary trees and master Big-O notation in Python.", isPremiumStep: true }
        ]
    },
    "ux-ui-designer": {
        category: "Creative Computing", title: "UX/UI Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in HCI", desc: "Study cognitive user psychology and deep research methodologies.", link: "https://www.nngroup.com/", linkText: "Read Nielsen Norman Group ↗", roi: "+15% Base Salary", companies: "Apple, Airbnb, Spotify", insiderTip: "Accessibility (WCAG compliance) is not a bonus; it's a legal requirement for major apps. Mentioning this puts you ahead." },
            { type: "Tool Mastery", title: "Figma Prototyping", desc: "Build design systems and responsive screens for seamless engineering handoff.", link: "https://www.figma.com/", linkText: "Master Figma Components ↗", roi: "+20% Speed/Efficiency", companies: "Standard in 95% of Startups", insiderTip: "Don't just draw screens. Use Figma Variables and Auto-Layout to prove you can build scalable components for engineers." },
            { type: "Portfolio Shift", title: "Publish Case Studies", desc: "Companies hire based on documented problem-solving, not just pretty shots.", link: "https://vanschneider.com/", linkText: "Write Elite Case Studies ↗", roi: "Mandatory for Interviews", companies: "Stripe, Slack, Notion", insiderTip: "A case study must answer three things: What was the business goal? What did the users say? How did you measure success?" },
            { type: "Advanced Strategy", title: "A/B Testing & CRO", desc: "Learn Conversion Rate Optimization to prove the financial impact of your designs.", link: "https://cxl.com/", linkText: "Learn CRO Frameworks ↗", roi: "+$20k Negotiation Leverage", companies: "E-Commerce Giants, SaaS", insiderTip: "If you can walk into a performance review and say 'My button redesign increased checkouts by 2.4%', you can demand any salary you want.", isPremiumStep: true },
            { type: "Career Zenith", title: "Whiteboard Design Challenges", desc: "Master the 30-minute conceptual design frameworks used in final interview rounds.", link: "https://solvingproductdesignexercises.com/", linkText: "Ace Whiteboard Tests ↗", roi: "Passes the Final HR Gate", companies: "Silicon Valley Tier 1 Startups", insiderTip: "In whiteboard challenges, spending 15 minutes asking clarifying questions is better than spending 30 minutes drawing a perfect app.", isPremiumStep: true }
        ]
    },
    "full-stack-developer": {
        category: "Creative Computing", title: "Full Stack Developer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Computer Science", desc: "Master fundamentals: data structures, algorithms, and scalable system design.", link: "https://cs50.harvard.edu/", linkText: "Take Harvard CS50 ↗", roi: "+25% Starting Salary", companies: "Google, Microsoft, Plaid", insiderTip: "Don't rely heavily on AI to write your foundation. You must deeply understand how pointers and memory allocation work under the hood." },
            { type: "Modern Stack", title: "React & TypeScript", desc: "Learn modern frameworks used by high-growth startups for dynamic API apps.", link: "https://react.dev/", linkText: "Learn React Internals ↗", roi: "+30% Market Availability", companies: "Netflix, Uber, Discord", insiderTip: "Writing vanilla JavaScript is great, but migrating a project to strictly typed TypeScript proves you are ready for enterprise codebases." },
            { type: "Industry Cert", title: "AWS Associate Developer", desc: "Prove you can securely deploy and scale applications on cloud services.", link: "https://aws.amazon.com/", linkText: "Get AWS Certified ↗", roi: "+$15k Salary Bump", companies: "Amazon, FinTech Sector", insiderTip: "Learn how to build Serverless applications using AWS Lambda and API Gateway. It's the current industry standard." },
            { type: "Advanced Strategy", title: "System Architecture Design", desc: "Learn how to decouple monolithic applications into scalable microservices.", link: "https://bytebytego.com/", linkText: "Study System Design ↗", roi: "Gateway to Senior Dev", companies: "High-Traffic Tech Firms", insiderTip: "During interviews, discussing how you would scale a database to handle 1 million concurrent users is what gets you a Senior title.", isPremiumStep: true },
            { type: "Career Zenith", title: "Advanced CI/CD Pipelines", desc: "Automate testing and deployment using GitHub Actions, Docker, and Kubernetes.", link: "https://kubernetes.io/", linkText: "Master K8s & Docker ↗", roi: "+25% Resume Callback Rate", companies: "Virtually all Modern Startups", insiderTip: "A developer who can write the code AND set up the pipeline to deploy it automatically is considered a '10x engineer' to startups.", isPremiumStep: true }
        ]
    },
    "graphic-designer": {
        category: "Creative Computing", title: "Graphic Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.F.A. in Graphic Design", desc: "Dive into historical typography, grid systems, and brand identity architecture.", link: "https://www.eyemagazine.com/", linkText: "Study Design History ↗", roi: "+10% Agency Starting Rate", companies: "Pentagram, IDEO, Wolff Olins", insiderTip: "Understanding 'Whitespace' and grid alignment separates a junior Canva designer from a high-paid professional." },
            { type: "Skill Expansion", title: "Motion (After Effects)", desc: "Static design is dying. Master UI asset animation to stay employable.", link: "https://www.schoolofmotion.com/", linkText: "Learn After Effects ↗", roi: "+22% Freelance Value", companies: "Apple Marketing, Twitch In-House", insiderTip: "Adding smooth easing curves to your keyframes makes your animations look expensive. Linear keyframes look cheap." },
            { type: "Industry Cert", title: "Adobe Professional", desc: "Validate speed and non-destructive workflow habits in vector design.", link: "https://certifiedprofessional.adobe.com/", linkText: "Adobe Certification ↗", roi: "+8% Salary Negotiation", companies: "Global Ad Agencies", insiderTip: "Mastering the pen tool and keyboard shortcuts allows you to execute client revisions twice as fast as your peers." },
            { type: "Advanced Strategy", title: "3D Asset Integration (Blender)", desc: "Combine 2D vectors with 3D modeling to meet modern web design trends.", link: "https://www.blender.org/", linkText: "Start Blender Donut ↗", roi: "+35% Portfolio Engagement", companies: "Web3 Brands, SaaS Marketing", insiderTip: "Modern landing pages demand glass-morphism and 3D floating elements. Knowing basic Blender doubles your freelance rate.", isPremiumStep: true },
            { type: "Career Zenith", title: "Brand Strategy & Art Direction", desc: "Stop making logos and start building comprehensive, psychological brand bibles.", link: "https://thefutur.com/", linkText: "Master Brand Strategy ↗", roi: "Ability to Charge $10k+ Flats", companies: "Boutique Design Agencies", insiderTip: "Clients don't pay $10,000 for a logo. They pay $10,000 for a 40-page brand strategy that positions them perfectly in their market.", isPremiumStep: true }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    
    
    function checkPremiumStatus() {
        let isPremium = localStorage.getItem('isPremium') === 'true';
        const userStr = localStorage.getItem('loggedInUser');
        if (userStr) {
            try {
                const userObj = JSON.parse(userStr);
                if (userObj.isPremium) isPremium = true;
            } catch(e) {}
        }
        return isPremium;
    }

    
    const canvas = document.getElementById("neural-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;
    let width, height, particles;
    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

    function initCanvas() {
        if (!canvas || !ctx) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = Array.from({ length: 80 }, () => new Particle());
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width; this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x; this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.beginPath();
            if (ctx.ellipse) ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, Math.PI * 2);
            else ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.y -= 0.5;
            if (this.y > height) this.y = 0; if (this.y < 0) this.y = height;
            let dx = mouse.x - this.x, dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                let force = (mouse.radius - dist) / mouse.radius;
                this.x -= (dx / dist) * force * this.density;
                this.y -= (dy / dist) * force * this.density;
            } else {
                this.x -= (this.x - this.baseX) / 10;
                this.y -= (this.y - this.baseY) / 10;
            }
        }
    }

    function animateCanvas() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, i) => {
            p.update(); p.draw();
            for (let j = i; j < particles.length; j++) {
                let dx = p.x - particles[j].x, dy = p.y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath(); ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/100})`;
                    ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateCanvas);
    }
    
    if (canvas && ctx) {
        initCanvas(); animateCanvas();
        window.addEventListener('resize', initCanvas);
    }

    
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 120;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 120;
            const tiltCards = document.querySelectorAll('.tilt-card, .node-content');
            
            requestAnimationFrame(() => {
                tiltCards.forEach(card => {
                    const rotateY = Math.max(-6, Math.min(6, -xAxis));
                    const rotateX = Math.max(-6, Math.min(6, yAxis));
                    card.style.transform = `translateZ(0) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                });
            });
        });
    }

    
    let roleKey = localStorage.getItem('userPath');
    const isPremium = checkPremiumStatus(); 

    let data = null;

    if (roleKey && roleKey !== "unknown") {
        data = roadmapDatabase[roleKey];
        if (!data) {
            const cleanRoleKey = roleKey.replace(/[^a-z0-9]/g, '');
            for (let key of Object.keys(roadmapDatabase)) {
                const cleanDbKey = key.replace(/[^a-z0-9]/g, '');
                if (cleanRoleKey.includes(cleanDbKey) || cleanDbKey.includes(cleanRoleKey)) {
                    data = roadmapDatabase[key];
                    break;
                }
            }
        }
    }

    if (!data) {
        alert("Roadmap not found! Please run the Discovery Engine to generate your specific career path.");
        window.location.href = '/#discovery';
        return; 
    }
    
    
    document.documentElement.style.setProperty('--theme-color', data.themeColor);
    const catBadge = document.getElementById('category-badge');
    if (catBadge) catBadge.innerText = data.category;
    const roleTitleEl = document.getElementById('role-title');
    if (roleTitleEl) roleTitleEl.innerText = data.title;

    
    if (isPremium) {
        const locBanner = document.getElementById('localization-banner');
        const locText = document.getElementById('loc-text');
        if (locBanner && locText) {
            locBanner.classList.remove('hidden');
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
            let region = "Global Market";
            let insight = "Demand is steady.";
            
            if (tz.includes('Asia/Dubai') || tz.includes('Middle_East') || tz.includes('Asia/Qatar')) {
                region = "UAE & GCC Market";
                insight = "Tech hiring is seeing a 22% YoY growth in this sector.";
            } else if (tz.includes('America')) {
                region = "North American Market";
                insight = "Highly competitive; certifications yield higher ROI.";
            } else if (tz.includes('Europe')) {
                region = "European Market";
                insight = "Strong demand driven by GDPR and EU tech compliance laws.";
            }

            locText.innerHTML = `Localized for: <strong>${region}</strong> — ${insight}`;
        }
    }

    
    const timelineContainer = document.getElementById('timeline-container');

    if (timelineContainer) {
        data.steps.forEach((step, index) => {
            
            const isLockedStep = !isPremium && step.isPremiumStep;

            let premiumContent = "";
            let actionHtml = "";
            let stepTitle = step.title;
            let stepDesc = step.desc;
            let blurStyle = "";
            let markerContent = index + 1;

            if (isLockedStep) {
                stepTitle = "🔒 Premium Strategy Locked";
                stepDesc = "Upgrade to Premium to reveal this advanced career strategy, insider negotiation tactics, and high-tier roadmap steps.";
                actionHtml = `<button class="complete-btn locked-btn" disabled style="background: rgba(0,0,0,0.5);">🔒 Premium Required</button>`;
                blurStyle = `style="opacity: 0.6; filter: grayscale(1) blur(1px); border-color: rgba(255,255,255,0.1);"`;
                markerContent = "🔒";
            } else {
                if (isPremium) {
                    actionHtml = `<button class="complete-btn" data-skill="${step.title}">Mark as Complete</button>`;
                    premiumContent = `
                        <div class="premium-features-block" style="background: rgba(0,0,0,0.4); border-left: 3px solid var(--theme-color);">
                            <div class="roi-badge" style="color: var(--theme-color); border-color: rgba(255, 255, 255, 0.2); background: rgba(0,0,0,0.2);">
                                📈 Expected ROI: ${step.roi}
                            </div>
                            <details class="corp-insights">
                                <summary>🏢 Corporate Insights & Secret Tip</summary>
                                <div class="corp-content">
                                    <p><strong>Required by:</strong> ${step.companies}</p>
                                    <p style="margin-top: 10px; color: var(--theme-color);"><em>Insider Tip:</em> ${step.insiderTip}</p>
                                </div>
                            </details>
                        </div>
                    `;
                } else {
                    actionHtml = `<button class="complete-btn locked-btn" disabled>🔒 Track Progress (Premium)</button>`;
                }
            }

            const stepHTML = `
                <div class="timeline-node" data-step="${index + 1}">
                    <div class="node-marker" ${isLockedStep ? 'style="background: #111; color: #666; border-color: #333;"' : ''}>${markerContent}</div>
                    <div class="glass-card node-content tilt-card" ${blurStyle}>
                        <span class="node-type">${step.type}</span>
                        <h2>${stepTitle}</h2>
                        <p>${stepDesc}</p>
                        ${premiumContent}
                        ${!isLockedStep ? `
                        <div class="resources">
                            <a href="${step.link}" class="resource-link" target="_blank">${step.linkText} ↗</a>
                        </div>` : ''}
                        <div class="node-action">
                            ${actionHtml}
                        </div>
                    </div>
                </div>
            `;
            timelineContainer.insertAdjacentHTML('beforeend', stepHTML);
        });
    }

    if (typeof anime !== 'undefined') {
        anime({
            targets: '.timeline-node',
            translateY: [50, 0], opacity: [0, 1],
            delay: anime.stagger(150, {start: 300}),
            duration: 800, easing: 'easeOutExpo'
        });
    }

    const globalProgress = document.querySelector('.global-progress');
    const pdfBtn = document.getElementById('download-pdf-btn');

    if (!isPremium && globalProgress) {
        globalProgress.innerHTML = `
            <div class="progress-info">
                <span id="progress-label">Career Readiness Tracking</span>
                <span style="color: var(--text-muted); font-weight: normal;">🔒 Premium Required</span>
            </div>
            <div class="progress-track" style="opacity: 0.3;">
                <div class="progress-fill" style="width: 0%;"></div>
            </div>
        `;
    } else if (isPremium) {
        initProgressTracking();
        if(pdfBtn) {
            pdfBtn.classList.remove('hidden');
            
            pdfBtn.addEventListener('click', () => {
                
                document.querySelectorAll('details').forEach(el => el.setAttribute('open', 'true'));
                document.body.classList.add('is-printing');
                document.querySelectorAll('.tilt-card').forEach(c => {
                    c.style.transform = 'none';
                    c.style.transition = 'none';
                });
                setTimeout(() => {
                    window.print();
                    document.body.classList.remove('is-printing');
                }, 300);
            });
        }
    }


    
    const simNav = document.getElementById('roadmap-sim-nav');
    const realityNav = document.getElementById('roadmap-reality-nav');
    const premiumModal = document.getElementById('premium-required-modal');
    const paywallModal = document.getElementById('paywall-modal');
    const upgradeBtn = document.getElementById('upgrade-btn');
    const upgradeCancelBtn = document.getElementById('upgrade-cancel-btn');
    const paywallBuyBtn = document.getElementById('paywall-buy-btn');
    const paywallCancelBtn = document.getElementById('paywall-cancel-btn');
    
    
    const engineNav = document.getElementById('engine-nav-link');
    const engineModal = document.getElementById('engine-modal');
    const engineCloseBtn = document.getElementById('engine-close-btn');

    function showModal(modal) {
        if (modal) {
            modal.classList.add('active');
            const content = modal.querySelector('.modal-content');
            if (content) anime({ targets: content, scale: [0.8, 1], translateY: [20, 0], opacity: [0, 1], duration: 600, easing: 'easeOutElastic(1, .6)' });
        }
    }

    function hideModals() {
        [premiumModal, paywallModal, engineModal].forEach(modal => {
            if (modal && modal.classList.contains('active')) {
                const content = modal.querySelector('.modal-content');
                if (content) {
                    anime({
                        targets: content, scale: [1, 0.8], translateY: [0, 20], opacity: [1, 0],
                        duration: 300, easing: 'easeInQuad',
                        complete: () => modal.classList.remove('active')
                    });
                } else {
                    modal.classList.remove('active');
                }
            }
        });
    }

    function handleNavClick(e) {
        const isUserPremium = checkPremiumStatus(); 
        if (!isUserPremium) {
            e.preventDefault(); 
            showModal(premiumModal);
        }
    }

    if (simNav) simNav.addEventListener('click', handleNavClick);
    if (realityNav) realityNav.addEventListener('click', handleNavClick);
    
    if (engineNav) {
        engineNav.addEventListener('click', (e) => { 
            e.preventDefault(); 
            showModal(engineModal); 
        });
    }
    
    if (engineCloseBtn) engineCloseBtn.addEventListener('click', hideModals);

    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', () => {
            hideModals();
            showModal(paywallModal);
        });
    }

    if (upgradeCancelBtn) upgradeCancelBtn.addEventListener('click', hideModals);
    if (paywallCancelBtn) paywallCancelBtn.addEventListener('click', hideModals);

    if (paywallBuyBtn) {
        paywallBuyBtn.addEventListener('click', async () => {
            
            const userStr = localStorage.getItem('loggedInUser');
            let email = null;
            let userObj = null;
            
            if (userStr) {
                try {
                    userObj = JSON.parse(userStr);
                    email = userObj.email;
                } catch(e) { console.error('Failed to parse user profile:', e); }
            }

            if (email) {
                paywallBuyBtn.innerText = 'Processing...';
                paywallBuyBtn.disabled = true;
                try {
                    const res = await fetch('/api/upgrade-premium', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email })
                    });
                    if (res.ok) {
                        userObj.isPremium = true;
                        localStorage.setItem('loggedInUser', JSON.stringify(userObj));
                    }
                } catch (e) { console.error('Failed to update DB:', e); }
                paywallBuyBtn.innerText = 'Complete Purchase';
                paywallBuyBtn.disabled = false;
            } else if (userObj) {
                    userObj.isPremium = true; 
                    localStorage.setItem('loggedInUser', JSON.stringify(userObj));
            }
            
            localStorage.setItem('isPremium', 'true');
            
            hideModals();
            alert('Purchase Successful! Access Unlocked.');
            window.location.reload(); 
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === premiumModal || e.target === paywallModal || e.target === engineModal) {
            hideModals();
        }
    });

    
    const inputField = document.getElementById("strength-input");
    const analyzeBtn = document.getElementById("analyze-btn");
    const resultArea = document.getElementById("result-area");
    const roleCategory = document.getElementById("modal-role-category");
    const roleTitle = document.getElementById("modal-role-title");
    const roleReason = document.getElementById("modal-role-reason");
    const matchPercent = document.getElementById("modal-match-percent");
    const applyRoadmapBtn = document.getElementById("apply-roadmap-btn");

    const paths = {
        media: { title: "Creative Media", color: "#b026ff" },
        computing: { title: "Creative Computing", color: "#00f3ff" },
        cyber: { title: "Cybersecurity", color: "#39ff14" },
        unknown: { title: "Unrecognized Input", color: "#ff3333" }
    };

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    function cipherEffect(element, finalString) {
        if (!element || !finalString) return;
        let iteration = 0;
        clearInterval(element.dataset.intervalId);
        element.dataset.intervalId = setInterval(() => {
            element.innerText = finalString.split("").map((letter, index) => {
                if(index < iteration) return finalString[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if(iteration >= finalString.length) clearInterval(element.dataset.intervalId);
            iteration += 1 / 3;
        }, 30);
    }

    let tempRoleSlug = "";

    async function triggerAnalysis() {
        const text = inputField.value.trim();
        if (!text) {
            anime({ targets: inputField, translateX: [0, -10, 10, -10, 10, 0], duration: 400 });
            return;
        }

        cipherEffect(analyzeBtn, "UPLOADING...");
        const pulse = anime({
            targets: inputField,
            boxShadow: [`0 0 0px var(--theme-color)`, `0 0 30px var(--theme-color)`, `0 0 0px var(--theme-color)`],
            duration: 1000, loop: true, easing: 'easeInOutSine'
        });

        try {
            const response = await fetch('/api/analyze.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: text })
            });

            if (!response.ok) throw new Error("Server Error");
            const aiData = await response.json();
            
            pulse.pause();
            cipherEffect(analyzeBtn, "ANALYZE");
            renderEngineResult(aiData);

        } catch (error) {
            console.error("AI Error:", error);
            pulse.pause();
            cipherEffect(analyzeBtn, "OFFLINE");
            renderEngineResult({ category: "unknown", role: "Connection Lost", accuracy: 0, reason: "Could not connect to the neural net." });
        }
    }

    function renderEngineResult(aiData) {
        const pathData = paths[aiData.category] || paths.unknown;
        resultArea.classList.remove("hidden");
        
        if(aiData.role) {
            tempRoleSlug = slugify(aiData.role);
            applyRoadmapBtn.dataset.tempRole = aiData.role;
            applyRoadmapBtn.dataset.tempCategory = aiData.category;
            applyRoadmapBtn.dataset.tempAccuracy = aiData.accuracy;
            applyRoadmapBtn.dataset.tempReason = aiData.reason;
        }
        
        roleCategory.innerText = pathData.title;
        roleCategory.style.color = pathData.color;
        roleCategory.style.borderColor = pathData.color;
        cipherEffect(roleTitle, aiData.role);
        roleReason.innerText = `"${aiData.reason}"`;

        if (aiData.category === "unknown") {
            document.getElementById('modal-match-progress').style.width = '0%';
            matchPercent.innerText = "0";
            applyRoadmapBtn.style.opacity = 0;
            return;
        }

        const counterObj = { val: 0 };
        anime.timeline({ easing: 'easeOutExpo' })
            .add({ targets: resultArea, opacity: [0, 1], translateY: [20, 0], duration: 600 })
            .add({ targets: '#modal-match-progress', width: ['0%', `${aiData.accuracy}%`], backgroundColor: pathData.color, boxShadow: `0 0 10px ${pathData.color}`, duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=200')
            .add({ targets: counterObj, val: aiData.accuracy, round: 1, duration: 1500, update: () => { matchPercent.innerText = counterObj.val; } }, '-=1500')
            .add({ targets: applyRoadmapBtn, scale: [0.8, 1], opacity: [0, 1], easing: 'spring(1, 80, 10, 0)' }, '-=800');
    }

    if (analyzeBtn && inputField) {
        analyzeBtn.addEventListener("click", triggerAnalysis);
        inputField.addEventListener("keypress", (e) => { if (e.key === "Enter") triggerAnalysis(); });
    }

    if (applyRoadmapBtn) {
        applyRoadmapBtn.addEventListener("click", () => {
            if (tempRoleSlug) {
                localStorage.setItem('userPath', tempRoleSlug);
                localStorage.setItem('courseData', JSON.stringify({
                    role: applyRoadmapBtn.dataset.tempRole,
                    slug: tempRoleSlug,
                    category: applyRoadmapBtn.dataset.tempCategory,
                    accuracy: applyRoadmapBtn.dataset.tempAccuracy,
                    reason: applyRoadmapBtn.dataset.tempReason
                }));
                window.location.reload();
            }
        });
    }
});


function createSparkles(x, y, color) {
    for(let i=0; i<12; i++) {
        let spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.width = '6px';
        spark.style.height = '6px';
        spark.style.backgroundColor = color;
        spark.style.boxShadow = `0 0 10px ${color}`;
        spark.style.borderRadius = '50%';
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '9999';
        document.body.appendChild(spark);
        
        anime({
            targets: spark,
            translateX: (Math.random() - 0.5) * 150,
            translateY: (Math.random() - 0.5) * 150,
            opacity: [1, 0],
            scale: [1, 0],
            duration: 800 + Math.random() * 400,
            easing: 'easeOutExpo',
            complete: () => spark.remove()
        });
    }
}

function initProgressTracking() {
    const completeBtns = document.querySelectorAll('.complete-btn');
    const globalProgressFill = document.getElementById('global-progress-fill');
    const progressText = document.getElementById('progress-text');
    const toast = document.getElementById('level-up-toast');
    const toastMessage = document.getElementById('toast-message');
    
    let totalSteps = completeBtns.length;
    let completedSteps = 0;

    function updateProgress() {
        const percentage = Math.round((completedSteps / totalSteps) * 100);
        if (globalProgressFill) {
            globalProgressFill.style.width = `${percentage}%`;
            
            if (percentage > 0) globalProgressFill.classList.add('active');
        }
        if (progressText) progressText.innerText = `${percentage}%`;
    }

    function showToast(skillName) {
        if (toastMessage) toastMessage.innerText = `Acquired: ${skillName}`;
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3500);
        }
    }

    completeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('completed')) return;
            
            
            const rect = this.getBoundingClientRect();
            const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim() || '#fff';
            createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, themeColor);

            this.classList.add('completed');
            this.innerText = "✓ Completed";
            const parentNode = this.closest('.timeline-node');
            if (parentNode) parentNode.classList.add('is-completed');
            completedSteps++;
            updateProgress();
            showToast(this.getAttribute('data-skill'));
        });
    });
}