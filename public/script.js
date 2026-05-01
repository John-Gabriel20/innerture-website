document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("strength-input");
    const analyzeBtn = document.getElementById("analyze-btn");
    const resultArea = document.getElementById("result-area");
    const roleCategory = document.getElementById("role-category");
    const roleTitle = document.getElementById("role-title");
    const roleReason = document.getElementById("role-reason");
    const matchPercent = document.getElementById("match-percent");
    const glassCards = document.querySelectorAll(".glass-card");
    const heroBtn = document.querySelector('.primary-btn');
    const progressBar = document.querySelector('.scroll-progress');
    const startSimBtn = document.getElementById("start-sim-btn"); 

    let currentRoleSlug = ""; 

    const paths = {
        media: { title: "Creative Media", color: "#b026ff" },
        computing: { title: "Creative Computing", color: "#00f3ff" },
        cyber: { title: "Cybersecurity", color: "#39ff14" },
        unknown: { title: "Unrecognized Input", color: "#ff3333" }
    };

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    const slugify = (text) => {
        return text.toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/(^_|_$)+/g, '');
    };

    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrollVelocity = Math.max(-80, Math.min(80, currentScrollY - lastScrollY));
        lastScrollY = currentScrollY;

        const scrollPercent = (currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if(progressBar) progressBar.style.width = `${scrollPercent}%`;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { scrollVelocity = 0; }, 50);
    });

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
            if (ctx.ellipse) ctx.ellipse(this.x, this.y, this.size, this.size + Math.abs(scrollVelocity) * 0.15, 0, 0, Math.PI * 2);
            else ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.y -= scrollVelocity * 0.2;
            if (this.y > height) this.y = 0; if (this.y < 0) this.y = height;
            let dx = mouse.x - this.x, dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                let force = (mouse.radius - dist) / mouse.radius;
                this.x -= (dx / dist) * force * this.density;
                this.y -= (dy / dist) * force * this.density;
            } else {
                this.x -= (this.x - this.baseX) / 10;
                if (Math.abs(scrollVelocity) < 2) this.y -= (this.y - this.baseY) / 10;
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
            const response = await fetch('/api/analyze.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: text })
            });

            if (!response.ok) throw new Error("Server Error");
            const data = await response.json();
            
            pulse.pause();
            cipherEffect(analyzeBtn, "ANALYZE");
            renderResult(data);

        } catch (error) {
            console.error("AI Error:", error);
            pulse.pause();
            cipherEffect(analyzeBtn, "OFFLINE");
            renderResult({ category: "unknown", role: "Connection Lost", accuracy: 0, reason: "Could not connect to the Innerture neural net." });
        }
    }

    function renderResult(data) {
        const pathData = paths[data.category] || paths.unknown;
        resultArea.classList.remove("hidden");
        
        if(data.role) {
            currentRoleSlug = slugify(data.role);
        }
        
        document.documentElement.style.setProperty('--active-accent', pathData.color);
        
        roleCategory.innerText = pathData.title;
        cipherEffect(roleTitle, data.role);
        roleReason.innerText = `"${data.reason}"`;

        if (data.category === "unknown") {
            document.getElementById('match-progress').style.width = '0%';
            matchPercent.innerText = "0";
            startSimBtn.style.opacity = 0;
            return;
        }

        const counterObj = { val: 0 };
        anime.timeline({ easing: 'easeOutExpo' })
            .add({ targets: resultArea, opacity: [0, 1], translateY: [20, 0], duration: 600 })
            .add({ targets: '#match-progress', width: ['0%', `${data.accuracy}%`], duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=200')
            .add({
                targets: counterObj, val: data.accuracy, round: 1, duration: 1500, update: () => { matchPercent.innerText = counterObj.val; }
            }, '-=1500')
            .add({ targets: '#start-sim-btn', scale: [0.8, 1], opacity: [0, 1], easing: 'spring(1, 80, 10, 0)' }, '-=800');
    }

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

    if (heroBtn) {
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
            anime.timeline({ complete: () => { wave.remove(); const discovery = document.querySelector('#discovery'); if (discovery) discovery.scrollIntoView({ behavior: 'smooth' }); }})
                .add({ targets: heroBtn, scale: [1, 0.8, 1.1, 1], duration: 600 })
                .add({ targets: wave, scale: [0, 150], opacity: [1, 0], duration: 800, easing: 'easeOutExpo' }, '-=600');
        });
    }

    document.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        glassCards.forEach(card => {
            if (window.getComputedStyle(card).opacity > 0.1) {
                anime({ targets: card, rotateY: -xAxis, rotateX: yAxis, duration: 500, easing: 'easeOutQuad' });
            }
        });
    });

    if (analyzeBtn && inputField) {
        analyzeBtn.addEventListener("click", triggerAnalysis);
        inputField.addEventListener("keypress", (e) => { if (e.key === "Enter") triggerAnalysis(); });
    }

    anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: 'nav', translateY: [-50, 0], opacity: [0, 1], duration: 1000 })
        .add({ targets: '.hero-content h1', translateY: [30, 0], opacity: [0, 1], duration: 1000 }, '-=600')
        .add({ targets: '#discovery .glass-card', scale: [0.8, 1], opacity: [0, 1], duration: 1500, easing: 'easeOutElastic(1, .6)' }, '-=800');

    // Handle User Greeting
    const loggedInUserStr = localStorage.getItem('loggedInUser');
    if (loggedInUserStr) {
        try {
            const user = JSON.parse(loggedInUserStr);
            const userGreeting = document.getElementById('user-greeting');
            const userNameSpan = document.getElementById('user-name');
            const logoutBtn = document.getElementById('logout-btn');

            if (userGreeting && userNameSpan && user.name) {
                userNameSpan.innerText = user.name;
                userGreeting.classList.remove('hidden');
                
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.removeItem('loggedInUser');
                        window.location.reload();
                    });
                }
            }
        } catch (e) {
            console.error('Error parsing loggedInUser:', e);
        }
    }

    const authModal = document.getElementById('auth-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalPrimaryBtn = document.getElementById('modal-primary-btn');
    const modalSecondaryBtn = document.getElementById('modal-secondary-btn');
    const modalContent = document.querySelector('.modal-content');

    function showModal(title, message, primaryText, primaryAction, secondaryText, secondaryAction) {
        if (!authModal) return;
        
        modalTitle.innerText = title;
        modalMessage.innerText = message;
        
        modalPrimaryBtn.innerText = primaryText;
        modalPrimaryBtn.onclick = () => {
            hideModal();
            if (primaryAction) primaryAction();
        };
        
        if (secondaryText) {
            modalSecondaryBtn.style.display = 'inline-block';
            modalSecondaryBtn.innerText = secondaryText;
            modalSecondaryBtn.onclick = () => {
                hideModal();
                if (secondaryAction) secondaryAction();
            };
        } else {
            modalSecondaryBtn.style.display = 'none';
        }

        authModal.classList.add('active');
        anime({
            targets: modalContent,
            scale: [0.8, 1],
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutElastic(1, .6)'
        });
    }

    function hideModal() {
        if (!authModal) return;
        anime({
            targets: modalContent,
            scale: [1, 0.8],
            translateY: [0, 20],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => {
                authModal.classList.remove('active');
            }
        });
    }

    if (startSimBtn) {
        startSimBtn.addEventListener('click', () => {
            const user = localStorage.getItem('loggedInUser');
            if (!user) {
                showModal(
                    "Access Restricted",
                    "Please sign up or log in to access the simulation.",
                    "Log In",
                    () => { window.location.href = '/login/'; },
                    "Cancel"
                );
            } else {
                showModal(
                    "Simulation Ready",
                    "Welcome back! Your vibespace is initialized.",
                    "Enter",
                    () => {
                        if (currentRoleSlug) {
                            localStorage.setItem('userPath', currentRoleSlug);
                            window.location.href = '/simulation/sim.html';
                        }
                    },
                    "Cancel"
                );
            }
        });
    }
});