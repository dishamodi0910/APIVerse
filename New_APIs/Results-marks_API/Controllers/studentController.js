const Student = require('../models/studentModel');

// Controller functions
// Get marks of all students
exports.getAllStudentsMarks = async (req, res) => {
    try {
        const students = await Student.find({}, 'name marks');
        res.status(200).json({
            status: 'success',
            data: students
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};
