import connectDB from './db.js';
import User from './models/User.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    await connectDB();

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const user = await User.findOneAndUpdate(
            { email },
            { isPremium: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Premium unlocked successfully', user });
    } catch (error) {
        console.error('Error upgrading premium:', error);
        res.status(500).json({ message: 'Server error' });
    }
}