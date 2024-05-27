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

// Calculate percentage of a student
exports.calculatePercentage = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            });
        }
        const totalMarks = student.marks.reduce((acc, curr) => acc + curr, 0);
        const percentage = (totalMarks / (student.marks.length * 100)) * 100; // Assuming each mark is out of 100
        res.status(200).json({
            status: 'success',
            data: {
                percentage: percentage.toFixed(2) + '%'
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Generate overall result of a student
exports.generateResult = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            });
        }
        const totalMarks = student.marks.reduce((acc, curr) => acc + curr, 0);
        const percentage = (totalMarks / (student.marks.length * 100)) * 100; // Assuming each mark is out of 100
        let result;
        if (percentage >= 60) {
            result = 'Pass';
        } else {
            result = 'Fail';
        }
        res.status(200).json({
            status: 'success',
            data: {
                result: result
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Generate result of a particular subject for all students
exports.generateSubjectResult = async (req, res) => {
    try {
        const subject = req.params.subject;
        const students = await Student.find();
        const subjectResults = students.map(student => ({
            name: student.name,
            result: student.marks[subject] >= 60 ? 'Pass' : 'Fail' // Assuming marks are stored as an object with subject as key and marks as value
        }));
        res.status(200).json({
            status: 'success',
            data: subjectResults
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};
