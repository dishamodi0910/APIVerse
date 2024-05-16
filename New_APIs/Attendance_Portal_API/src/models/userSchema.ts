import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../interfaces/userInterface';

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
  },
  { timestamps: true }
);
const UserModel = model<User>('User', userSchema);

export default UserModel;
