## Description

- Backend infrastructure for a blogging platform, using Node.js, Express.js, and MongoDB, facilitating seamless management of user and admin roles with role-based authentication.
- Robust user authentication functionalities, including sign-in and sign-up features, ensuring secure access for both users and administrators.
- Users can create, edit, delete and view their own blogs.
- Users can like/unlike, comment, search by tags and view blogs.
- Administrators can manage user, blogs and tags.

## How to run it? 🕹️

1. Fork the repository.

2. Clone the project.

```
git clone repository-url
```

3. Install dependencies.

```
npm install
```

4. Create and update `.env` file.

```
PORT = port-no
MONGODB_URL = your mongodb database url
JWT_SECRET_KEY = your jwt secret key
```

5. Run the server.

```
node app.js
```

6. Check the endpoints via postman/frontend.


## EndPoints

1. Sign in
   
```http
POST /auth/signin
```


2. Sign up
   
```http
POST /users/
```

3. Get user by id
   
```http
GET /users/:id
```

4. Get all user (Admin)
   
```http
GET /users/
```

5. Update User (User)
   
```http
PUT /users/:id
```

7. Delete user (User)
   
```http
DELETE /users/:id
```

8. Create blog (User)
   
```http
POST /blogs/
```

9. Update blog (User)
   
```http
PUT /blogs/:id
```

10. Delete blog (User)
   
```http
DELETE /blogs/:id
```

11. Get all blogs
   
```http
GET /blogs/
```

12. Create comment (User)
   
```http
POST /comments/
```

13. Update comment (User)
   
```http
PUT /comments/:id
```

14. Delete comment (User)
   
```http
DELETE /comments/:id
```

15. Get comments by blog
   
```http
GET /comments/
```

15. Like/unlike blog (User)
   
```http
PUT /likes/
```

15. Get likes by blog
   
```http
GET /likes/:blogId
```

16. Create tag (Admin)
   
```http
POST /tags/
```

17. Update tag (Admin)
   
```http
PUT /tags/:id
```

18. Delete tag (Admin)
   
```http
DELETE /tags/:id
```

19. Get all tags
   
```http
GET /tags/
```
