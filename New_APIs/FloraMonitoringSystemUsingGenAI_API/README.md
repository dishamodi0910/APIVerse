# Aarchid - Individual Level Flora Monitoring System 

This application helps individuals by providing plant care assistance using Google's Gemini Pro models for vision and text analysis.

## UseCase
This service/API can be used to develop respective Mobile and Web Clients which allow it user to interact with the service and ultize the functionalities wrtten below.

Example : https://aarkid-client.vercel.app


This API can be a example for developers who want to build their products using genAI services & understand the steps taken to build a application with real life usecase like this one.

## Functionalities

- Plant-Specific Task Management
- Lifecycle Tracking
- In-App Health Monitoring
- AI-Powered Chat Support

## Technologies Used

- Cloudinary 
- Multer
- Nodemon
- Mongoose
- Mongodb
- Express.js
- Google Generative AI service


## How to Get Started

- Clone the repository 

```
git clone https://github.com/dishamodi0910/APIVerse.git
```

- Install all the required dependencies

```
npm i 
```



- Get Enviroment Variables

.env.example
```
AUTH_SECRET = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 
CLOUDINARY_CLOUD_NAME = 
GEMINI_API_KEY = 
MONGODB_URL = 
```

- Create a Pull Request To Start Contributing 


## Routes

Note : 

- Ensure that the Client domain or port address you are using is added to the authorized domains section in index.js in the root directory in order to avoid CORS errors

```
const allowedOrigins = ['http://localhost:5173'];
```

- You must pass the token you receive after the authentication as "Authorization" using the request headers.

| Entity    | Base API Route |
| -------- | ------- |
| Auth  | /api/auth   |
| Users | /api/user     |
| Plants    | /api/plant    |
| Tasks   | /api/task   |
| Messages    | /api/message    |
| Healtlogs    | /api/healthlog   |


- Auth

| API    | Functionality |  Request Body |  Note | 
| -------- | ------- | ------- | ------- | 
| /register  | Creates a new User on the Database   | email , name , plant species , image | Ensure the request headers have 'Content-Type': 'multipart/form-data' | 




- User


| API    | Functionality |  Request Body|  Note | 
| -------- | ------- | ------- | ------- |
| /getUsers | Retrieves all users from the database	  | N/A | 	Must be Authenticated By the server |
| /getUser/:id | Retrieves a specific user by ID from the database | N/A | 	Must be Authenticated By the server |
| /deleteUser/:id | 	Deletes a specific user by ID from the database | N/A | 	Must be Authenticated By the server and be the owner of the account|
| /updateUser/:id | 	Updates a specific user by ID in the database | {plantSpecies} | 	Must be Authenticated By the server and be the owner of the account|
| /getUserByEmail | Retrieves a user by email from the database | {email} | Must be Authenticated By the server|
| /getUserByEmailAuth | Retrieves/Checks a user by email from the database for authentication purposes | {email} | No Authentication Required|

- Plant

| API    | Functionality |  Request Body|  Note | 
| -------- | ------- | ------- | ------- |
| /getPlants |Retrieves all plants from the database | N/A | 	Must be Authenticated By the server |
| /getPlant/:id	 | Retrieves a specific plant by ID from the database | N/A | 	Must be Authenticated By the server |
| /getPlantsByUserId/:id	 | 	Retrieves all plants by a specific user ID from the database  | N/A | 	Must be Authenticated By the server and be the owner of the account|
| /createNewPlant	 | 		Creates a new plant in the database  | { user_id, name, species, dateOfPlanting, comment, image }| 	Must be Authenticated By the server|
| /deletePlant/:id		 | 	Deletes a specific plant by ID from the database  | { user_id, name, species, dateOfPlanting, comment, image }| Must be Authenticated By the server and be the owner of the account|

- HealthLog

| API    | Functionality |  Request Body|  Note | 
| -------- | ------- | ------- | ------- |
| /getAllHealthLogs |	Retrieves all health logs from the database | N/A | 	Must be Authenticated By the server |
| /getAllHealthLog/:id |	Retrieves a specific health log by ID from the database | N/A | 	Must be Authenticated By the server |
| /getHealthLogsByUserId/:id |Retrieves all health logs by a specific user ID from the database | N/A | 	Must be Authenticated By the server and be the owner of the account |
| /getHealthLogsByPlantId/:id |Retrieves all health logs by a specific plant ID from the database| N/A | 	Must be Authenticated By the server |
| /createNewHealthLog  |	Creates a new health log in the database | { user_id, plant_id, comment, dateOfDiagnosis, name, attachment }| 	Must be Authenticated By the server |


- Task 

| API    | Functionality |  Request Body|  Note | 
| -------- | ------- | ------- | ------- |
| /getTasks | Retrieves all tasks from the database	  | N/A | 	Must be Authenticated By the server |
| /getTask/:id |Retrieves a specific task by ID from the database  | N/A | 	Must be Authenticated By the server and be the owner of the task |
| /createNewTask | Creates a new task in the database  | { user_id, plant_name, name } | Must be Authenticated By the server |
| /getTasksByUserId/:id | Retrieves all tasks by a specific user ID from the database  | N/A | Must be Authenticated By the server and be the owner of the account|
| /deleteTask/:id | Deletes a specific task by ID from the database  | N/A | Must be Authenticated By the server and be the owner of the account|

- Message 

| API    | Functionality |  Request Body|  Note | 
| -------- | ------- | ------- | ------- |
| /getMessages | Retrieves all messages from the database	| N/A | 	Must be Authenticated By the server |
| /getMessagesByUserId/:id	 | 	Retrieves all messages by a specific user ID from the database	| N/A | 	Must be Authenticated By the server and be the owner of the account|
| /createNewMessage | 	Creates a new message in the database	| N/A | Must be Authenticated By the server |
