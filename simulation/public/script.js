document.addEventListener('DOMContentLoaded', async () => {
    // ── Always init canvas regardless of which page we're on ──
    initBackgroundCanvas();

    // ── Index page: load user table ──
    if (document.getElementById('userTableBody')) {
        await loadUsers();
    }

    // ── Register page ──
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const name     = document.getElementById('name').value.trim();
        const email    = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const newUser = { name, email, password };
        let saved = false;

        try {
            const res = await fetch('/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            if (res.ok) saved = true;
        } catch (err) {
            console.warn('Backend unreachable, saving to localStorage:', err);
        }

        if (!saved) {
            const existing = JSON.parse(localStorage.getItem('users') || '[]');

            // prevent duplicate email
            if (existing.find(u => u.email === email)) {
                alert('User already exists');
                return;
            }

            newUser._id = Date.now().toString();
            existing.push(newUser);
            localStorage.setItem('users', JSON.stringify(existing));
        }

        window.location.href = 'index.html';
    });
}
    // ── Login page ──
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const email    = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert('Invalid email or password');
            return;
        }

        localStorage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = '';
    });

        const btn = document.getElementById('goToRegister');
        if (btn) {
            btn.addEventListener('click', () => {
                window.location.href = 'register.html';
            });
        }
}

    // ── Add User page ──
    if (document.getElementById('addUserForm')) {
        document.getElementById('addUserForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const name     = document.getElementById('name').value.trim();
            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            const newUser = { name, email, password };
            let saved = false;

            try {
                const res = await fetch('/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });
                if (res.ok) saved = true;
            } catch (err) {
                console.warn('Backend unreachable, saving to localStorage:', err);
            }

            if (!saved) {
                const existing = JSON.parse(localStorage.getItem('users') || '[]');
                newUser._id = Date.now().toString();
                existing.push(newUser);
                localStorage.setItem('users', JSON.stringify(existing));
            }

            window.location.href = 'index.html';
        });
    }

    // ── Edit User page ──
    if (document.getElementById('editUserForm')) {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');

        if (!userId) {
            window.location.href = 'index.html';
            return;
        }

        // Load the user to pre-fill the form
        let user = null;

        try {
            const res = await fetch(`/users/${userId}`);
            if (res.ok) user = await res.json();
        } catch (err) {
            console.warn('Backend unreachable, loading from localStorage:', err);
        }

        if (!user) {
            const existing = JSON.parse(localStorage.getItem('users') || '[]');
            user = existing.find(u => u._id === userId) || null;
        }

        if (user) {
            document.getElementById('userId').value = user._id;
            document.getElementById('name').value   = user.name;
            document.getElementById('email').value  = user.email;
            // Password intentionally left blank for security
        }

        // Handle form submission
        document.getElementById('editUserForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const id       = document.getElementById('userId').value;
            const name     = document.getElementById('name').value.trim();
            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Only include password if the user typed a new one
            const payload = { name, email };
            if (password) payload.password = password;

            let saved = false;

            try {
                const res = await fetch(`/users/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (res.ok) saved = true;
            } catch (err) {
                console.warn('Backend unreachable, updating localStorage:', err);
            }

            if (!saved) {
                const existing = JSON.parse(localStorage.getItem('users') || '[]');
                const idx = existing.findIndex(u => u._id === id);
                if (idx !== -1) {
                    existing[idx] = {
                        ...existing[idx],
                        name,
                        email,
                        ...(password ? { password } : {})
                    };
                    localStorage.setItem('users', JSON.stringify(existing));
                }
            }

            window.location.href = 'index.html';
        });
    }
});

// ── Load and render user table ──
async function loadUsers() {
    let users = [];

    try {
        const res = await fetch('/users');
        if (res.ok) {
            users = await res.json();
        } else {
            throw new Error('Bad response');
        }
    } catch (err) {
        users = JSON.parse(localStorage.getItem('users') || '[]');
    }

    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';

    if (!users.length) {
        userTableBody.innerHTML = `
            <tr>
                <td colspan="3" class="empty-state">No users available. Add a user to start managing accounts.</td>
            </tr>
        `;
        return;
    }

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <div class="action-group">
                    <a class="secondary-btn" href="edit-user.html?id=${user._id}">Edit</a>
                    <button type="button" class="danger-btn" onclick="deleteUser('${user._id}')">Remove</button>
                </div>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

// ── Delete a user ──
async function deleteUser(id) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    let deleted = false;

    try {
        const res = await fetch(`/users/${id}`, { method: 'DELETE' });
        if (res.ok) deleted = true;
    } catch (err) {
        console.warn('Backend unreachable, deleting from localStorage:', err);
    }

    if (!deleted) {
        const existing = JSON.parse(localStorage.getItem('users') || '[]');
        localStorage.setItem('users', JSON.stringify(existing.filter(u => u._id !== id)));
    }

    window.location.reload();
}

// ── Animated particle background ──
function initBackgroundCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width  = canvas.width  = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
        x:       Math.random() * width,
        y:       Math.random() * height,
        baseX:   Math.random() * width,
        baseY:   Math.random() * height,
        size:    Math.random() * 1.6 + 0.8,
        density: Math.random() * 24 + 2
    }));

    const particleColor = '255,255,255';
    const mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', () => {
        width  = canvas.width  = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, index) => {
            if (mouse.x !== null) {
                const dx   = mouse.x - p.x;
                const dy   = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    p.x -= (dx / dist) * force * p.density;
                    p.y -= (dy / dist) * force * p.density;
                }
            }
            p.x += (p.baseX - p.x) / 14;
            p.y += (p.baseY - p.y) / 14;

            ctx.fillStyle = `rgba(${particleColor}, 0.4)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = index + 1; j < particles.length; j++) {
                const q     = particles[j];
                const dx2   = p.x - q.x;
                const dy2   = p.y - q.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                if (dist2 < 115) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${particleColor}, ${1 - dist2 / 115})`;
                    ctx.lineWidth   = 0.4;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}