import cloudinary from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';
import { Request as ExpressRequest, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import { PrismaClient } from '@prisma/client';
import dataUri from '../util/dataUri';
const prisma = new PrismaClient();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface RequestWithFile extends ExpressRequest {
  file: unknown;
}

export const updateProfilePic = asyncHandler(
  async (req: RequestWithFile, res: Response) => {
    const { userId } = req.params;
    const file = req.file;
    const fileUri = dataUri(file);

    try {
      const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content);
      const existingProfile = await prisma.profile.findUnique({
        where: { userId: userId },
      });
      if (!existingProfile) {
        throw new Error('Profile not found');
      }
      const updatedProfile = await prisma.profile.update({
        where: { userId: userId },
        data: { profilePic: uploadCloud.secure_url },
      });
      res.status(200).json(updatedProfile);
    } catch (error) {
      console.error('Error updating profile pic in database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export const createProfilePic = asyncHandler(
  async (req: RequestWithFile, res: Response) => {
    const { userId } = req.params;
    const file = req.file;
    const fileUri = dataUri(file);

    try {
      const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content);
      const existingProfile = await prisma.profile.findUnique({
        where: { userId: userId },
      });
      if (existingProfile) {
        throw new Error('Profile Exists!');
      }
      const createProfile = await prisma.profile.create({
        data: { userId: userId, profilePic: uploadCloud.secure_url },
      });
      res.status(200).json(createProfile);
    } catch (error) {
      console.error('Error updating profile pic in database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);
