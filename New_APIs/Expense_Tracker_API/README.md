# Expense Tracker API

## Description
This API allows users to manage their expenses by providing functionalities to add, update, delete, and retrieve expenses. Users can also register and log in to secure their data. The API supports filtering expenses by various criteria, including month and year.

## Features
1. User registration and login to secure expense data.
2. Add new expenses.
3. Update existing expenses.
4. Delete expenses.
5. Retrieve expenses by various criteria (e.g., month, year, category).
6. Retrieve expenses for a specific month and year.

## Requirements
- Node.js
- MongoDB
- Postman

## Installation
1. Clone the Repository:

```bash
git clone https://github.com/dishamodi0910/APIVerse.git
cd New_APIs
cd Expense_Tracker_API
```

2.Install Dependencies:

```bash
npm install
```
4. Start the Server:

```bash
node server.js
```

## API Endpoints:

1. User Registration

```http
POST /api/auth/register
```

2.User Login

```http
POST /api/auth/login
```

3. Add Expenses

```http
POST /api/expenses
```

4. Update Expenses

```http
PUT /api/expenses/:id
```

5. Delete Expenses

```http
GET /api/expenses
```

6. Get Expenses by Month and Year

```http
GET /api/expenses/month/:month/year/:year
```

## Notes
- Ensure the server is running at 5000.
- Use Postman or similar tools to test and interact with the API endpoints.
