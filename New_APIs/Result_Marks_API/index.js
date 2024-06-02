const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// Connect to MongoDB (replace 'mongodb://localhost/apiverse' with your MongoDB URI)
mongoose.connect('mongodb://localhost/apiverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});