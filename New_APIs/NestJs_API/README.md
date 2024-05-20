<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/Puskar-Roy/NestJs_API.git">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*-hmwuf8jE2c7fPdMzX9_0w.jpeg" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">NEST Js + Type ORM + Postgre SQL +Json Web Tokens</h3>

  <p align="center">
    This REST API features CRUD routes for users, along with registration, login functionalities, and route protection. 🚀🔐
    <br />
    <br />
    <br />
    <a href="https://github.com/Puskar-Roy/NestJs_API/issues">Report Bug</a>
    ·
    <a href="https://github.com/Puskar-Roy/NestJs_API/issues">Request Feature</a>
  </p>
</div>


## Getting Started 🚀

### Prerequisites
Before you begin contributing to this project, make sure you have the following set up:

- [Node.js](https://nodejs.org/): A JavaScript runtime.
- [npm](https://www.npmjs.com/): The Node.js package manager.

### Run This ⌨️

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Puskar-Roy/NestJs_API.git
   ```
2. **Install Dependencies:**
   ```bash
    npm install
   ```
3. **Run This Project:**
   ```bash
   npm run dev
   ```
   or
   
   ```bash
   npm start
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>
## API End Points  🌟   
1. **Home Route** 🚀
```bash
GET - http://localhost:3000/
```
2. **Register User Route** 📥
```bash
POST - http://localhost:3000/api/auth/register
```
Request Body For Register Route - 
```bash
{
    "name":"etc1",
    "email": "etc1@gmail.com",
    "phoneNumber":"+917449585365",
    "password":"etc@1234",
    "password":"etc@1234",
}
```
3. **Login User Route** ⚡
```bash
POST - http://localhost:3000/api/auth/login
```
Request Body For Login Route - 
```bash
{
    "email": "etc1@gmail.com",
    "password":"etc@1234",
}
```
4. **Get All User Route** ⌨️
```bash
GET - http://localhost:3000/api/user/allUsers
```
5. **Get a Single User Route** 👦
```bash
GET - http://localhost:3000/api/user/:userId
```
6. **Update User Route** ⚡
```bash
PATCH - http://localhost:3000/api/user/:userId
```
Request Body For Update User Route - 
```bash
{
    "name":"etc2",
    "email": "etc2@gmail.com",
    "phoneNumber":"+917449585365",
}
```
7. **Delete User Route** 🚀
```bash
DELETE - http://localhost:3000/api/user/:userId
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Future Works 🟩
1. **Add .env Package**🌟
2. **Add cors , rate limiter , helmet , xss , hpp etc Packages**🌟
3. **Deployment**🌟


### Puskar Roy 🖋️






