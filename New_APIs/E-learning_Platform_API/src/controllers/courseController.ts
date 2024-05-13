import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, category, level } = req.body;
    if (!title || !category || !level) {
      return res.status(400).json({ error: 'All fields must be filled' });
    }
    try {
      const newCourse = await prisma.course.create({
        data: { title, category, level },
      });
      return res.status(201).json(newCourse);
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'Failed to create course' });
    }
  }
);

export const getAllCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { category, level, page, pageLimit } = req.query;

    try {
      let courses;

      if (category || level) {
        courses = await prisma.course.findMany({
          where: {
            ...(category && { category: { equals: category as string } }),
            ...(level && { level: { equals: level as string } }),
          },
          skip:
            page && pageLimit
              ? (parseInt(page as string) - 1) * parseInt(pageLimit as string)
              : undefined,
          take: pageLimit ? parseInt(pageLimit as string) : undefined,
        });
      } else {
        courses = await prisma.course.findMany({
          skip:
            page && pageLimit
              ? (parseInt(page as string) - 1) * parseInt(pageLimit as string)
              : undefined,
          take: pageLimit ? parseInt(pageLimit as string) : undefined,
        });
      }

      return res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export const getCourseById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const course = await prisma.course.findUnique({
        where: { id: id },
      });
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      console.error('Error getting course by ID:', error);
      res.status(500).json({ error: 'Failed to get course' });
    }
  }
);
export const updateCourseById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, category, level } = req.body;
    try {
      const updatedCourse = await prisma.course.update({
        where: { id: id },
        data: { title, category, level },
      });
      res.json(updatedCourse);
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ error: 'Failed to update course' });
    }
  }
);

export const deleteCourseById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedCourse = await prisma.course.delete({
        where: { id: id },
      });
      res.json(deletedCourse);
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ error: 'Failed to delete course' });
    }
  }
);

export const enrollInCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const { userId } = req.body;
    try {
      const existingEnrollment = await prisma.userEnrollment.findFirst({
        where: {
          userId: userId,
          courseId: courseId,
        },
      });

      if (existingEnrollment) {
        return res.status(400).json({
          message: 'User is already enrolled in the course',
          success: false,
        });
      }
      const enrollment = await prisma.userEnrollment.create({
        data: {
          userId: userId,
          courseId: courseId,
        },
      });
      res.status(201).json(enrollment);
    } catch (error) {
      console.error('Enroll in course error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to enroll in course', success: false });
    }
  }
);

export const leaveCourse = asyncHandler(async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { userId } = req.body;
  try {
    await prisma.userEnrollment.deleteMany({
      where: {
        userId: userId,
        courseId: courseId,
      },
    });
    res.status(204).end();
  } catch (error) {
    console.error('Leave course error:', error.message);
    res.status(500).json({ message: 'Unable to leave course', success: false });
  }
});

export const trendingCourse = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);

      const trendingCourses = await prisma.course.findMany({
        select: {
          id: true,
          title: true,
          category: true,
          level: true,
          enrollments: {
            select: {
              createdAt: true,
            },
            where: {
              createdAt: {
                gte: startDate,
              },
            },
          },
        },
      });

      const trendingCoursesWithEnrollmentCount = trendingCourses.map(
        (course) => ({
          ...course,
          enrollmentCount: course.enrollments.length,
        })
      );

      const sortedCourses = trendingCoursesWithEnrollmentCount.sort(
        (a, b) => b.enrollmentCount - a.enrollmentCount
      );

      const topTrendingCourses = sortedCourses.slice(0, 5);

      res.json(topTrendingCourses);
    } catch (error) {
      console.error('Get trending courses error:', error.message);
      res
        .status(500)
        .json({ message: 'Unable to get trending courses', success: false });
    }
  }
);
