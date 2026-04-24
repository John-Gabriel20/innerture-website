document.addEventListener("DOMContentLoaded", () => {
    // --- 1. DOM ELEMENTS ---
    const inputField = document.getElementById("strength-input");
    const analyzeBtn = document.getElementById("analyze-btn");
    const resultArea = document.getElementById("result-area");
    const pathTitle = document.getElementById("path-title");
    const pathDesc = document.getElementById("path-desc");
    const matchPercent = document.getElementById("match-percent");
    const glassCards = document.querySelectorAll(".glass-card");
    const heroBtn = document.querySelector('.primary-btn');
    const progressBar = document.querySelector('.scroll-progress');

    // --- 2. GLOBAL DATA & CONFIG ---
    const paths = {
        media: { title: "Creative Media", color: "#b026ff", desc: "Your strengths align with visual storytelling and design. Experience a simulation in high-pressure brand identity." },
        computing: { title: "Creative Computing", color: "#00f3ff", desc: "You have a logical, building-oriented mindset. Debug a game engine before launch." },
        cyber: { title: "Cybersecurity", color: "#39ff14", desc: "You think like an investigator and a protector. Block a brute force attack in real-time." },
        unknown: { title: "Unrecognized Input", color: "#ff3333", desc: "Our neural net couldn't map that to our core paths. We currently support Media, Computing, and Cyber. Try another strength." }
    };

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    // --- 3. SCROLL & VELOCITY TRACKING ---
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        let rawVelocity = currentScrollY - lastScrollY;
        scrollVelocity = Math.max(-80, Math.min(80, rawVelocity)); // Velocity cap for warp effect
        lastScrollY = currentScrollY;

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (currentScrollY / scrollHeight) * 100;
        if(progressBar) progressBar.style.width = `${scrollPercent}%`;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { scrollVelocity = 0; }, 50);
    });

    // --- 4. THE NEURAL MATRIX (Canvas) ---
    const canvas = document.getElementById("neural-canvas");
    const ctx = canvas.getContext("2d");
    let width, height, particles;
    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

    function initCanvas() {
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
            const stretch = Math.abs(scrollVelocity) * 0.15;
            if (ctx.ellipse) ctx.ellipse(this.x, this.y, this.size, this.size + stretch, 0, 0, Math.PI * 2);
            else ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.y -= scrollVelocity * 0.2;
            if (this.y > height) this.y = 0; if (this.y < 0) this.y = height;
            let dx = mouse.x - this.x; let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                this.x -= (dx / distance) * force * this.density;
                this.y -= (dy / distance) * force * this.density;
            } else {
                this.x -= (this.x - this.baseX) / 10;
                if (Math.abs(scrollVelocity) < 2) this.y -= (this.y - this.baseY) / 10;
            }
        }
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, i) => {
            p.update(); p.draw();
            for (let j = i; j < particles.length; j++) {
                let dx = p.x - particles[j].x, dy = p.y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath(); ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/100})`;
                    ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateCanvas);
    }
    initCanvas(); animateCanvas();
    window.addEventListener('resize', initCanvas);

    // --- 5. THE AI DISCOVERY ENGINE ---
    async function triggerAnalysis() {
        const text = inputField.value.trim();
        if (!text) {
            anime({ targets: inputField, translateX: [0, -10, 10, -10, 10, 0], duration: 400 });
            return;
        }

        cipherEffect(analyzeBtn, "UPLOADING...");
        const pulse = anime({
            targets: inputField,
            boxShadow: [`0 0 0px #00f3ff`, `0 0 30px #00f3ff`, `0 0 0px #00f3ff`],
            duration: 1000, loop: true, easing: 'easeInOutSine'
        });

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: text })
            });

            if (!response.ok) throw new Error("Server Error");
            const data = await response.json();
            
            pulse.pause();
            cipherEffect(analyzeBtn, "ANALYZE");
            renderResult(paths[data.match] || paths.unknown, data.accuracy);

        } catch (error) {
            console.error("AI Error:", error);
            pulse.pause();
            cipherEffect(analyzeBtn, "OFFLINE");
            renderResult(paths.unknown, 0);
        }
    }

    function renderResult(pathData, score) {
        resultArea.classList.remove("hidden");
        document.documentElement.style.setProperty('--active-accent', pathData.color);
        cipherEffect(pathTitle, pathData.title);
        pathDesc.innerText = pathData.desc;

        if (pathData.title === "Unrecognized Input") {
            document.getElementById('match-progress').style.width = '0%';
            matchPercent.innerText = "0";
            document.getElementById('start-sim-btn').style.opacity = 0;
            return;
        }

        const counterObj = { val: 0 };
        anime.timeline({ easing: 'easeOutExpo' })
            .add({ targets: resultArea, opacity: [0, 1], translateY: [20, 0], duration: 600 })
            .add({ targets: '#match-progress', width: ['0%', `${score}%`], duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=200')
            .add({
                targets: counterObj, val: score, round: 1, duration: 1500, update: () => { matchPercent.innerText = counterObj.val; }
            }, '-=1500')
            .add({ targets: '#start-sim-btn', scale: [0.8, 1], opacity: [0, 1], easing: 'spring(1, 80, 10, 0)' }, '-=800');
    }

    // --- 6. INTERACTIVE UTILITIES ---
    function cipherEffect(element, finalString) {
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

    // Magnetic Button & Shockwave
    heroBtn.addEventListener('mousemove', (e) => {
        const rect = heroBtn.getBoundingClientRect();
        anime({ targets: heroBtn, translateX: (e.clientX - rect.left - rect.width/2) * 0.3, translateY: (e.clientY - rect.top - rect.height/2) * 0.3, scale: 1.05, duration: 100 });
    });
    heroBtn.addEventListener('mouseleave', () => anime({ targets: heroBtn, translateX: 0, translateY: 0, scale: 1, duration: 1000, easing: 'easeOutElastic(1, .5)' }));
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const wave = document.createElement('div'); wave.classList.add('shockwave');
        wave.style.left = e.clientX + 'px'; wave.style.top = e.clientY + 'px';
        document.body.appendChild(wave);
        anime.timeline({ complete: () => { wave.remove(); document.querySelector('#discovery').scrollIntoView({ behavior: 'smooth' }); }})
            .add({ targets: heroBtn, scale: [1, 0.8, 1.1, 1], duration: 600 })
            .add({ targets: wave, scale: [0, 150], opacity: [1, 0], duration: 800, easing: 'easeOutExpo' }, '-=600');
    });

    // 3D Card Parallax
    document.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        glassCards.forEach(card => {
            if (window.getComputedStyle(card).opacity > 0.1) {
                anime({ targets: card, rotateY: -xAxis, rotateX: yAxis, duration: 500, easing: 'easeOutQuad' });
            }
        });
    });

    // --- 7. LISTENERS & BOOT ---
    analyzeBtn.addEventListener("click", triggerAnalysis);
    inputField.addEventListener("keypress", (e) => { if (e.key === "Enter") triggerAnalysis(); });

    anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: 'nav', translateY: [-50, 0], opacity: [0, 1], duration: 1000 })
        .add({ targets: '.hero-content h1', translateY: [30, 0], opacity: [0, 1], duration: 1000 }, '-=600')
        .add({ targets: '#discovery .glass-card', scale: [0.8, 1], opacity: [0, 1], duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=800');
});