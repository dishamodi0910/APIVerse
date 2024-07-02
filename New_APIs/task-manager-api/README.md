# Task-Manager-API
## Description
The Task Manager API provides endpoints for creating, reading, updating, and deleting tasks, enabling efficient task management for users. It supports user authentication and categorization to help organize and track tasks effectively.

## Features
- User authentication and authorization.
- Data validation and sanitization.
- CRUD operations for managing tasks.
- Secure password storage with hashing.
- Token-based authentication using JWT.

## Requirements
- Node.js
- MongoDB
- Postman

## Installation
- Clone the repository
- Switch to the this directory using command `cd task-manager-api`
- Install the dependencies using `npm i`
- Set up environment variables and create .env file.
  - Add `DATABASE_CONNECTION_STRING` for datbase connectivity.
  - Add `JWT_SECRET_KEY` for authorization.
- Start the server `npm start`
