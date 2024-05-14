import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './db.js';
config();

const app = express();

app.use(express.json);

// database connection
connectDB();

const port = process.env.PORT || 3000;

app.use('/api/auth', authRouter);

// error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
