import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 4
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
    
});

const Department = mongoose.model('Department', departmentSchema);
export default Department;
