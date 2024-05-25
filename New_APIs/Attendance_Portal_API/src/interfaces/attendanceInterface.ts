import { Document, Schema } from 'mongoose';

interface Attendance extends Document {
  userId: Schema.Types.ObjectId;
  date: Date;
  status: 'present' | 'absent';
}

export default Attendance;
