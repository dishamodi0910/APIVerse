# Lets build a Product Store API using NodeJS, ExpressJS, MongoDB and Mongoose

## Table of contents

- [What is an API?](#what-is-an-api)
- [What is a REST API?](#what-is-a-rest-api)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Built With](#built-with)
- [Author](#author)

## What is an API?

An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

## What is a REST API?

A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. REST APIs are stateless, meaning that calls can be made independently of one another, and contain all of the information necessary to complete itself successfully.

## Getting Started

### Prerequisites

- NodeJS
- MongoDB
- Postman

### Installation

- Clone the repository
- Type in the following command in the terminal

```bash
cd ProductStoreAPI
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
GET http://localhost:3000/api/v1/products
GET http://localhost:3000/api/v1/products?name=Chair
GET http://localhost:3000/api/v1/products?name=Chair&featured=true&company=ikea&sort=price&fields=name,price&numericFilters[price]=<100
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

- Github - [thesohailjafri](https://github.com/thesohailjafri)
- LinkedIn - [thesohailjafri](https://www.linkedin.com/in/thesohailjafri/)
- Twitter - [@thesohailjafri](https://twitter.com/thesohailjafri)
