import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { TokenData } from '../interfaces/tokenInterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface RequestWithUserId extends ExpressRequest {
  id: string;
  iat: number;
  exp: number;
}
export const protect = async (
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided',
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as TokenData;
    const id = decoded._id;
    const user = await prisma.user.findUnique({ where: { id } });
    if (user.id !== id && user.isVerified !== true) {
      throw new Error('Unauthorized: No token provided');
    }
    req.id = user.id;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    });
  }
};

export const protectAdmin = async (
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided',
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as TokenData;
    const id = decoded._id;
    const user = await prisma.user.findUnique({ where: { id } });
    if (user.id !== id || user.isVerified !== true || user.role !== 'ADMIN') {
      throw new Error('Unauthorized: No token provided');
    }
    req.id = user.id;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    });
  }
};
