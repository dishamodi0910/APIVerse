<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/BoBsRepository/create-express-ts-template">
    <img src="https://repository-images.githubusercontent.com/162537377/9c807700-9828-11ea-8a3b-47411956130e" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">Express Js with Typescript</h3>

  <p align="center">
    An awesome template to jumpstart your Express.js (TypeScript) projects, helping you to speed up the process of building RESTful APIs.
    <br />
    <a href="https://github.com/BoBsRepository/create-express-ts-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://create-expresss-ts.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/BoBsRepository/create-express-ts-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/BoBsRepository/create-express-ts-template/issues">Request Feature</a>
  </p>
</div>








## About The Project


Within this repository, you will discover a fully configured and ready-to-use Express.js web application designed for the Node.js runtime. The project is built using TypeScript, providing a robust foundation for developing web applications effortlessly.

Here's why:
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

Of course, This template may not cover all project needs, as your requirements may vary. More updates will be added in the future. Feel free to suggest changes by forking this repo, creating a pull request, or opening an issue. Thanks to all contributors who have helped enhance this template!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section highlights the key frameworks and libraries that form the foundation of your project. Below are some notable examples:


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
   ```bash
   git clone https://github.com/BoBsRepository/create-express-ts-template.git
   ```
2. **Install Dependencies:**
   ```bash
    cd create-express-ts-template
    npm install
   ```
3. **Add Environment Variables:**
   ```bash
   cd create-express-ts-template
   touch .env
   ```
4. **Add the necessary configuration:**
   ```bash
   PORT = 5050 #Your Port 
   MONGOURI = <your-mongodb>
   MODE = DEV # DEV = development or PROD = production
   JWT_SECRET = "jdiafhoaifdhoislknsfnlkfbhojsdfijoeipweopkfek;jsdm;kvm;cvkjvjpisdv" # Your Secret
   JWT_COOKIE_EXPIRES_IN = 7 #In Days
   ```
5. **Run This Project:**
   ```bash
   npm run dev
   ```
   or
   
   ```bash
   npm start
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>
## Contributing 🌟   
### Making Contributions

We welcome and appreciate contributions from the community ❤️! Here's how you can contribute:

- **Open Issues:** Check for open issues or create a new one to start discussions.
- **Fork the Repository:** Fork the project to your own GitHub account.
- **Create Pull Request:** Make changes in your fork and submit a pull request.

### Welcome Contributors!

🚀 Thank you for considering contributing to this project! Your involvement makes this template even better. Feel free to explore the code, share your ideas, and make improvements ✌️.

🌟 Don't hesitate to reach out if you have any questions or need assistance. Together, let's make this project amazing!🟩

<p align="right">(<a href="#readme-top">back to top</a>)</p>






