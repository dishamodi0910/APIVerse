import mongoose from "mongoose";
import Department from "./department.js";


const projectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;