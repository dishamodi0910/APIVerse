import express, { Router } from 'express';
import { getAllUsers, getUser } from '../controllers/userController';
import { protectAdmin } from '../middleware/middleware';

const router: Router = express.Router();

router.use(protectAdmin);
router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

export default router;
