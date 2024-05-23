import mongoose from "mongoose";
import Patient from "./patient.js";
import Doctor from "./doctor.js";

const appointmentSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    appointmentDate: {
        type: Date,
        required: true
    },
    status: { 
        type: String, 
        enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' ,
        required: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;

