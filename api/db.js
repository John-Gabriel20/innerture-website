import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/innerture';
        await mongoose.connect(uri);
        console.log('MongoDB connected to', uri);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectDB;