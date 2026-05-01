// --- THE MASTER DATABASE: ALL 12 JOBS ---
const roadmapDatabase = {
    // 1. CYBERSECURITY (Green #39ff14)
    "digital-forensics": {
        category: "Cybersecurity", title: "Digital Forensics Analyst", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Cybersecurity / Forensics", desc: "Master operating system architecture, file systems, and understands legal chain of custody.", link: "#", linkText: "View Programs", roi: "+12% Base Salary", companies: "FBI, Mandiant, CrowdStrike" },
            { type: "Technical Skill", title: "Autopsy & EnCase Mastery", desc: "Gain hands-on experience recovering deleted data and analyzing memory dumps.", link: "#", linkText: "View Training", roi: "+18% Interview Callbacks", companies: "Standard for Enterprise IR Teams" },
            { type: "Industry Cert", title: "GCFE Certification", desc: "Prove your investigation skills in court or boardroom settings.", link: "#", linkText: "View Exam", roi: "+$15k Salary Bump", companies: "FireEye, IBM, DoD" }
        ]
    },
    "cybersecurity-consultant": {
        category: "Cybersecurity", title: "Cybersecurity Consultant", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in IT or Business", desc: "Bridge technical defense with executive boardroom risk strategy.", link: "#", linkText: "View Programs", roi: "+10% Offer Value", companies: "PwC, KPMG, EY, McKinsey" },
            { type: "Framework Mastery", title: "NIST & ISO 27001", desc: "Learn to audit multi-million dollar companies against government standards.", link: "#", linkText: "View Course", roi: "+22% Billing Rate", companies: "Big 4, Federal Contractors" },
            { type: "Industry Cert", title: "CISSP Path", desc: "The ultimate managerial validation for high-level security architecture.", link: "#", linkText: "View Path", roi: "+25% Lifetime ROI", companies: "Google Cloud, AWS, Booz Allen" }
        ]
    },
    "penetration-tester": {
        category: "Cybersecurity", title: "Penetration Tester", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Computer Science", desc: "Master networking internals and scripting languages (Python/Bash) for attack automation.", link: "#", linkText: "View Programs", roi: "+15% Base Salary", companies: "Rapid7, Bishop Fox, NCC Group" },
            { type: "Practical Lab", title: "HackTheBox Practice", desc: "Stop reading and start exploiting vulnerable machines in a safe, legal sandbox.", link: "#", linkText: "Start Hacking", roi: "+40% Tech Assessment Pass Rate", companies: "Recognized by top security boutiques" },
            { type: "Industry Cert", title: "OSCP Practical Exam", desc: "A grueling 24-hour exam that is the most respected technical cert in the industry.", link: "#", linkText: "View Details", roi: "+$20k Salary Increase", companies: "Apple, Meta, Tier 1 Red Teams" }
        ]
    },
    "security-analyst": {
        category: "Cybersecurity", title: "Security Analyst (SOC)", themeColor: "#39ff14",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Cybersecurity", desc: "Focus on network traffic analysis and understanding the cyber kill chain.", link: "#", linkText: "View Programs", roi: "+10% Starting Offer", companies: "Cisco, Palo Alto Networks" },
            { type: "Tool Mastery", title: "Splunk Log Analysis", desc: "Learn how to sift through millions of logs in real-time to track hacker footprints.", link: "#", linkText: "View Training", roi: "+15% Market Value", companies: "Required by 85% of Fortune 500 SOCs" },
            { type: "Industry Cert", title: "CompTIA CySA+", desc: "Apply behavioral analytics to combat cybersecurity threats on enterprise networks.", link: "#", linkText: "View Details", roi: "+12% Negotiation Power", companies: "Microsoft Defense, Target Security" }
        ]
    },

    // 2. CREATIVE MEDIA (Purple #b026ff)
    "video-editor": {
        category: "Creative Media", title: "Video Editor", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Film Studies", desc: "Study narrative pacing, classic structure, and emotional manipulation through visuals.", link: "#", linkText: "View Programs", roi: "+10% Day Rate", companies: "Netflix, Condé Nast, Sony" },
            { type: "Specialization", title: "Advanced Color Grading", desc: "Master DaVinci Resolve color theory, nodes, and LUTs for cinematic quality.", link: "#", linkText: "View Masterclass", roi: "+25% Freelance Premium", companies: "HBO, A24, Ad Agencies" },
            { type: "Portfolio Shift", title: "Build Niche Reels", desc: "Stop generalizing; build 3 distinct reels targeted at specific commercial sectors.", link: "#", linkText: "View Tips", roi: "+50% Lead Conversion", companies: "Ogilvy, Red Bull, Vice" }
        ]
    },
    "content-creator": {
        category: "Creative Media", title: "Content Creator", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Marketing", desc: "Understand human psychology and campaigns that drive measurable sales.", link: "#", linkText: "View Programs", roi: "+15% Corporate Base", companies: "VaynerMedia, HubSpot, TikTok" },
            { type: "Technical Skill", title: "Algorithm & SEO Mastery", desc: "Master YouTube CTR/AVD and SEO hook structures to hack audience retention.", link: "#", linkText: "View Course", roi: "+30% Growth Velocity", companies: "MrBeast Media, Night, Spotter" },
            { type: "Industry Cert", title: "Data for Creators", desc: "Learn retention graph analysis to pitch sponsorships professionally.", link: "#", linkText: "View Certs", roi: "+40% Sponsorship Deal Size", companies: "Global Brand Agencies" }
        ]
    },
    "creative-producer": {
        category: "Creative Media", title: "Creative Producer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.A. in Media Management", desc: "Learn budgeting, complex scheduling, and managing diverse creative teams.", link: "#", linkText: "View Programs", roi: "+12% Base Salary", companies: "Disney, Apple TV, Spotify" },
            { type: "Methodology", title: "Agile for Art Teams", desc: "Adapt tech project management (Jira/Asana) for fast-paced creative art teams.", link: "#", linkText: "View Course", roi: "+18% Hiring Preference", companies: "EA Games, Epic Games" },
            { type: "Industry Cert", title: "PMP Certification", desc: "Proves you can handle massive budgets and timelines without failure.", link: "#", linkText: "View Details", roi: "+$25k Salary Bump", companies: "Universal, Paramount, Major Agencies" }
        ]
    },
    "photographer-videographer": {
        category: "Creative Media", title: "Photographer / Videographer", themeColor: "#b026ff",
        steps: [
            { type: "Academic Foundation", title: "B.F.A. in Photography", desc: "Master exposure, lens compression, and storytelling before post-production.", link: "#", linkText: "View Programs", roi: "+15% Studio Rate", companies: "Vogue, Vogue, Highsnobiety" },
            { type: "Technical Specialization", title: "Studio Lighting Masterclass", desc: "Learn shaping light with strobes and multi-point multi-strobe setups for commercial work.", link: "#", linkText: "View Course", roi: "+35% Rate Increase", companies: "Nike, Adidas, Apple Shoots" },
            { type: "Portfolio Strategy", title: "Create Spec Commercials", desc: "Clients need to see proof. Shoot 3 high-end 'fake' commercials for target brands.", link: "#", linkText: "View Tips", roi: "Breaks experience barriers", companies: "Top Talent Agencies" }
        ]
    },

    // 3. CREATIVE COMPUTING (Cyan #00f3ff)
    "data-scientist": {
        category: "Creative Computing", title: "Data Scientist", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Math or CS", desc: "Master calculus and probability statistics for writing complex ML algorithms.", link: "#", linkText: "View Programs", roi: "+20% Base Salary", companies: "Meta, OpenAI, Netflix" },
            { type: "Technical Skill", title: "Python Data Stack", desc: "Learn Pandas, Matplotlib, and Scikit-Learn for manipulatiing messy data.", link: "#", linkText: "View Bootcamp", roi: "+15% Interview Callbacks", companies: "Required by 90% of Data Roles" },
            { type: "Industry Cert", title: "AWS Machine Learning", desc: "Proves you can deploy and scale models on enterprise cloud infrastructure.", link: "#", linkText: "View Details", roi: "+$18k Salary Premium", companies: "Capital One, Uber, Palantir" }
        ]
    },
    "ux-ui-designer": {
        category: "Creative Computing", title: "UX/UI Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in HCI", desc: "Study cognitive user psychology and deep research methodologies.", link: "#", linkText: "View Programs", roi: "+15% Base Salary", companies: "Apple, Airbnb, Spotify" },
            { type: "Tool Mastery", title: "Figma Prototyping", desc: "Build design systems and responsive screens for seamless engineering handoff.", link: "#", linkText: "View Masterclass", roi: "+20% Speed/Efficiency", companies: "Standard in 95% of Startups" },
            { type: "Portfolio Shift", title: "Publish Case Studies", desc: "Companies hire based on documented problem-solving, not just pretty shots.", link: "#", linkText: "View Templates", roi: "Mandatory for Interviews", companies: "Stripe, Slack, Notion" }
        ]
    },
    "full-stack-developer": {
        category: "Creative Computing", title: "Full Stack Developer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.S. in Computer Science", desc: "Master fundamentals: data structures, algorithms, and scalable system design.", link: "#", linkText: "View Programs", roi: "+25% Starting Salary", companies: "Google, Microsoft, Plaid" },
            { type: "Modern Stack", title: "React & TypeScript", desc: "Learn modern frameworks used by high-growth startups for dynamic API apps.", link: "#", linkText: "View Bootcamp", roi: "+30% Market Availability", companies: "Netflix, Uber, Discord" },
            { type: "Industry Cert", title: "AWS Associate Developer", desc: "Prove you can securely deploy and scale applications on cloud services.", link: "#", linkText: "View Details", roi: "+$15k Salary Bump", companies: "Amazon, FinTech Sector" }
        ]
    },
    "graphic-designer": {
        category: "Creative Computing", title: "Graphic Designer", themeColor: "#00f3ff",
        steps: [
            { type: "Academic Foundation", title: "B.F.A. in Graphic Design", desc: "Dive into historical typography, grid systems, and brand identity architecture.", link: "#", linkText: "View Programs", roi: "+10% Agency Starting Rate", companies: "Pentagram, IDEO, Wolff Olins" },
            { type: "Skill Expansion", title: "Motion (After Effects)", desc: "Static design is dying. Master UI asset animation to stay employable.", link: "#", linkText: "View Course", roi: "+22% Freelance Value", companies: "Apple Marketing, Twitch In-House" },
            { type: "Industry Cert", title: "Adobe Professional", desc: "Validate speed and non-destructive workflow habits in vector design.", link: "#", linkText: "View Certs", roi: "+8% Salary Negotiation", companies: "Global Ad Agencies" }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize Neural Canvas Background
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

    // 2. Add 3D Mouse Tracking for Glass Cards
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


    // 3. Load & Process Roadmap Data (SMART FUZZY MATCHER)
    let roleKey = localStorage.getItem('userPath');
    const isPremium = localStorage.getItem('isPremium') === 'true';

    let data = null;

    if (roleKey && roleKey !== "unknown") {
        // Step 1: Try exact match first
        data = roadmapDatabase[roleKey];

        // Step 2: Try Fuzzy Match (if the AI slightly misspelled or formatted the job title differently)
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

    // IF STILL NO DATA: The user bypassed the engine completely. Kick them back to the start!
    if (!data) {
        alert("Roadmap not found! Please run the Discovery Engine to generate your specific career path.");
        window.location.href = '/#discovery';
        return; // Stop execution of the rest of the script
    }
    
    // SAFE INJECTIONS (We now know for a fact `data` is one of your 12 jobs)
    document.documentElement.style.setProperty('--theme-color', data.themeColor);
    const catBadge = document.getElementById('category-badge');
    if (catBadge) catBadge.innerText = data.category;
    const roleTitleEl = document.getElementById('role-title');
    if (roleTitleEl) roleTitleEl.innerText = data.title;

    // --- PREMIUM FEATURE: LOCALIZATION ---
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
            } else if (tz.includes('Asia') || tz.includes('Australia')) {
                region = "APAC Market";
                insight = "Rapid expansion; localized portfolios command premium salaries.";
            }

            locText.innerHTML = `Localized for: <strong>${region}</strong> — ${insight}`;
        }
    }

    // --- RENDER TIMELINE WITH PREMIUM FEATURES ---
    const timelineContainer = document.getElementById('timeline-container');

    if (timelineContainer) {
        data.steps.forEach((step, index) => {
            
            let premiumContent = "";
            let actionHtml = `<button class="complete-btn locked-btn" disabled>🔒 Premium Feature</button>`;

            if (isPremium) {
                actionHtml = `<button class="complete-btn" data-skill="${step.title}">Mark as Complete</button>`;
                premiumContent = `
                    <div class="premium-features-block">
                        <div class="roi-badge" style="color: var(--theme-color); border-color: rgba(255, 255, 255, 0.2); background: rgba(0,0,0,0.2);">📈 ROI: ${step.roi}</div>
                        <details class="corp-insights">
                            <summary>🏢 Corporate Insights</summary>
                            <div class="corp-content">
                                <p><strong>Required by:</strong> ${step.companies}</p>
                            </div>
                        </details>
                    </div>
                `;
            }

            const stepHTML = `
                <div class="timeline-node" data-step="${index + 1}">
                    <div class="node-marker">${index + 1}</div>
                    <div class="glass-card node-content tilt-card">
                        <span class="node-type">${step.type}</span>
                        <h2>${step.title}</h2>
                        <p>${step.desc}</p>
                        
                        ${premiumContent}

                        <div class="resources">
                            <a href="${step.link}" class="resource-link" target="_blank">${step.linkText} ↗</a>
                        </div>
                        <div class="node-action">
                            ${actionHtml}
                        </div>
                    </div>
                </div>
            `;
            timelineContainer.insertAdjacentHTML('beforeend', stepHTML);
        });
    }

    // Animate Timeline Cards
    if (typeof anime !== 'undefined') {
        anime({
            targets: '.timeline-node',
            translateY: [50, 0], opacity: [0, 1],
            delay: anime.stagger(150, {start: 300}),
            duration: 800, easing: 'easeOutExpo'
        });
    }

    // Handle Global Progress UI
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
                window.print();
            });
        }
    }


    // --- NAV PREMIUM VERIFICATION & ROUTING ---
    const simNav = document.getElementById('roadmap-sim-nav');
    const realityNav = document.getElementById('roadmap-reality-nav');
    const premiumModal = document.getElementById('premium-required-modal');
    const paywallModal = document.getElementById('paywall-modal');
    const upgradeBtn = document.getElementById('upgrade-btn');
    const upgradeCancelBtn = document.getElementById('upgrade-cancel-btn');
    const paywallBuyBtn = document.getElementById('paywall-buy-btn');
    const paywallCancelBtn = document.getElementById('paywall-cancel-btn');

    function showPremiumModal() {
        if (premiumModal) premiumModal.classList.add('active');
    }

    function hideModals() {
        if (premiumModal) premiumModal.classList.remove('active');
        if (paywallModal) paywallModal.classList.remove('active');
    }

    function handleNavClick(e) {
        const isUserPremium = localStorage.getItem('isPremium') === 'true';
        if (!isUserPremium) {
            e.preventDefault(); // Stop Free users
            showPremiumModal();
        }
        // Premium users flow through to href naturally
    }

    if (simNav) simNav.addEventListener('click', handleNavClick);
    if (realityNav) realityNav.addEventListener('click', handleNavClick);

    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', () => {
            hideModals();
            if (paywallModal) paywallModal.classList.add('active');
        });
    }

    if (upgradeCancelBtn) upgradeCancelBtn.addEventListener('click', hideModals);
    if (paywallCancelBtn) paywallCancelBtn.addEventListener('click', hideModals);

    if (paywallBuyBtn) {
        paywallBuyBtn.addEventListener('click', () => {
            localStorage.setItem('isPremium', 'true');
            hideModals();
            alert('Purchase Successful! Access Unlocked.');
            window.location.reload(); 
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === premiumModal || e.target === paywallModal) {
            hideModals();
        }
    });
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
        if (globalProgressFill) globalProgressFill.style.width = `${percentage}%`;
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
        btn.addEventListener('click', function() {
            if (this.classList.contains('completed')) return;

            this.classList.add('completed');
            this.innerText = "✓ Completed";
            
            const parentNode = this.closest('.timeline-node');
            if (parentNode) parentNode.classList.add('is-completed');

            completedSteps++;
            updateProgress();

            const skill = this.getAttribute('data-skill');
            showToast(skill);
        });
    });
}