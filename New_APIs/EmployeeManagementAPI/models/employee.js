import mongoose from "mongoose";
import Project from "./project.js";

const employeeSchema = new mongoose.Schema({
    ssn:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
        default: []
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
