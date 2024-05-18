# **Ecom API**

### Overview
This project is an Express.js based API for managing users, authentication, products, carts, and orders. It provides endpoints for CRUD operations on these resources and includes authentication and authorization middleware.

### Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed
MongoDB installed and running
npm installed

### Installation

**Clone the repository:**
    git clone https://github.com/your-username/repository-name.git
    cd repository-name

**Install dependencies:**
    npm install


### Create a .env file in the root directory and add your environment variables:
    PORT=Your_Desired_Port
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    SECRET_PHRASE=your_secret_phrase

### API ENDPOINTS

**Authentication**
- Register
    Endpoint: /api/auth/register
    Method: POST
    Description: Register a new user.
    Body:
    {
        "username": "exampleuser",
        "email": "user@example.com",
        "password": "password"
    }

- Login
    Endpoint: /api/auth/login
    Method: POST
    Description: Login a user.
    Body:
    {
        "username": "exampleuser",
        "password": "password"
    }

**User Management**

- Update User
    Endpoint: /api/user/:id
    Method: PUT
    Description: Update a user's information.
    Authorization: Requires token verification.

- Delete User
    Endpoint: /api/user/:id
    Method: DELETE
    Description: Delete a user.
    Authorization: Requires token verification.

- Get User
    Endpoint: /api/user/find/:id
    Method: GET
    Description: Get a user's information.
    Authorization: Requires admin verification.

- Get All Users
    Endpoint: /api/user
    Method: GET
    Description: Get all users.
    Authorization: Requires admin verification.

**Product Management**

- Add Product
    Endpoint: /api/prod/add
    Method: POST
    Description: Add a new product.
    Authorization: Requires admin verification.

- Update Product
    Endpoint: /api/prod/upd/:id
    Method: PUT
    Description: Update a product.
    Authorization: Requires admin verification.

- Delete Product
    Endpoint: /api/prod/del/:id
    Method: DELETE
    Description: Delete a product.
    Authorization: Requires admin verification.

- Get Product
    Endpoint: /api/prod/find/:id
    Method: GET
    Description: Get a product by ID.

- Get All Products
    Endpoint: /api/prod
    Method: GET
    Description: Get all products, with optional filtering by new or category.

**Cart Management**

- Add to Cart
    Endpoint: /api/car/add
    Method: POST
    Description: Add a new item to the cart.
    Authorization: Requires token verification.

- Update Cart
    Endpoint: /api/car/upd/:id
    Method: PUT
    Description: Update a cart item.
    Authorization: Requires token verification.

- Delete Cart Item
    Endpoint: /api/car/del/:id
    Method: DELETE
    Description: Delete a cart item.
    Authorization: Requires token verification.

- Get Cart
    Endpoint: /api/car/find/:id
    Method: GET
    Description: Get cart items for a user.

- Get All Carts
    Endpoint: /api/car
    Method: GET
    Description: Get all cart items.
    Authorization: Requires admin verification.

**Order Management**

- Add Order
    Endpoint: /api/ord/add
    Method: POST
    Description: Add a new order.
    Authorization: Requires token verification.

- Update Order
    Endpoint: /api/ord/upd/:id
    Method: PUT
    Description: Update an order.
    Authorization: Requires admin verification.

- Delete Order
    Endpoint: /api/ord/del/:id
    Method: DELETE
    Description: Delete an order.
    Authorization: Requires admin verification.

- Get Order
    Endpoint: /api/ord/find/:id
    Method: GET
    Description: Get an order by user ID.

- Get All Orders
    Endpoint: /api/ord
    Method: GET
    Description: Get all orders.
    Authorization: Requires admin verification.

- Get Monthly Income
    Endpoint: /api/ord/income
    Method: GET
    Description: Get monthly income.
    Authorization: Requires admin verification.