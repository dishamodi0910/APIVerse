import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import { createToken } from '../util/utils';
import { Prisma, PrismaClient } from '@prisma/client';
import { sendEmail, sendEmailwithNodemailer } from '../util/sendEmail';
import { sendOTP, sendOTPwithNodemailer } from '../util/sendOtp';
import config from '../config/config';
const prisma = new PrismaClient();

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    console.log(user);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    if (!user.isVerified) {
      config.EMAIL_SERVICE === 'RESEND'
        ? await sendEmail(user.id)
        : await sendEmailwithNodemailer(user.id);
      // await sendEmail(user.user.id);              //For Resend Mailer
      // await sendEmailwithNodemailer(user.id); //For NodeMailer
      return res.status(200).json({
        success: true,
        message: 'At First Verify Your Email,A Verification email sent.',
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('Invalid credentials');
    }
    const token = createToken(user.id);

    return res.status(200).json({
      message: 'Login successful!',
      success: true,
      token: token,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    console.error('Login error:', error.message);
    if (error.message === 'Invalid credentials') {
      return res
        .status(401)
        .json({ message: 'Invalid email or password.', success: false });
    } else {
      return res.status(500).json({ message: 'Login failed.', success: false });
    }
  }
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }
  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await prisma.$transaction(async (prisma) => {
      const newUser = await prisma.user.create({
        data: { name, email, password: hash },
      });
      const token = createToken(newUser.id);
      return { user: newUser, token };
    });
    config.EMAIL_SERVICE === 'RESEND'
      ? await sendEmail(user.user.id)
      : await sendEmailwithNodemailer(user.user.id);
    // await sendEmail(user.user.id);              //For Resend Mailer
    // await sendEmailwithNodemailer(user.user.id); //For NodeMailer
    return res
      .status(200)
      .json({ success: true, message: 'Verification email sent' });
  } catch (error) {
    console.error('Registration error:', error.message);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({ message: error.message, success: false });
    } else {
      return res
        .status(500)
        .json({ message: 'Registration failed.', success: false });
    }
  }
});

export const verifyEmail = asyncHandler(async (req: Request, res: Response) => {
  const { token } = req.query;
  if (!token || typeof token !== 'string')
    return res.status(400).send('Token not provided or invalid');

  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
  });
  if (!verificationToken) return res.status(404).send('Invalid token');

  if (verificationToken.expiresAt < new Date())
    return res.status(400).send('Token has expired');

  await prisma.user.update({
    where: { id: verificationToken.userId },
    data: { isVerified: true },
  });

  await prisma.verificationToken.delete({ where: { token } });

  res.status(200).send('Email verified successfully');
});

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) {
      throw Error('Email is required');
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw Error('User not found');
    }
    config.EMAIL_SERVICE === 'RESEND'
      ? await sendOTP(user.id)
      : await sendOTPwithNodemailer(user.id);
    //await sendOTP(user.id); // For Resend
    //await sendOTPwithNodemailer(user.id); // For Nodemailer
    return res
      .status(200)
      .json({ success: true, message: 'Token sent to your email' });
  }
);

export const verifyResetToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, token, newPassword } = req.body;
    if (!email || !token || !newPassword) {
      throw Error('Email, token, and new password are required');
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw Error('User not found');
    }

    const resetToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        userId: user.id,
      },
    });

    if (resetToken.expiresAt < new Date())
      return res.status(400).send('Token has expired');

    if (!resetToken) {
      throw Error('Invalid or expired token');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hash },
    });

    await prisma.verificationToken.delete({ where: { id: resetToken.id } });

    res
      .status(200)
      .json({ success: true, message: 'Password reset successful' });
  }
);
