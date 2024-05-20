import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
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
    },
    address: {
        type: String,
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;