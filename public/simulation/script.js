document.addEventListener("DOMContentLoaded", () => {
    // --- 1. DOM ELEMENTS ---
    const canvas = document.getElementById("neural-canvas");
    const ctx = canvas.getContext("2d");
    const tablet = document.querySelector(".work-tablet");
    const slider = document.querySelector('.tab-slider');
    const progressBar = document.querySelector('.scroll-progress');
    const tabSections = document.querySelectorAll('.tab-section');
    const submitBtn = document.querySelector('.neon-btn');
    const toast = document.getElementById('toast');

    // --- 2. THE CONTENT DATA (12 SPECIALIZED SIMULATIONS) ---
    const jobData = {
        pen_tester: {
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
        graphic_des: {
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
        full_stack: {
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
        ux_ui: {
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
        data_sci: {
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
        video_ed: {
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
        sec_analyst: {
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
        cyber_cons: {
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
        forensics: {
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
        creative_prod: {
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
        photog_video: {
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
        content_cre: {
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

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const path = localStorage.getItem('userPath') || 'cyber';
    const current = jobData[path] || jobData['cyber'];

    // --- 3. NEURAL MATRIX ENGINE (UNTOUCHED) ---
    let width, height, particles, particleRGB = '255,255,255';
    let mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

    function hexToRgb(hex) {
        return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
    }

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            baseX: Math.random() * width,
            baseY: Math.random() * height,
            size: Math.random() * 1.6 + 0.8,
            density: Math.random() * 24 + 2
        }));
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, i) => {
            if (mouse.x !== null) {
                let dx = mouse.x - p.x, dy = mouse.y - p.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let f = (mouse.radius - dist) / mouse.radius;
                    p.x -= (dx / dist) * f * p.density;
                    p.y -= (dy / dist) * f * p.density;
                } else {
                    p.x += (p.baseX - p.x) / 14;
                    p.y += (p.baseY - p.y) / 14;
                }
            }
            ctx.fillStyle = `rgba(${particleRGB},0.42)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            for (let j = i + 1; j < particles.length; j++) {
                let dx = p.x - particles[j].x, dy = p.y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 115) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${particleRGB},${(1 - dist/115)*0.24})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateCanvas);
    }

    // --- 4. TEXT & UI UTILITIES ---
    function cipherEffect(element, finalString) {
        if (!element) return;
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

    // --- 5. TAB SWITCHING ---
    window.switchTab = (e, tabId) => {
        document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        e.currentTarget.classList.add('active');
        
        slider.style.left = e.currentTarget.offsetLeft + 'px';
        slider.style.width = e.currentTarget.offsetWidth + 'px';

        updateScrollProgress();
    };

    // --- 6. BOOT ---
    function boot() {
        document.documentElement.style.setProperty('--accent',      current.accent);
        document.documentElement.style.setProperty('--accent-dim',  current.accentDim);
        document.documentElement.style.setProperty('--accent-glow', current.accentGlow);
        document.querySelector('.nav-links li:nth-child(1) a').href = '../simulation/sim.html';
        document.querySelector('.nav-links li:nth-child(2) a').href = '../reality/reality.html';
        document.querySelector('.nav-links li:nth-child(1) a').classList.add('active');

        particleRGB = hexToRgb(current.accent);

        const titleEl = document.getElementById('job-title-display');
        cipherEffect(titleEl, current.title);
        
        document.getElementById('protocol-title').innerText = current.protocol;
        document.getElementById('brief-content').innerHTML = current.brief;
        document.getElementById('task-content').innerHTML = current.task;
        
        const list = document.getElementById('criteria-list');
        list.innerHTML = "";
        current.criteria.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);
        });

        anime({
            targets: tablet,
            scale: [0.8, 1],
            opacity: [0, 1],
            rotateX: [15, 0],
            duration: 1500,
            easing: 'easeOutElastic(1, .6)'
        });

        initCanvas();
        animateCanvas();

        tabSections.forEach(section => section.addEventListener('scroll', updateScrollProgress));
        updateScrollProgress();

        setTimeout(() => {
            const activeBtn = document.querySelector('.tab-btn.active');
            if (activeBtn && slider) {
                slider.style.left  = activeBtn.offsetLeft + 'px';
                slider.style.width = activeBtn.offsetWidth + 'px';
            }
        }, 60);
    }

    // --- 7. 3D TILT & SUBMIT ---
    document.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 80;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 80;
        anime({ targets: tablet, rotateY: -xAxis, rotateX: yAxis, duration: 500, easing: 'easeOutQuad' });
    });

    window.submitProposal = () => {
        const proposal = document.getElementById('proposal').value;
        if (proposal.length < 20) {
            return anime({ targets: '#proposal', translateX: [0, -10, 10, 0], duration: 400 });
        }

        toast.classList.add('show');
        cipherEffect(submitBtn, "TRANSMITTING...");

        setTimeout(() => {
            if(confirm("Analysis Received. Transmit to the Reality Feed?")) {
                window.location.href = 'reality.html';
            }
            toast.classList.remove('show');
            cipherEffect(submitBtn, "SUBMIT TO MANAGER");
        }, 2500);
    };

    window.addEventListener('resize', initCanvas);


    boot();
    
});