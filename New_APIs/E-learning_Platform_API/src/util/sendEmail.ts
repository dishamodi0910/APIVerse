import config from '../config/config';
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import fs from 'fs';

const prisma = new PrismaClient();
const resend = new Resend(config.RESEND_API);

//Resend Version
export const sendEmail = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  const token = uuidv4();
  await prisma.verificationToken.create({
    data: {
      token: token,
      userId: user.id,
    },
  });

  const verificationLink = `${config.BACKEND_URL}/api/v0.1/auth/verify-email/${user.id}/?token=${token}`;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'miajhony6969@gmail.com',
    subject: 'Verify Your Email',
    html: `<h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋, Thank you for signing up! To complete the authentication process and access your account, please verify your email address by clicking the link below - </h2>
    <p><a href="${verificationLink}" style="color: #007bff; text-decoration: none;">Verify Email Address</a></p>
    <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
    <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
  });
};

//Node Mailer Version
export const sendEmailwithNodemailer = async (userId: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const token = uuidv4();
    await prisma.verificationToken.create({
      data: {
        token: token,
        userId: user.id,
      },
    });

    const verificationLink = `${config.BACKEND_URL}/api/v0.1/auth/verify-email/${user.id}/?token=${token}`;
    if (!user) throw new Error('User not found');
    console.log(user.email);
    const mailOptions = {
      from: 'puskarroy300@gmail.com',
      to: user.email,
      subject: 'Verify Your Email',
      html: ` <h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋, Thank you for signing up! To complete the authentication process and access your account, please verify your email address by clicking the link below - </h2>
      <p><a href="${verificationLink}" style="color: #007bff; text-decoration: none;">Verify Email Address</a></p>
      <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
      <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
