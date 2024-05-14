import express, { Router } from 'express';
import {
  addReview,
  updateReview,
  deleteReview,
} from '../controllers/reviewController';
import { protect } from '../middleware/middleware';

const router: Router = express.Router();

router.use(protect);
router.post('/', addReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
