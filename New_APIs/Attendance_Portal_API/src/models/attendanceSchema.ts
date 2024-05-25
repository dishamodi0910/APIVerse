import mongoose, { Schema } from 'mongoose';
import Attendance from '../interfaces/attendanceInterface';

const attendanceSchema = new Schema<Attendance>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['present', 'absent'], default: 'present' },
});

const AttendanceModel = mongoose.model<Attendance>(
  'Attendance',
  attendanceSchema
);

export default AttendanceModel;
