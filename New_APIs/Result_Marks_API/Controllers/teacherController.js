const Student = require('../models/studentModel');

// Controller functions
// Get all students' marks
exports.getAllStudentsMarks = async (req, res) => {
    try {
        const students = await Student.find();
        const studentsMarks = students.map(student => ({
            name: student.name,
            marks: student.marks,
            grade: student.grade
        }));
        res.status(200).json({
            status: 'success',
            data: studentsMarks
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Get marks of a particular student
exports.getStudentMarks = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                name: student.name,
                marks: student.marks,
                grade: student.grade
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Add marks for a student
exports.addMarks = async (req, res) => {
    try {
        const { studentId, marks } = req.body;
        const student = await Student.findByIdAndUpdate(studentId, { $push: { marks: marks } }, { new: true });
        res.status(200).json({
            status: 'success',
            data: student
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Update marks of a student
exports.updateMarks = async (req, res) => {
    try {
        const { studentId, markIndex, newMarks } = req.body;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            });
        }
        student.marks[markIndex] = newMarks;
        await student.save();
        res.status(200).json({
            status: 'success',
            data: student
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Delete marks of a student
exports.deleteMarks = async (req, res) => {
    try {
        const { studentId, markIndex } = req.body;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            });
        }
        student.marks.splice(markIndex, 1);
        await student.save();
        res.status(200).json({
            status: 'success',
            data: student
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Add grade for a student
exports.addGrade = async (req, res) => {
    try {
        const { studentId, grade } = req.body;
        const student = await Student.findByIdAndUpdate(studentId, { $set: { grade: grade } }, { new: true });
        res.status(200).json({
            status: 'success',
            data: student
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Fetch marks of a particular subject
exports.getSubjectMarks = async (req, res) => {
    try {
        const subject = req.params.subject;
        const students = await Student.find();
        const subjectMarks = students.map(student => ({
            name: student.name,
            marks: student.marks[subject] // Assuming marks are stored as an object with subject as key and marks as value
        }));
        res.status(200).json({
            status: 'success',
            data: subjectMarks
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};
