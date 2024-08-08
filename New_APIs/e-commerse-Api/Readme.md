 
 
# E-Commerce Product Provider API

This API provides functionalities for managing products in an e-commerce platform. It supports creating, reading, updating, and deleting product information.
 
## Features

- Get and Build Our Projects.
- Search for products by name, category, or other attributes
- Pagination support for product listings
- Authentication and authorization

## Setup

 1. Navigate to the project directory:  
 ```bash
cd e-commerce-product-provider-api
```
  2. Install dependencies:

 ```bash
  npm install
 ```

 3. Set up environment variables:
   - Create a .env file in the root of the project and add the following variables:

  ```env
  DB=Your_MONGODB_URL
  ```

  4. Run the Project

  ```bash
  node index.js
  ```

## Routes
```js
Routes:{
        all_product:"/products",
        category:"/products/category/:category",
        specidic_product:"/products/product/:id"
    }
```

## Methods

  ```bash
  GET /  
  GET /products/category/:category
  GET /products/product/:id 
  ```

## Output

-  **All Products**
![Screenshot from 2024-07-21 21-49-42](https://github.com/user-attachments/assets/3f955ed3-1dd8-46ae-97d7-cd1ce3e0207c)

-  **Category**
![Screenshot from 2024-07-21 21-50-39](https://github.com/user-attachments/assets/23ccbe33-355e-4279-bb30-6c46c2db8343)

- **Specific Product**
![Screenshot from 2024-07-21 21-51-49](https://github.com/user-attachments/assets/5a0feb6b-30b9-455b-874b-5a053b259882)


## Contributing

 [Sivaprasath2004](https://github.com/sivaprasath2004)
 