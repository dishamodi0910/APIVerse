const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    marks: {
        type: [Number],
        default: []
    },
    grade: {
        type: String,
        default: ''
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;