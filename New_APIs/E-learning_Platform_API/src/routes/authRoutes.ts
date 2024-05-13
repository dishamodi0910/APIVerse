import express, { Router } from 'express';
import {
  login,
  register,
  verifyEmail,
  forgotPassword,
  verifyResetToken,
} from '../controllers/authController';
const router: Router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/verify-email/:id', verifyEmail);
router.get('/forgot-password', forgotPassword);
router.post('/reset-password', verifyResetToken);

export default router;
