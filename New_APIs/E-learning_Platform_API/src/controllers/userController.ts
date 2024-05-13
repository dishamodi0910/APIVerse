import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const id = userId;
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      return res.status(200).status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
});
export const getUsersCourseById = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      const enrollments = await prisma.userEnrollment.findMany({
        where: {
          userId: userId,
        },
        include: {
          course: true,
        },
      });
      res.json(enrollments);
    } catch (error) {
      console.error('Get user enrollments error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to get user enrollments', success: false });
    }
  }
);

export const updateUserById = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    const id = userId;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: { name, email },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  }
);

export const deleteUserById = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const id = userId;
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: id },
      });
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
);
export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ error: 'Failed to get users' });
  }
});
