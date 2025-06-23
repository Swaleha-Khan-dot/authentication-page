import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect DB
connectDB();

// ✅ TEMP: Create test user
const createTestUser = async () => {
    const existing = await User.findOne({ email: 'test@user.com' });
    if (existing) {
        console.log('⚠️ Test user already exists');
        return;
    }

    const hashedPassword = await bcrypt.hash('123456', 10);
    await User.create({
        email: 'test@user.com',
        password: hashedPassword
    });

    console.log('✅ Test user created successfully');
};

createTestUser(); // Only once

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

