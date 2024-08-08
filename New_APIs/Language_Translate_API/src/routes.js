const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/translate', controllers.translate);

module.exports = router;
