import { Request, Response, NextFunction } from 'express';
import CheckError from '../util/checkError';

const errorHandler = (
  err: CheckError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
