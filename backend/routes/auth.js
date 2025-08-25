import express from 'express';
import { login, register, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/reset-password", resetPassword);

router.post('/login', (req, res) => {
    res.json({ message: 'Login successful' });
});

export default router;
