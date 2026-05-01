// ── Background canvas ──
function initBackgroundCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const COUNT = 80;
    const particles = Array.from({ length: COUNT }, () => ({
        x:       Math.random() * W,
        y:       Math.random() * H,
        baseX:   0,
        baseY:   0,
        size:    Math.random() * 1.4 + 0.6,
        density: Math.random() * 22 + 2
    }));
    particles.forEach(p => { p.baseX = p.x; p.baseY = p.y; });

    const mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    function tick() {
        ctx.clearRect(0, 0, W, H);

        particles.forEach((p, i) => {
            if (mouse.x !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const d  = Math.hypot(dx, dy);
                if (d < mouse.radius) {
                    const f = (mouse.radius - d) / mouse.radius;
                    p.x -= (dx / d) * f * p.density;
                    p.y -= (dy / d) * f * p.density;
                }
            }
            p.x += (p.baseX - p.x) / 14;
            p.y += (p.baseY - p.y) / 14;

            ctx.fillStyle = 'rgba(255,255,255,0.35)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const q  = particles[j];
                const d2 = Math.hypot(p.x - q.x, p.y - q.y);
                if (d2 < 115) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255,255,255,${(1 - d2 / 115) * 0.18})`;
                    ctx.lineWidth   = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(tick);
    }

    tick();
}

// ── Login form ──
function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email    = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        const btn      = form.querySelector('button[type="submit"]');
        const errorDiv = document.getElementById('login-error');
        const orig     = btn.textContent;

        errorDiv.style.display = 'none';
        btn.textContent = 'Authenticating…';
        btn.disabled = true;

        try {
            const res  = await fetch('/api/auth/login', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify({ email, password })
            });
            const data = await res.json();

            if (!res.ok) {
                errorDiv.textContent  = data.error || 'Invalid email or password';
                errorDiv.style.display = 'block';
                return;
            }

            localStorage.setItem('loggedInUser', JSON.stringify(data.user));
            window.location.href = '/';
        } catch (err) {
            errorDiv.textContent  = 'Could not connect. ' + err.message;
            errorDiv.style.display = 'block';
        } finally {
            btn.textContent = orig;
            btn.disabled    = false;
        }
    });
}

// ── Init on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
    initBackgroundCanvas();
    initLoginForm();
});