const { readData, writeData } = require('../config/db');

const createExpense = (userId, amount, description, category) => {
  const data = readData();
  const newExpense = { id: Date.now(), userId, amount, description, category, date: new Date() };
  data.expenses.push(newExpense);
  writeData(data);
  return newExpense;
};

const getExpensesByUserId = (userId) => {
  const data = readData();
  return data.expenses.filter(expense => expense.userId === userId);
};

const getExpensesByCategory = (userId, category) => {
  const data = readData();
  return data.expenses.filter(expense => expense.userId === userId && expense.category === category);
};

const getTotalAmountByCategory = (userId, category) => {
  const expenses = getExpensesByCategory(userId, category);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const deleteExpenseById = (id) => {
  const data = readData();
  data.expenses = data.expenses.filter(expense => expense.id !== id);
  writeData(data);
};

const getMonthlyExpenses = (userId) => {
  const data = readData();

  const expensesByMonth = data.expenses
    .filter(expense => expense.userId === userId)
    .reduce((acc, expense) => {
      const expenseDate = new Date(expense.date);
      const month = expenseDate.getMonth() + 1; // JavaScript months are 0-based
      const year = expenseDate.getFullYear();
      const key = `${year}-${month.toString().padStart(2, '0')}`;

      if (!acc[key]) {
        acc[key] = { total: 0, expenses: [] };
      }
      acc[key].total += expense.amount;
      acc[key].expenses.push(expense);

      return acc;
    }, {});

  return expensesByMonth;
};

const getExpensesByMonthYear = (userId, year, month) => {
  const data = readData();
  const filteredExpenses = data.expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expense.userId === userId && expenseDate.getFullYear() === year && (expenseDate.getMonth() + 1) === month;
  });

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
  return { totalAmount, expenses: filteredExpenses };
};

module.exports = {
  createExpense,
  getExpensesByUserId,
  getExpensesByCategory,
  getTotalAmountByCategory,
  deleteExpenseById,
  getMonthlyExpenses,
  getExpensesByMonthYear
};
