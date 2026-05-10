import connectDB from './db.js';
import User from './models/User.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    await connectDB();

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            user: { name: user.name, email: user.email, isPremium: user.isPremium, userPath: user.userPath }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}