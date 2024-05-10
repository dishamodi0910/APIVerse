import { Router } from 'express';
import {
  forgotPassword,
  login,
  registration,
  resetPassword,
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
