const express = require('express');
const router = express.Router();
const teacherController = require('../Controllers/teacherController');

router.get('/students/marks', teacherController.getAllStudentsMarks);
router.get('/students/:id/marks', teacherController.getStudentMarks);
router.post('/students/:id/marks', teacherController.addMarks);
router.put('/students/:id/marks', teacherController.updateMarks);
router.delete('/students/:id/marks', teacherController.deleteMarks);
router.post('/students/:id/grade', teacherController.addGrade);

module.exports = router;
