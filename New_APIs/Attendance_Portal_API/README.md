<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/Puskar-Roy/Attendance-System---Backend">
    <img src="https://attendancee.vercel.app/logo1.png" alt="Logo" width="200" height="200">
  </a>


  <h3 align="center">Full-Stack JavaScript Attendance Portal - Backend</h3>

  <p align="center">
    <br />
    <a href="https://www.postman.com/warped-resonance-359125/workspace/attendance-system"><strong>Postman Public Workspace</strong></a>
    <br />
    <br />
    <a href="https://timekeeper-api.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/Puskar-Roy/Attendance-System---Backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Puskar-Roy/Attendance-System---Backend/issues">Request Feature</a>
  </p>
</div>



##### Note: *You can test API endpoints only in the development environment; otherwise, a CORS error will occur. To avoid this, create a .env file and add DEV_MODE=DEV inside.*

## API End Points

### 1. Authentication Routes
```bash
/api/auth/login                                POST               //for login
/api/auth/register                             POST               //for register
```

### 2. Users Routes

```bash
/api/users                                     GET               //for all users
/api/users/:id                                 GET               //for a single user
```

### 3. Attendance Routes

```bash
/api/attendance/counts/:userId                 GET               //for the number of attendance
/api/attendance/user/:attendenceId             GET               //for a single attendance
/api/attendance/date/:date                     GET               //for all the attendances of a date
/api/attendance/:userId                        GET               //for all the attendances of a user
/api/attendance/change-status/:attendanceId    PUT               //for change the status of an attendance
/api/attendance                                POST              //for create an attendance
/api/attendance/mark-absent                    POST              //for marking the absent users
/api/attendance/all                            POST              //for create all attendance
/api/attendance/:attendanceId                  DEL               //for delete an attendance
```











## About The Project


- **Linting & Formatting:**
  - ✔️ ESLint for code linting
  - 🎨 Prettier for code formatting

- **Deployment:**
  - 🌐 Ready for deployment on Vercel
  - 🚀 One-click deployment

- **Development Workflow:**
  - 🔧 Configured for TypeScript
  - 🔄 Live reload for efficient development
  - 🛠 Optimized code for production

- **Security Measures Added:**
  - 🔐 Helmet for setting up security headers
  - 🔒 XSS protection with xss-clean middleware
  - 🚧 HTTP Parameter Pollution (HPP) protection
  - 🧼 MongoDB data sanitization with express-mongo-sanitize
  - 🚦 Rate limiting with express-rate-limit for protection against brute-force attacks
  - 🌐 CORS (Cross-Origin Resource Sharing) configured to allow requests only from a specific origin  


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With



- **[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/):** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/):** Fast, unopinionated, minimalist web framework for Node.js.
- **[![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/):** A superset of JavaScript that adds static types.
- **[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** The programming language of 
- **[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/):** The database for modern applications.
- **[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/):** Cloud platform for serverless deployment and hosting.
- **[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/):** Pluggable linting utility for identifying and fixing code issues.
- **[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/):** Opinionated code formatter to ensure consistent code styling the web.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started 🚀

### Prerequisites
Before you begin contributing to this project, make sure you have the following set up:

- [Node.js](https://nodejs.org/): A JavaScript runtime.
- [npm](https://www.npmjs.com/): The Node.js package manager.

### Run This ⌨️

1. **Clone the Repository:**


2. **Install Dependencies:**
   ```bash
    npm install
   ```
3. **Add Environment Variables:**
   ```bash
   touch .env
   ```
4. **Add the necessary configuration:**
   ```bash
   PORT=5050  //Port 5000 
   MONGOURI=<your-mongo-uri>

    JWT_SECRET=<itsyourjwtsecrent?
    JWT_COOKIE_EXPIRES_IN="3d"  // 3 days
    DEV_MODE=DEV   // DEV or PROD
   ```
5. **Run This Project:**
   ```bash
   npm run dev
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Puskar Roy 🖋️





