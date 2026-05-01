// --- THE MASTER DATABASE: ALL 12 JOBS ---
const roadmapDatabase = {
    // 1. CYBERSECURITY (Green)
    "digital-forensics": {
        category: "Cybersecurity", title: "Digital Forensics Analyst", themeColor: "#39ff14",
        steps: [
            { type: "Academic Need", title: "B.S. in Cybersecurity / Forensics", desc: "Learn operating system architecture and chain of custody.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Autopsy & EnCase Training", desc: "Master the standard software used by law enforcement.", link: "#", linkText: "View Coursera Module" },
            { type: "Industry Cert", title: "GIAC Certified Forensic Examiner (GCFE)", desc: "The gold standard for proving your investigation skills.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "cybersecurity-consultant": {
        category: "Cybersecurity", title: "Cybersecurity Consultant", themeColor: "#39ff14",
        steps: [
            { type: "Academic Need", title: "B.S. in IT or Business Admin", desc: "Bridge the gap between business risk and technical defense.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "NIST Framework Deep Dive", desc: "Learn how to audit companies based on government standards.", link: "#", linkText: "View Short Course" },
            { type: "Industry Cert", title: "CISSP", desc: "Advanced certification required for senior consulting roles.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "penetration-tester": {
        category: "Cybersecurity", title: "Penetration Tester", themeColor: "#39ff14",
        steps: [
            { type: "Academic Need", title: "B.S. in Computer Science", desc: "Build foundational knowledge of networks and coding.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "HackTheBox Academy", desc: "Practice exploiting vulnerable machines in a legal environment.", link: "#", linkText: "Start Hacking" },
            { type: "Industry Cert", title: "CompTIA PenTest+ or OSCP", desc: "Validate your offensive security and reporting skills.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "security-analyst": {
        category: "Cybersecurity", title: "Security Analyst (SOC)", themeColor: "#39ff14",
        steps: [
            { type: "Academic Need", title: "B.S. in IT or Cybersecurity", desc: "Focus on network traffic analysis and threat detection.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Splunk / SIEM Training", desc: "Learn how to read logs and track active network threats.", link: "#", linkText: "View Training" },
            { type: "Industry Cert", title: "CompTIA CySA+", desc: "The baseline certification for defense analysts.", link: "#", linkText: "View Exam Details" }
        ]
    },

    // 2. CREATIVE MEDIA (Purple)
    "video-editor": {
        category: "Creative Media", title: "Video Editor", themeColor: "#b026ff",
        steps: [
            { type: "Academic Need", title: "B.A. in Film or Media Studies", desc: "Learn narrative pacing, story structure, and visual theory.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Advanced Color Grading", desc: "Take a specialized course in DaVinci Resolve color theory.", link: "#", linkText: "View Masterclass" },
            { type: "Industry Cert", title: "Adobe Premiere Pro Certified", desc: "Prove your technical speed and software mastery.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "content-creator": {
        category: "Creative Media", title: "Content Creator", themeColor: "#b026ff",
        steps: [
            { type: "Academic Need", title: "B.A. in Communications / Marketing", desc: "Understand audience psychology and digital media law.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Algorithm & SEO Mastery", desc: "Learn how platforms push content and how to hack retention.", link: "#", linkText: "View Short Course" },
            { type: "Industry Cert", title: "YouTube Channel Growth Cert", desc: "Official best practices directly from Google.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "creative-producer": {
        category: "Creative Media", title: "Creative Producer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Need", title: "B.A. in Media Production / Management", desc: "Learn budgeting, scheduling, and team management.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Agile for Creatives", desc: "Adapt tech-industry project management for art teams.", link: "#", linkText: "View Short Course" },
            { type: "Industry Cert", title: "Project Management Professional (PMP)", desc: "The ultimate certification for handling massive budgets.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "photographer-videographer": {
        category: "Creative Media", title: "Photographer / Videographer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Need", title: "B.F.A. in Photography", desc: "Master lighting, composition, and visual storytelling.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Studio Lighting Masterclass", desc: "Bridge the gap between natural light and commercial sets.", link: "#", linkText: "View Masterclass" },
            { type: "Portfolio Need", title: "Build a Commercial Reel", desc: "Your reel gets you hired. Create 3 spec commercials.", link: "#", linkText: "View Portfolio Tips" }
        ]
    },

    // 3. CREATIVE COMPUTING (Cyan)
    "datascientist": {
        category: "Creative Computing", title: "Data Scientist", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Need", title: "B.S. in Math, Stats, or CS", desc: "Calculus, linear algebra, and probability are non-negotiable.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Python for Data Visualization", desc: "Learn pandas, matplotlib, and seaborn.", link: "#", linkText: "View Bootcamp" },
            { type: "Industry Cert", title: "Google Data Analytics Certificate", desc: "A fast-track to learning R, SQL, and Tableau.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "ux-ui-designer": {
        category: "Creative Computing", title: "UX/UI Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Need", title: "B.S. in Human-Computer Interaction", desc: "Learn user psychology, accessibility, and research.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Figma Advanced Prototyping", desc: "Learn components, variables, and auto-layout.", link: "#", linkText: "View Masterclass" },
            { type: "Portfolio Need", title: "Publish 3 Case Studies", desc: "Companies hire UX designers based on problem-solving process.", link: "#", linkText: "View Templates" }
        ]
    },
    "full-stack-developer": {
        category: "Creative Computing", title: "Full Stack Developer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Need", title: "B.S. in Computer Science", desc: "Master data structures, algorithms, and system design.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "React & Node.js Bootcamp", desc: "Learn the specific frameworks used by modern startups.", link: "#", linkText: "View Bootcamp" },
            { type: "Industry Cert", title: "AWS Certified Developer", desc: "Prove you can deploy your applications to the cloud.", link: "#", linkText: "View Exam Details" }
        ]
    },
    "graphic-designer": {
        category: "Creative Computing", title: "Graphic Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Need", title: "B.F.A. in Graphic Design", desc: "Deep dive into typography, color theory, and grid systems.", link: "#", linkText: "View Programs" },
            { type: "Gap Course", title: "Motion Graphics for UI", desc: "Modern designers must know how to animate their assets (After Effects).", link: "#", linkText: "View Short Course" },
            { type: "Industry Cert", title: "Adobe Certified Professional (Illustrator)", desc: "Validate your vector design speed and accuracy.", link: "#", linkText: "View Exam Details" }
        ]
    }
};

// --- INITIALIZATION & LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    // READ FROM LOCAL STORAGE INSTEAD OF THE URL!
    let roleKey = localStorage.getItem('userPath');

    // Default fallback just in case
    if (!roleKey || !roadmapDatabase[roleKey]) {
        roleKey = 'pen_tester'; 
    }

    const data = roadmapDatabase[roleKey];
    
    // ... the rest of the file stays exactly the same!

    // 2. Inject Theme Color and Header Info
    document.documentElement.style.setProperty('--theme-color', data.themeColor);
    document.getElementById('category-badge').innerText = data.category;
    document.getElementById('role-title').innerText = data.title;

    // 3. Render the Timeline Dynamically
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '<div class="timeline-line"></div>'; // Clear and add line

    data.steps.forEach((step, index) => {
        // Adding animation delay based on index so they cascade in
        const delay = index * 0.15;
        const stepHTML = `
            <div class="timeline-node glass-card" data-step="${index + 1}" style="animation-delay: ${delay}s">
                <div class="node-marker">${index + 1}</div>
                <div class="node-content">
                    <span class="node-type">${step.type}</span>
                    <h2>${step.title}</h2>
                    <p>${step.desc}</p>
                    <div class="resources">
                        <a href="${step.link}" class="resource-link" target="_blank">${step.linkText} ↗</a>
                    </div>
                    <div class="node-action">
                        <button class="complete-btn" data-skill="${step.title}">Mark as Complete</button>
                    </div>
                </div>
            </div>
        `;
        timelineContainer.insertAdjacentHTML('beforeend', stepHTML);
    });

    // 4. Attach Event Listeners to the New Buttons
    initProgressTracking();
});

// --- PROGRESS TRACKING & TOAST NOTIFICATIONS ---
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
        globalProgressFill.style.width = `${percentage}%`;
        progressText.innerText = `${percentage}%`;
    }

    function showToast(skillName) {
        toastMessage.innerText = `Acquired: ${skillName}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }

    completeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('completed')) return;

            // Mark as Complete
            this.classList.add('completed');
            this.innerText = "✓ Completed";
            
            // Visual update to parent card
            const parentNode = this.closest('.timeline-node');
            parentNode.classList.add('is-completed');

            completedSteps++;
            updateProgress();

            const skill = this.getAttribute('data-skill');
            showToast(skill);
        });
    });
}