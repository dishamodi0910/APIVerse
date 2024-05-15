import express from 'express';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// generate random users
app.get('/api/user', (req, res) => {
  const count = parseInt(req.query.count) || 10;

  const users = Array.from({ length: count }, () => ({
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
  }));
  res.json(users);
});

// generate random bank customers
app.get('/api/bank', (req, res) => {
  const count = parseInt(req.query.count) || 10;

  const users = Array.from({ length: count }, () => ({
    accountName: faker.finance.accountName(),
    accountNum: faker.finance.accountNumber(),
    amount: faker.finance.amount(),
  }));
  res.json(users);
});

// generate random airline data
app.get('/api/airline', (req, res) => {
  const count = parseInt(req.query.count) || 10;

  const airline = Array.from({ length: count }, () => ({
    airlineId: faker.string.uuid(),
    name: faker.airline.airplane(),
    code: faker.airline.airport().iataCode,
    website: faker.internet.url(),
  }));
  res.json(airline);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
