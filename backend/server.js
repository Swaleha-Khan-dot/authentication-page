import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();
const app = express();

//CORS
const allowedOrigins = [
    process.env.CLIENT_URL,
    process.env.PROD_CLIENT_URL,
    undefined // for tools like Thunder Client, Postman
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow if origin is in the whitelist or is undefined (e.g. Thunder Client)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204, // For legacy browser support
};

app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options("*", cors(corsOptions));

//JSON Parser
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Root route for Vercel health check
app.get("/", (req, res) => {
    res.send("✅ API is live!");
});

// Connect DB
connectDB();

// Create a user with dynamic email and password
const createUser = async (email, password) => {
    try {
        const existing = await User.findOne({ email });
        if (existing) {
            console.log(`⚠️ User with email "${email}" already exists`);
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        console.log(`✅ User "${email}" created successfully`);
        console.log(newUser);
    } catch (err) {
        console.error('❌ Error creating user:', err.message);
    }
};

createUser();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


