import config from '../config/config';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const resend = new Resend(config.RESEND_API);
import { generateOTP } from './utils';

//Resend Version
export const sendOTP = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  const token = generateOTP();
  await prisma.verificationToken.create({
    data: {
      token: token,
      userId: user.id,
    },
  });

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'miajhony6969@gmail.com',
    subject: 'Reset Password OTP',
    html: `<h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋,Verify Your OTP For Reset Your Password, This Is Your OTP - ${token}</h2>

  <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
  <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
  });
};

//Node Mailer Version
export const sendOTPwithNodemailer = async (userId: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const token = generateOTP();
    await prisma.verificationToken.create({
      data: {
        token: token,
        userId: user.id,
      },
    });
    const mailOptions = {
      from: 'puskarroy300@gmail.com',
      to: user.email,
      subject: 'Reset Password OTP',
      html: ` <h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋,Verify Your OTP For Reset Your Password, This Is Your OTP - ${token}</h2>

  <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
  <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
