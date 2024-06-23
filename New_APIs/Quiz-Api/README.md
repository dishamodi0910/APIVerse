# Quiz Application API

This repository contains a RESTful API for a quiz application built with Node.js and Express.js. It allows users to manage quizzes, questions, and answers through HTTP requests.

## Features

- CRUD operations for quizzes, questions, and answers.
- Authentication and authorization using JSON Web Tokens (JWT).

## Prerequisites

Make sure you have the following installed before running the API:

- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Getting Started

Follow these steps to get the API up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sivaprasath2004/Quiz-Api.git
   cd Quiz-Api
   
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:*
   ```bash
   node index.js
   ```
### **ScreenShot**
![Screenshot from 2024-06-18 11-23-54](https://github.com/sivaprasath2004/Quiz-Api/assets/121082414/6cfa531a-355a-4b0c-b40c-05a691c98aaf)

### **Routes:**

```bash
 Routes:[
            {
                path:'/api/random',
                use:'random Question'
            },
            {
                path:'/api/:category',
                use:'specify category Question'
            },
            {
                path:'/api/:category/random',
                use:'specify category random Question'
            },
            {
                path:'/api/specific/:id',
                use:'specific Question'
            },
        ],
```
### **Author**

- [Sivaprasath2004](https://github.com/sivaprasath2004)
