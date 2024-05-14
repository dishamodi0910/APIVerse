import jwt from 'jsonwebtoken';
import config from '../config/config';
import { randomInt } from 'crypto';
import { Resend } from 'resend';

export const createToken = (_id: string) => {
  return jwt.sign({ _id: _id }, config.JWT_SECRET, {
    expiresIn: config.JWT_COOKIE_EXPIRES_IN,
  });
};

export const generateOTP = (): string => {
  const otp = randomInt(100000, 1000000);
  return otp.toString();
};
