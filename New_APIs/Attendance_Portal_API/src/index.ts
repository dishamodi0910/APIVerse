import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import cors, { CorsOptions } from 'cors';
import config from './config/config';
import CheckError from './util/checkError';
import errorHandler from './middleware/errorMiddleware';
import authRoutes from './routes/authRoutes';
import attendanceRoutes from './routes/attendanceRoutes';
import userRoutes from './routes/userRoutes';

const app: Express = express();

const whitelist = ['https://attendancee.vercel.app'];
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(config.DEV_ENV === 'PROD' ? cors(corsOptions) : cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.set('trust proxy', true);
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

import './database/connectDb';

app.use('/api/auth', authRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'API IS WORKING 🥳' });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`);
});

export default app;
