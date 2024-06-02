const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

router.get('/marks', studentController.getAllStudentsMarks);
router.get('/percentage/:id', studentController.calculatePercentage);
router.get('/result/:id', studentController.generateResult); 
router.get('/result/:subject', studentController.generateSubjectResult); 

module.exports = router;
