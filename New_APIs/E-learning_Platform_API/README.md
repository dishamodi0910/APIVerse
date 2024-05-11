<a name="readme-top"></a>

<br />
<div align="center">
  <div>
    <img src="https://t4.ftcdn.net/jpg/01/28/93/91/360_F_128939133_0WXTVdZ1bv1NXusQsdYYJLIwTVoXHqQ7.jpg" alt="Logo" width="150" height="120">
  </div>


  <h3 align="center">E-learning Portal - Backend</h3>

  <p align="center">
    <br />
    <a href="https://elearningplatformm.vercel.app">View Demo</a>
    ·
   <a href="https://www.postman.com/warped-resonance-359125/workspace/e-learning-platform">Postman Public Workspace</a>
  </p>
</div>



##### Note: *For production, include your frontend URL in the `whitelist` array within `src/index.ts`. Update the `.env` file by setting `DEV_MODE=PROD` to ensure that CORS is restricted. In `DEV_MODE=DEV`, any URL can send requests to the backend. Set `EMAIL_SERVICE=RESEND` to use the default email service as Resend. Note that in the free tier of Resend, you can only send emails to your own email account. The current setup utilizes the NodeMailer SMTP service. For testing the API, use the admin credentials: email: `admin@admin.com`, password: `admin`*

## API End Points

### 1. Authentication Routes
```bash
/api/v0.1/auth/login                                      POST               //for login
/api/v0.1/auth/register                                   POST               //for register
/api/v0.1/auth/forgot-password                            GET                //for forgot password
/api/v0.1/auth/reset-password                             POST               //for reset password 
```

### 2. Users Routes

```bash
/api/v0.1/users                                           GET                //for all users
/api/v0.1/users/:id                                       GET                //for a single user
/api/v0.1/users/:id                                       DELETE             //for delete a user
/api/v0.1/users/:id                                       PUT                //for update a user
/api/v0.1/users/:userId/enrollments                       GET                //for get all enrolled courses of a user
```

### 3. Course Routes

```bash
/api/v0.1/course                                          POST               //for create a course admin only
/api/v0.1/course?category=Python&level=Advance            GET                //for get all courses and you can add queries but its optional
/api/v0.1/course?category=JS&level=Beginner&page=1&pageLimit=3               //pagination with all the queries but its all optional
/api/v0.1/course/:id                                      PUT                //for update a course admin only
/api/v0.1/course/:id                                      DELETE             //for delete a course admin only
/api/v0.1/course/:id                                      GET                //for get a single course
/api/v0.1//course/trending                                GET                //for popular courses based on user enrollment
/api/v0.1/course/:courseId/enroll                         POST               //for enroll in a course
/api/v0.1/course/:courseId/leave                          DELETE             //for leave from a course
/api/v0.1/course/:courseId/reviews                        GET                //for getting all reviews of a course
```

### 4. Review Routes

```bash
/api/v0.1/review                                         POST               //for create a review
/api/v0.1/review/:id                                     DELETE             //for delete a review
/api/v0.1/review/:id                                     PUT                //for update a review
```


### 5. Profile Routes

```bash
/api/v0.1/users/:userId/profile                          POST               //for set profile and profile pic of a user
/api/v0.1/users/:userId/profile                          PUT                //for update profile and profile pic of a user
```



## Getting Started 🚀

### Prerequisites
Before you begin contributing to this project, make sure you have the following set up:

- [Node.js](https://nodejs.org/): A JavaScript runtime.
- [npm](https://www.npmjs.com/): The Node.js package manager.

### Run This ⌨️

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Puskar-Roy/E-learning-Platform----Backend
   ```
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
    PORT = 8000
    JWT_SECRET="erknevlkenrlkijerjoikmlefnlfrnjfrklsdk;"        //jwt secret
    JWT_COOKIE_EXPIRES_IN="3d"                                  //in days     
    RESEND_API=<resend-api>
    DATABASE_URL=<database-url>
    CLOUDINARY_CLOUD_NAME=<cloud-name>
    CLOUDINARY_API_KEY=<api-key>
    CLOUDINARY_API_SECRET=<api-secret>
    DEV_MODE=DEV                                               // node env = DEV or PROD
    BACKENDURL=http://localhost:8000                           // your backend URL
    EMAIL_SERVICE=RESEND                                       // RESEND or NODEMAILER
    EMAIL=<your-email>                                         // Need If you use Email service as Node Mailer
    PASSWORD=xbwcpouxmlzcauxm                                  //This password is not your Gmail password. To obtain it, enable two-step verification for your Gmail account. Then, create an app password in your Gmail settings then you get the password.
   ```
5. **Migration with Database Schema (Optional):** 
   ```bash
   npx prisma migrate dev --name <name>
   ```
6. **Run This Project:**
   ```bash
   npm run dev
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>


## Vercel Deployment 🛫

- Sign in to your Vercel account.
- Click on __"Add New" -> "Project"__.
- Choose a name for your service and select your Github Repo and Import.
### 1. Build Command
```bash
 npm run vercel-build
```
### 2. Install Command
```bash
 npm install
```
### 3. Start Command
```bash
 npm start
```
Note : *__Dont forgot to Add Environment Variables__*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Render Deployment 🛫

- Sign in to your Render account.
- Click on __"New" -> "Web Service"__.
- Choose a name for your service and select your Git provider (GitHub in this case).

### 1. Build Command
```bash
 npm install; npm run vercel-build
```
### 3. Start Command
```bash
 npm run start
```
Note : *__Dont forgot to Add Environment Variables__*

<p align="right">(<a href="#readme-top">back to top</a>)</p>


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


### 🖋️ Puskar Roy