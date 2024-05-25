import mongoose from "mongoose";
import Speciality from "./speciality.js";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speciality',
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;