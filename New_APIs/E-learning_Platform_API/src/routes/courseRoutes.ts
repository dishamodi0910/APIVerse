import express, { Router } from 'express';
import {
  createCourse,
  deleteCourseById,
  getAllCourse,
  getCourseById,
  updateCourseById,
  enrollInCourse,
  leaveCourse,
  trendingCourse,
} from '../controllers/courseController';
import { protect, protectAdmin } from '../middleware/middleware';
import { getAllReviewsForCourse } from '../controllers/reviewController';

const router: Router = express.Router();

router.post('/', protectAdmin, createCourse);
router.get('/', protect, getAllCourse);
router.get('/:id', protect, getCourseById);
router.put('/:id', protectAdmin, updateCourseById);
router.delete('/:id', protectAdmin, deleteCourseById);
router.get('/trending', protect, trendingCourse);
router.post('/:courseId/enroll', protect, enrollInCourse);
router.delete('/:courseId/leave', protect, leaveCourse);
router.get('/:courseId/reviews', protect, getAllReviewsForCourse);

export default router;
