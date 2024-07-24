const { readData, writeData } = require('../config/db');

const createUser = (name, email, password) => {
  const data = readData();
  const newUser = { id: Date.now(), name, email, password };
  data.users.push(newUser);
  writeData(data);
  return newUser;
};

const getUserByEmail = (email) => {
  const data = readData();
  return data.users.find(user => user.email === email);
};

module.exports = { createUser, getUserByEmail };
