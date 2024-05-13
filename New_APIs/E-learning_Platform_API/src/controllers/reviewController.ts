import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addReview = asyncHandler(async (req: Request, res: Response) => {
  const { userId, courseId, rating, content } = req.body;
  try {
    const review = await prisma.review.create({
      data: {
        userId,
        courseId,
        rating,
        content,
      },
    });
    res.status(201).json(review);
  } catch (error) {
    console.error('Add review error:', error.message);
    res.status(500).json({ message: 'Unable to add review', success: false });
  }
});

export const updateReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { rating, content } = req.body;
    try {
      const review = await prisma.review.update({
        where: {
          id: id,
        },
        data: {
          rating,
          content,
        },
      });
      res.json(review);
    } catch (error) {
      console.error('Update review error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to update review', success: false });
    }
  }
);

export const deleteReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.review.delete({
        where: {
          id: id,
        },
      });
      res.status(204).end();
    } catch (error) {
      console.error('Delete review error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to delete review', success: false });
    }
  }
);

export const getAllReviewsForCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    try {
      const reviews = await prisma.review.findMany({
        where: {
          courseId: courseId,
        },
      });
      res.json(reviews);
    } catch (error) {
      console.error('Fetch reviews error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to fetch reviews', success: false });
    }
  }
);
