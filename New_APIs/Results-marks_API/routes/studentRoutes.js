const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

router.get('/marks', studentController.getAllStudentsMarks);

module.exports = router;
