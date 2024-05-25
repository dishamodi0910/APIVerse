import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        unique: true,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    status: { 
        type: String, 
        enum: ['Unpaid', 'Paid'], 
        default: 'Unpaid',
        required: true
    }
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
