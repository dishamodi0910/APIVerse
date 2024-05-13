## Authentication API

### Registration

- **Route**: POST /api/auth/registration
- **Access**: Public

Register a new user account.

#### Request Body

```json
{
  "username": "string (3-30 characters)",
  "email": "string (valid email address)",
  "password": "string (minimum 6 characters)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message

### Login

- **Route**: POST /api/auth/login
- **Access**: Public

Authenticate a user and generate a JWT token.

#### Request Body

```json
{
  "username": "string (3-30 characters)",
  "password": "string (minimum 6 characters)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with JWT token and user data

### Forgot Password

- **Route**: POST /api/auth/forgot-password
- **Access**: Public

Generates a reset password token(can be modified to send as email using the nodemailer package)

#### Request Body

```json
{
  "email": "string (valid email address)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with reset token

### Reset Password

- **Route**: POST /api/auth/reset-password
- **Access**: Public

Reset user's password using the reset token.

#### Request Body

```json
{
  "token": "string",
  "newPassword": "string (minimum 6 characters)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message
