import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.DATABASE_URL;

mongoose.connect(uri);

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

export default connectToDatabase;
