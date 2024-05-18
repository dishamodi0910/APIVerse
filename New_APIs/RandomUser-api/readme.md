# Random User Generator API

This API generates random user data.

## Usage

A Random User API provides a way to access randomly generated user data over HTTP. It can be useful for various purposes such as testing, prototyping, or generating sample data for applications.

- ## Random User

  ### Endpoint

  - GET /api/user

  ### Query Parameters

  - `count` (optional): Specifies the number of random users to generate. Defaults to 10 if not provided.

  ### Example Request

  - GET /api/user?count=3

- ## Random bank customer

  ### Endpoint

  - GET /api/user

  ### Query Parameters

  - `count` (optional): Specifies the number of random users to generate. Defaults to 10 if not provided.

  ### Example Request

  - GET /api/bank?count=3

- ## Random Airline data

  ### Endpoint

  - GET /api/airline

  ### Query Parameters

  - `count` (optional): Specifies the number of random users to generate. Defaults to 10 if not provided.

  ### Example Request

  - GET /api/airline?count=3

## Running the Server

- Install dependencies:

```

npm install

```

- Start the server:

```

node index.js

```

The server will run on http://localhost:8000 by default.

```

```
