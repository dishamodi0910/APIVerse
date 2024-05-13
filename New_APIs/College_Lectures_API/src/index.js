const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect!`));

// Lecture Schema
const lectureSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    time: String,
    room: String
});

const Lecture = mongoose.model('Lecture', lectureSchema);

// Data to save
const lectures = [
    { title: 'Introduction to Computer Science', instructor: 'John Doe', time: '9:00 AM', room: 'Room 101' },
    { title: 'Advanced Mathematics', instructor: 'Jane Smith', time: '11:00 AM', room: 'Room 201' },
    { title: 'Operating System', instructor: 'Alice Johnson', time: '10:00 AM', room: 'Room 102' },
    { title: 'Software Engineering', instructor: 'Michael Brown', time: '1:00 PM', room: 'Room 301' }
];

// Function to save lectures to the database
async function saveLectures() {
    try {
        for (const lectureData of lectures) {
            const lecture = new Lecture(lectureData);
            await lecture.save();
        }
        console.log('Lectures saved successfully');
    } catch (error) {
        console.error('Error saving lectures:', error);
    } finally {
        mongoose.disconnect();
    }
}

// Call the function to save lectures for one time
{/*saveLectures();*/}

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Get all lectures
app.get('/lectures', async (req, res) => {
    try {
        const lectures = await Lecture.find();
        res.json(lectures);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific lecture by ID
app.get('/lectures/:id', getLecture, (req, res) => {
    res.json(res.lecture);
});

// Create a new lecture
app.post('/lectures', async (req, res) => {
    const lecture = new Lecture({
        title: req.body.title,
        instructor: req.body.instructor,
        time: req.body.time,
        room: req.body.room
    });

    try {
        const newLecture = await lecture.save();
        res.status(201).json(newLecture);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function to get a lecture by ID
async function getLecture(req, res, next) {
    let lecture;
    try {
        lecture = await Lecture.findById(req.params.id);
        if (lecture == null) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.lecture = lecture;
    next();
}

// Update a lecture
app.put('/lectures/:id', async (req, res) => {
    const { title, instructor, time, room } = req.body;
    try {
        const updatedLecture = await Lecture.findByIdAndUpdate(req.params.id, { title, instructor, time, room }, { new: true });
        if (!updatedLecture) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
        res.json(updatedLecture);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a lecture
app.delete('/lectures/:id', async (req, res) => {
    try {
        const deletedLecture = await Lecture.findByIdAndDelete(req.params.id);
        if (!deletedLecture) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
