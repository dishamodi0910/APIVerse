const express = require('express');
const jwt = require('jsonwebtoken');
const {
  createExpense,
  getExpensesByUserId,
  getExpensesByCategory,
  getTotalAmountByCategory,
  deleteExpenseById,
  getMonthlyExpenses,
  getExpensesByMonthYear
} = require('../models/Expense');
require('dotenv').config();

const router = express.Router();

// Middleware to authenticate token
const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token is not valid' });
    req.userId = decoded.id;
    next();
  });
};

// Route to create a new expense
router.post('/', authenticate, (req, res) => {
  const { amount, description, category } = req.body;

  const expense = createExpense(req.userId, amount, description, category);
  res.json(expense);
});

// Route to get expenses by user ID
router.get('/', authenticate, (req, res) => {
  const expenses = getExpensesByUserId(req.userId);
  res.json(expenses);
});

// Route to get expenses by category
router.get('/category/:category', authenticate, (req, res) => {
  const expenses = getExpensesByCategory(req.userId, req.params.category);
  const totalAmount = getTotalAmountByCategory(req.userId, req.params.category);
  res.json({ totalAmount, expenses });
});

// Route to get monthly expenses
router.get('/monthly', authenticate, (req, res) => {
  const monthlyExpenses = getMonthlyExpenses(req.userId);
  res.json(monthlyExpenses);
});

// Route to get expenses by month and year
router.get('/month/:year/:month', authenticate, (req, res) => {
  const { year, month } = req.params;
  const result = getExpensesByMonthYear(req.userId, parseInt(year, 10), parseInt(month, 10));
  res.json(result);
});

// Route to delete an expense by ID
router.delete('/:id', authenticate, (req, res) => {
  deleteExpenseById(parseInt(req.params.id, 10));
  res.json({ msg: 'Expense removed' });
});

module.exports = router;
