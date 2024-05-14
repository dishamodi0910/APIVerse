import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  DEV_ENV: process.env.DEV_MODE,
  DATA_BASE: process.env.DATABASE_URL,
  RESEND_API: process.env.RESEND_API,
  BACKEND_URL: process.env.BACKENDURL,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
};

export default config;
