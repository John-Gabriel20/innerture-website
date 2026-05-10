import mongoose from 'mongoose';
import User from 'app/models/user.js';

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const userEmail = req.cookies.userEmail;

        if (!userEmail) {
            return res.status(200).json({ isLoggedIn: false });
        }

        try {
            const user = await User.findOne({ email: userEmail });

            if (user) {
                res.status(200).json({ isLoggedIn: true, name: user.name });
            } else {
                res.status(200).json({ isLoggedIn: false });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error checking session', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}