const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Sample data for demonstration
let lectures = [
    { id: 1, title: 'Introduction to Computer Science', instructor: 'John Doe', time: '9:00 AM', room: 'Room 101' },
    { id: 2, title: 'Advanced Mathematics', instructor: 'Jane Smith', time: '11:00 AM', room: 'Room 201' },
    { id: 3, title: 'Operating System', instructor: 'Alice Johnson', time: '10:00 AM', room: 'Room 102' },
    { id: 4, title: 'Software Engineering', instructor: 'Michael Brown', time: '1:00 PM', room: 'Room 301' }
];

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Get all lectures
app.get('/lectures', (req, res) => {
    res.json(lectures);
});

// Get a specific lecture by ID
app.get('/lectures/:id', (req, res) => {
    const lectureId = parseInt(req.params.id);
    const lecture = lectures.find(lecture => lecture.id === lectureId);
    if (!lecture) {
        return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(lecture);
});

// Create a new lecture
app.post('/lectures', (req, res) => {
    const { title, instructor, time, room } = req.body;
    const id = lectures.length + 1;
    const newLecture = { id, title, instructor, time, room };
    lectures.push(newLecture);
    res.status(201).json(newLecture);
});

// Update a lecture
app.put('/lectures/:id', (req, res) => {
    const lectureId = parseInt(req.params.id);
    const { title, instructor, time, room } = req.body;
    const lectureIndex = lectures.findIndex(lecture => lecture.id === lectureId);
    if (lectureIndex === -1) {
        return res.status(404).json({ message: 'Lecture not found' });
    }
    const updatedLecture = { id: lectureId, title, instructor, time, room };
    lectures[lectureIndex] = updatedLecture;
    res.json(updatedLecture);
});

// Delete a lecture
app.delete('/lectures/:id', (req, res) => {
    const lectureId = parseInt(req.params.id);
    lectures = lectures.filter(lecture => lecture.id !== lectureId);
    res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});