# Description
This API facilitates Social Media Management, providing functionality for users to login, follow each other, post content, comment on posts, and like posts. Only followers are authorised to interact with posts.

# API Endpoints
## Authentication
### POST /api/auth/register
Register user taking username, password and name in request body. Returns jwt token.
### POST /api/auth/login
Login user taking username and password in request body. Returns jwt token.

## User Profile Management
### GET /api/users/:userId/profile
Retrieve profile of a specific user. Can be accessed by any authenticated user.

### PATCH /api/users/:userId/profile
Update profile of a specific user. Can be done by the current user if user id in jwt payload matches userId.

### DELETE /api/users/:userId/profile
Update profile of a specific user. Can be done by the current user if user id in jwt payload matches userId.

## User Following Management
### GET /api/users/:userId/following
Get list of following of a specific user. Can be accessed only if current user's id in the jwt payload is present in followers of user with id userId

### GET /api/users/:userId/followers
Get list of followers of a specific user. Can be accessed only if current user's id in the jwt payload is present in followers of user with id userId

### POST /api/users/:userId/following
Current authenticated user can follow the user with id as userId.

### DELETE /api/users/:userId/following
Current authenticated user can unfollow the user with id as userId.

## Post Management
### GET /api/users/:userId/posts
Get list of posts of a specific user. Can be accessed only if current user's id in the jwt payload is present in followers of user with id userId

### POST /api/users/:userId/posts
Add a new post for a specific user. Can be done by the current user if user id in jwt payload matches userId.

### GET /api/users/:userId/posts/:postId
Get post by id of a specific user. Can be accessed only if current user's id in the jwt payload is present in followers of user with id userId

### PATCH /api/users/:userId/posts/:postId
Update post by id of a specific user. Can be done by the current user if user id in jwt payload matches userId.

### DELETE /api/users/:userId/posts/:postId
Delete post by id of a specific user. Can be done by the current user if user id in jwt payload matches userId.

### POST /api/users/:userId/posts/:postId/like
Add current user's like for a specific post. Can be done only if current user's id in the jwt payload is present in followers of user with id userId

### DELETE /api/users/:userId/posts/:postId/like
Remove current user's like for a specific post. Can be done only if current user's id in the jwt payload is present in followers of user with id userId

## Comments Management
### GET /api/users/:userId/posts/:postId/comments
Get list of comments of a specific post. Can be accessed only if current user's id in the jwt payload is present in followers of user with id userId

### POST /api/users/:userId/posts/:postId/comments
Add a comment to a specific post. Can be done only if current user's id in the jwt payload is present in followers of user with id userId

### PATCH /api/users/:userId/posts/:postId/comments/:commentId
Upadte a specific comment. Can be done only if current user's id in the jwt payload is present in followers of user with id userId and the comment is written by current user

### DELETE /api/users/:userId/posts/:postId/comments
Delete a specific comment. Can be done only if current user's id in the jwt payload is present in followers of user with id userId and the comment is written by current user





# Getting Started
## Pre-Requisites
Make sure you have:
- Node
- MongoDB

## Steps to Run
- Clone the repository and navigate to the main directory **SocialMediaAPI**

    ```bash
    cd SocialMediaAPI
   ```
- Create a **.env** file in the main directory
    ```bash
    touch .env
   ```

- Add the following neccessary details in the **.env** file
    ```bash
    PORT=4000
    DBURL=mongodb://localhost:27017/<database name>
   ```
- Install dependencies 
    ```bash
    npm install
   ```

- Run the server code
    ```bash
    node index.js
   ```

## Request Body Example
### Request body for registration
```bash
    {
        "username": "p1",
        "name": "p",
        "password": "p1"
    }
```
### Request body for login
```bash
    {
        "username": "p1",
        "password": "p1"
    }
```
### Request body for update profile
```bash
    {
        "username": "p1",
        "name": "p",
    }
```
### Request body for adding post
```bash
    {
        "title": "This is the post title",
        "content": "This is the post content"
    }
```
### Request body for updating post
```bash
    {
        "title": "This is the updated post title",
        "content": "This is the updated post content"
    }
```
### Request body for adding comment
```bash
    {
        "text": "This is the text comment",
    }
```
### Request body for updating a comment
```bash
    {
        "text": "This is the updated text comment",
    }
```



