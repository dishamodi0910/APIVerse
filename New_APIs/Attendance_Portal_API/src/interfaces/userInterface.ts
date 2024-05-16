import { Document } from 'mongoose';
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  role: string;
}
