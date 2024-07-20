const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail } = require('../models/User');
require('dotenv').config();

const router = express.Router();

// Route to register a new user
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (getUserByEmail(email)) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ msg: 'Server error' });

    const user = createUser(name, email, hashedPassword);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.json({ token });
  });
});

// Route to login a user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = getUserByEmail(email);
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return res.status(500).json({ msg: 'Server error' });
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.json({ token });
  });
});

module.exports = router;
