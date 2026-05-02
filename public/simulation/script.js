document.addEventListener("DOMContentLoaded", () => {
    // --- 1. THE CONTENT DATA (12 SPECIALIZED SIMULATIONS) ---
    // Keys are now perfectly mapped to the Discovery Engine's output slugs
    const jobData = {
        "penetration-tester": {
            accent:     "#ff4d6d",
            accentDim:  "rgba(255,77,109,0.10)",
            accentGlow: "rgba(255,77,109,0.25)",
            title: "Security Brief",
            protocol: "Cybersecurity (Penetration Tester)",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> You are hired to test the physical security of a high-tech corporate office. The front door is locked with a badge reader, and a security guard is stationed at a desk directly behind the glass.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> No hacking, no force, and no damage. You must get the guard to willingly open the door or let you through without a valid ID badge.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Red Team Lead - "The best way to be invisible is to look like someone the guards are too afraid—or too polite—to stop. Give me a disguise that isn't a costume."</p>`,
            task: `<p style="color: var(--muted);">As the Penetration Tester, you must design a social engineering 'play' to gain physical access to the restricted floors.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Describe a specific 'prop' or a social situation you would use to get a guard to hold the door open for you.</strong> Focus on human psychology and social norms.</p>`,
            criteria: ["Low suspicion profile", "Exploits social norms (politeness/authority)", "Zero physical damage", "Logically sound"]
        },
        "graphic-designer": {
            accent:     "#ff5a99",
            accentDim:'rgba(255,90,153,0.10)', 
            accentGlow:'rgba(255,90,153,0.25)',
            title: "Visual Brief",
            protocol: "Graphic Designer",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> An organic skincare brand is failing because their website looks 'boring' and 'cold.' The fonts are too small to read, the images are low-quality, and the color scheme feels clinical (like a hospital) rather than a luxury spa.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You cannot change the brand name or the product packaging. You must fix the 'vibe' using only a new color palette and typography style.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Creative Lead - "We need to look 'Organic' and 'Warm.' Fix the color scheme and the type so people actually feel the quality."</p>`,
            task: `<p style="color: var(--muted);">You must overhaul the visual identity to rescue the brand's premium perception.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest a specific color palette (3-4 colors) and a style of typography (e.g., Bold Serif, Rounded Sans) that fixes the 'boring' look and creates a warm, premium feel.</strong></p>`,
            criteria: ["Solves readability issues", "Shifts 'clinical' feel to 'organic'", "High-fidelity visual interest", "Professional aesthetic"]
        },
        "full-stack-developer": {
            accent:'#42d7ff',
            accentDim:'rgba(66,215,255,0.10)', 
            accentGlow:'rgba(66,215,255,0.25)',
            title: "System Brief",
            protocol: "Full-Stack Developer",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> Our web application just went viral, but the surge in traffic is overwhelming the database. Users are refreshing the page constantly, causing the server to crash.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> We cannot upgrade hardware for 24 hours. You must solve this with code logic alone.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Sarah Chen, CTO - "This is a scaling crisis. We need a way to handle refresh-spam and heavy traffic without buying more servers. Find a fix now."</p>`,
            task: `<p style="color: var(--muted);">As the Lead Developer, you must find a way to handle the viral surge using only code and user-experience logic.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one clever way to handle traffic spikes or prevent refresh-spamming so the database stays alive.</strong> Focus on immediate implementation.</p>`,
            criteria: ["Reduces immediate database stress", "Zero hardware cost", "UX remains functional", "Implementable in under 60 minutes"]
        },
        "ux-ui-designer": {
            accent:'#ffb347',
            accentDim:'rgba(255,179,71,0.10)', 
            accentGlow:'rgba(255,179,71,0.25)',
            title: "Interface Brief",
            protocol: "UX/UI Designer",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> A major competitor just launched a 'Dark Mode' and a 'One-Click Checkout' that our users are suddenly obsessed with. Our app is starting to look outdated.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You cannot copy their design exactly because of copyright, and you have to keep our existing brand colors.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Dr. Aris Vo - "We don't just want to catch up; we want to win. How do we offer the same convenience but make it feel 'premium' and unique to us?"</p>`,
            task: `<p style="color: var(--muted);">Your goal is to out-design the competition while maintaining our unique brand identity.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one feature or visual update that beats the competitor's 'One-Click' ease while staying true to our brand.</strong></p>`,
            criteria: ["Matches competitor speed", "Stays brand-consistent", "Unique visual identity", "High-fidelity UX"]
        },
        "data-scientist": {
            accent:'#7b55ff',
            accentDim:'rgba(123,85,255,0.10)', 
            accentGlow:'rgba(123,85,255,0.25)',
            title: "Analysis Brief",
            protocol: "Data Scientist",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> An ice cream shop wants to know how many staff members to hire for next week. They have 5 years of sales data, but they keep getting the numbers wrong.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> The computer shows that sales go up on Tuesdays, but humans know that's only because it was sunny last Tuesday.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Dr. Aris Vo - "The machine is looking at the day of the week, but the real answer is outside. What 'outside factor' should we tell the computer to look at?"</p>`,
            task: `<p style="color: var(--muted);">Refine the predictive model to account for real-world variables.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one 'real-world' factor (like weather or local events) that would make the sales prediction 100% more accurate.</strong></p>`,
            criteria: ["Logical link to sales", "Simple to understand", "Improves prediction accuracy", "Actionable data point"]
        },
        "video-editor": {
            accent:'#00d3ff',
            accentDim:'rgba(0,211,255,0.10)', 
            accentGlow:'rgba(0,211,255,0.25)',
            title: "Edit Brief",
            protocol: "Video Editor",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> People are skipping our YouTube ads after 3 seconds. The video is 2 minutes long, but nobody gets past the intro because it starts too slowly.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You cannot re-shoot. You have to use the footage you have, which is mostly slow-motion shots and a long interview.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Marcus Thorne - "Move the 'payoff' to the front. We need a 'hook' in the first 2 seconds using the footage we already have."</p>`,
            task: `<p style="color: var(--muted);">You must re-structure the narrative to maximize audience retention.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>How do you re-arrange or 'cheat' the footage to create an instant, high-energy opening that stops people from skipping?</strong></p>`,
            criteria: ["Stops immediate skips", "Uses existing assets", "Creates instant curiosity", "Improves pacing"]
        },
        "security-analyst": {
            accent:'#fae100',
            accentDim:'rgba(250,225,0,0.10)', 
            accentGlow:'rgba(250,225,0,0.25)',
            title: "Triage Brief",
            protocol: "Security Analyst",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> A massive digital attack is flooding our site. Hidden inside that crowd, a single real thief is trying to steal a specific database file.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> We can't shut the site down. We have to separate the 'noise' from the 'thief' while the attack is happening.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Ops Manager - "Thieves go straight for the prize. Normal customers wander. We need to create a trap only a thief would trigger."</p>`,
            task: `<p style="color: var(--muted);">Deploy a digital 'tripwire' to identify the attacker in the crowd.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one 'logic trap' (like a fake hidden link or file) that a human never sees, but a hacker’s bot will definitely hit.</strong></p>`,
            criteria: ["Surgically isolates the threat", "Zero impact on real users", "Immediate results", "Clever 'honey-pot' logic"]
        },
        "cybersecurity-consultant": {
            accent:'#32ff7e',
            accentDim:'rgba(50,255,126,0.10)', 
            accentGlow:'rgba(50,255,126,0.25)',
            title: "Advisory Brief",
            protocol: "Cyber Consultant",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> A fake IT support person is calling staff members, claiming there's an urgent system issue and requesting login credentials. This 'Social Engineering' is bypassing firewalls.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You cannot block every phone number, and you can't force everyone into a 4-hour training seminar today.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Sarah Chen, CTO - "This is a human vulnerability. We need a way to alert our people so they 'snap out of it' the moment a fake call starts."</p>`,
            task: `<p style="color: var(--muted);">Design an immediate response to prime employees against social engineering.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one clever way to 'alert' or 'prime' employees instantly during a call so they don't fall for this.</strong></p>`,
            criteria: ["Immediate implementation", "Zero technical jargon", "Addresses human psychology", "Low-effort/High-impact"]
        },
        "digital-forensics": {
            accent:'#8f6dff',
            accentDim:'rgba(143,109,255,0.10)', 
            accentGlow:'rgba(143,109,255,0.25)',
            title: "Forensic Brief",
            protocol: "Digital Forensics",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> A company laptop was wiped clean after a data leak. The OS was reinstalled, making standard file recovery impossible.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You have 2 hours. You aren't allowed to take the laptop apart. You must prove they worked on a secret project.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Inspector Vance - "People leave traces in places they don't realize. If the hard drive is clean, look at the physical or environmental traces."</p>`,
            task: `<p style="color: var(--muted);">Locate evidence that standard wipes fail to remove.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one 'non-obvious' place (physical or digital) to find proof of activity after a wipe.</strong></p>`,
            criteria: ["Bypasses standard wipe logic", "Logical evidence", "No specialized forensic tools needed", "Quick investigation time"]
        },
        "creative-producer": {
            accent:'#ff7f2a',
            accentDim:'rgba(255,127,42,0.10)', 
            accentGlow:'rgba(255,127,42,0.25)',
            title: "Logistics Brief",
            protocol: "Creative Producer",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> Your lead actor is stuck in another country due to a flight cancellation. You have a crew of 30 people sitting in a rented studio costing $10k per day.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> You cannot cancel or reschedule. You must pivot the production to shoot something usable for the final edit.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Marcus Thorne - "The star is gone, but the brand is here. Pivot. What can we shoot right now that the client can still use?"</p>`,
            task: `<p style="color: var(--muted);">Manage resources to salvage the day's production budget.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest a list of assets or 'B-Roll' you can film right now that doesn't require the main star.</strong></p>`,
            criteria: ["Saves the daily budget", "Produces usable assets", "Uses crew effectively", "Creative problem solving"]
        },
        "photographer-videographer": {
            accent:'#7cff66',
            accentDim:'rgba(124,255,102,0.10)', 
            accentGlow:'rgba(124,255,102,0.25)',
            title: "Visual Brief",
            protocol: "Photographer / Videographer",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> You're on-site to shoot a 'Summer Adventure' campaign, but a storm rolled in. It's grey, wet, and dark - the opposite of the client's brief.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> The location permit expires today. You cannot wait for the sun. You must deliver 'High-End' images.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Head of Visuals - "Don't fight the rain; use it. How do we make a rainy day look like an intentional, luxury choice?"</p>`,
            task: `<p style="color: var(--muted);">Adapt to environmental constraints while maintaining luxury fidelity.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest one way to use your camera or the environment to make a grey day look high-end and 'warm.'</strong></p>`,
            criteria: ["Creative use of light", "Mood-shifting strategy", "Luxury aesthetic", "Works within constraints"]
        },
        "content-creator": {
            accent:'#ff6bf3',
            accentDim:'rgba(255,107,243,0.10)', 
            accentGlow:'rgba(255,107,243,0.25)',
            title: "Viral Brief",
            protocol: "Content Creator",
            brief: `<p style="color: var(--muted);"><strong>The Problem:</strong> Our brand's TikToks look 'too perfect.' They feel like expensive commercials, so people skip them immediately.</p>
                    <p style="color: var(--muted);"><strong>The Constraint:</strong> $0 budget. You have to make it look like a regular person filmed it on a phone.</p>
                    <p style="color: var(--muted);"><strong>Manager Persona:</strong> Social Lead - "Make it messy. Make it look like we accidentally caught something cool on camera."</p>`,
            task: `<p style="color: var(--muted);">Design a viral hook that feels authentic to social media users.</p>
                   <h3>The Prompt</h3>
                   <p style="color: var(--muted);"><strong>Suggest a 5-second 'accidental' hook that makes a user stop scrolling to see what happens next.</strong></p>`,
            criteria: ["High retention potential", "Zero cost", "Authentic 'unpolished' feel", "Algorithm-friendly"]
        }
    };

    // Load correct job based on Roadmap data, fallback to penetration-tester
    let path = localStorage.getItem('userPath');
    if (!path || !jobData[path]) {
        path = 'penetration-tester';
    }
    const current = jobData[path];

    // --- 2. NEURAL MATRIX BACKGROUND ---
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
            this.x = Math.random() * width; 
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x; 
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.y -= 0.5;
            if (this.y < 0) this.y = height;
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
            p.update(); 
            p.draw();
            for (let j = i; j < particles.length; j++) {
                let dx = p.x - particles[j].x, dy = p.y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath(); 
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/100})`;
                    ctx.lineWidth = 0.5; 
                    ctx.moveTo(p.x, p.y); 
                    ctx.lineTo(particles[j].x, particles[j].y); 
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateCanvas);
    }
    
    if (canvas && ctx) {
        initCanvas(); animateCanvas();
        window.addEventListener('resize', initCanvas);
    }

    // --- 3. UI & TAB LOGIC ---
    const tablet = document.querySelector(".work-tablet");
    const slider = document.querySelector('.tab-slider');
    const progressBar = document.querySelector('.scroll-progress');
    const tabSections = document.querySelectorAll('.tab-section');

    function updateScrollProgress() {
        if (!progressBar) return;
        const activeSection = document.querySelector('.tab-section.active');
        if (!activeSection) {
            progressBar.style.width = '0%';
            return;
        }
        const maxScroll = activeSection.scrollHeight - activeSection.clientHeight;
        if (maxScroll <= 0) {
            progressBar.style.width = '0%';
            return;
        }
        const percent = (activeSection.scrollTop / maxScroll) * 100;
        progressBar.style.width = `${percent}%`;
    }

    window.switchTab = (e, tabId) => {
        document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        
        document.getElementById(tabId).classList.add('active');
        e.currentTarget.classList.add('active');
        
        if (slider) {
            slider.style.left = e.currentTarget.offsetLeft + 'px';
            slider.style.width = e.currentTarget.offsetWidth + 'px';
        }

        updateScrollProgress();
    };

    // Hacker text typing effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
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

    // Submission Logic
    window.submitProposal = () => {
        const proposal = document.getElementById('proposal').value;
        if(!proposal.trim()) {
            alert('Please enter a response before transmitting.');
            return;
        }
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                document.getElementById('proposal').value = '';
            }, 3000);
        }
    };

    // --- 4. ENGINE MODAL LOGIC (ADDED) ---
    const engineNav = document.getElementById('engine-nav-link');
    const engineModal = document.getElementById('engine-modal');
    const engineCloseBtn = document.getElementById('engine-close-btn');

    if (engineNav) {
        engineNav.addEventListener('click', (e) => { 
            e.preventDefault(); 
            if (engineModal) {
                engineModal.classList.add('active');
                const content = engineModal.querySelector('.modal-content');
                if (content) anime({ targets: content, scale: [0.8, 1], translateY: [20, 0], opacity: [0, 1], duration: 600, easing: 'easeOutElastic(1, .6)' });
            }
        });
    }
    
    function hideEngineModal() {
        if (engineModal && engineModal.classList.contains('active')) {
            const content = engineModal.querySelector('.modal-content');
            if (content) {
                anime({
                    targets: content, scale: [1, 0.8], translateY: [0, 20], opacity: [1, 0],
                    duration: 300, easing: 'easeInQuad',
                    complete: () => engineModal.classList.remove('active')
                });
            } else {
                engineModal.classList.remove('active');
            }
        }
    }

    if (engineCloseBtn) engineCloseBtn.addEventListener('click', hideEngineModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === engineModal) hideEngineModal();
    });

    const inputField = document.getElementById("strength-input");
    const analyzeBtn = document.getElementById("analyze-btn");
    const resultArea = document.getElementById("result-area");
    const modalRoleCategory = document.getElementById("modal-role-category");
    const modalRoleTitle = document.getElementById("modal-role-title");
    const modalRoleReason = document.getElementById("modal-role-reason");
    const modalMatchPercent = document.getElementById("modal-match-percent");
    const applyRoadmapBtn = document.getElementById("apply-roadmap-btn");

    const enginePaths = {
        media: { title: "Creative Media", color: "#b026ff" },
        computing: { title: "Creative Computing", color: "#00f3ff" },
        cyber: { title: "Cybersecurity", color: "#39ff14" },
        unknown: { title: "Unrecognized Input", color: "#ff3333" }
    };

    const slugifyEngine = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

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
            boxShadow: [`0 0 0px var(--accent)`, `0 0 30px var(--accent)`, `0 0 0px var(--accent)`],
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
        const pathData = enginePaths[aiData.category] || enginePaths.unknown;
        resultArea.classList.remove("hidden");
        
        if(aiData.role) {
            tempRoleSlug = slugifyEngine(aiData.role);
            applyRoadmapBtn.dataset.tempRole = aiData.role;
            applyRoadmapBtn.dataset.tempCategory = aiData.category;
            applyRoadmapBtn.dataset.tempAccuracy = aiData.accuracy;
            applyRoadmapBtn.dataset.tempReason = aiData.reason;
        }
        
        modalRoleCategory.innerText = pathData.title;
        modalRoleCategory.style.color = pathData.color;
        modalRoleCategory.style.borderColor = pathData.color;
        cipherEffect(modalRoleTitle, aiData.role);
        modalRoleReason.innerText = `"${aiData.reason}"`;

        if (aiData.category === "unknown") {
            document.getElementById('modal-match-progress').style.width = '0%';
            modalMatchPercent.innerText = "0";
            applyRoadmapBtn.style.opacity = 0;
            return;
        }

        const counterObj = { val: 0 };
        anime.timeline({ easing: 'easeOutExpo' })
            .add({ targets: resultArea, opacity: [0, 1], translateY: [20, 0], duration: 600 })
            .add({ targets: '#modal-match-progress', width: ['0%', `${aiData.accuracy}%`], backgroundColor: pathData.color, boxShadow: `0 0 10px ${pathData.color}`, duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=200')
            .add({ targets: counterObj, val: aiData.accuracy, round: 1, duration: 1500, update: () => { modalMatchPercent.innerText = counterObj.val; } }, '-=1500')
            .add({ targets: applyRoadmapBtn, opacity: [0, 1], easing: 'easeOutQuad', duration: 500 }, '-=800');
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
                // Reload the page to load the new simulation!
                window.location.reload(); 
            }
        });
    }

    // --- 5. BOOT AND INITIALIZE DATA ---
    function boot() {
        document.documentElement.style.setProperty('--accent', current.accent);
        document.documentElement.style.setProperty('--accent-dim', current.accentDim);
        document.documentElement.style.setProperty('--accent-glow', current.accentGlow);

        const titleEl = document.getElementById('job-title-display');
        if (titleEl) cipherEffect(titleEl, current.title);
        
        const protocolEl = document.getElementById('protocol-title');
        if (protocolEl) protocolEl.innerText = current.protocol;
        
        const briefEl = document.getElementById('brief-content');
        if (briefEl) briefEl.innerHTML = current.brief;
        
        const taskEl = document.getElementById('task-content');
        if (taskEl) taskEl.innerHTML = current.task;
        
        const list = document.getElementById('criteria-list');
        if (list) {
            list.innerHTML = "";
            current.criteria.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                list.appendChild(li);
            });
        }

        if (tablet && typeof anime !== 'undefined') {
            anime({
                targets: tablet,
                scale: [0.8, 1],
                opacity: [0, 1],
                rotateX: [15, 0],
                duration: 1500,
                easing: 'easeOutElastic(1, .6)'
            });
        }

        tabSections.forEach(section => section.addEventListener('scroll', updateScrollProgress));
        updateScrollProgress();

        setTimeout(() => {
            const activeBtn = document.querySelector('.tab-btn.active');
            if (activeBtn && slider) {
                slider.style.left  = activeBtn.offsetLeft + 'px';
                slider.style.width = activeBtn.offsetWidth + 'px';
            }
        }, 100);
    }

    // Run Boot
    boot();
});