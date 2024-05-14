import express, { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsersCourseById,
} from '../controllers/userController';
import {
  createProfilePic,
  updateProfilePic,
} from '../controllers/profileController';
import { protect, protectAdmin } from '../middleware/middleware';
import fileUpload from '../util/fileUpload';

const router: Router = express.Router();

router.get('/', protect, getAllUsers);
router.get('/:userId', protect, getUserById);
router.put('/:userId', protect, updateUserById);
router.post('/:userId/profile', protect, fileUpload, createProfilePic);
router.put('/:userId/profile', protect, fileUpload, updateProfilePic);
router.get('/:userId/enrollments', protect, getUsersCourseById);
router.delete('/:userId', protectAdmin, deleteUserById);

export default router;
