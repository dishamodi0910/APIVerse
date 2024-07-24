const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../database.json');

// Initialize the database file if it does not exist
const initializeDB = () => {
  if (!fs.existsSync(dbPath)) {
    const initialData = { users: [], expenses: [] };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  }
};

initializeDB();

const readData = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
