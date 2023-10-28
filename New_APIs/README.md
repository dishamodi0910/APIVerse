# Lets build a User Data API using NodeJS, ExpressJS, MongoDB and Mongoose

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Built With](#built-with)
- [Author](#author)

## Getting Started

### Prerequisites

- NodeJS
- MongoDB
- Postman

### Installation

- Clone the repository
- Type in the following command in the terminal

```bash
cd UserDataAPI
npm install
```

- Create a .env file in the root directory and add the following
- Add your MongoDB connection string and desired port number

```bash
MONGO_URI = <YOUR_MONGODB_CONNECTION_STRING>
PORT = <YOUR_DESIRED_PORT_NUMBER>
```

- Populate the database by running the following command in the terminal

```bash
node populate.js
```

- Run the following command in the terminal

```bash
npm start
```

- Open Postman and test the API by sending requests to the following endpoints

```bash
GET http://localhost:3000/api/v1/users
POST http://localhost:3000/api/v1/users
GET http://localhost:3000/api/v1/users/:id(enter your own)
PATCH http://localhost:3000/api/v1/users/:id(enter your own)
DELETE http://localhost:3000/api/v1/users/:id(enter your own)
```

## Built With

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Postman](https://www.postman.com/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

## Author

- Github - [therahulchaurasia](https://github.com/therahulchaurasia)
