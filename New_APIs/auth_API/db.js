import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI);
    console.log(`Database connected successfully at ${dbURI}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};
