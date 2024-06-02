## Profile Management API

### Registration

- **Route**: POST /register/createUser
- **Access**: Public

Register a new user account.

#### Request Body

```json
{
  "name": "string (1-250 characters)",
  "email": "string (must be there)",
  "password": "string (must be there)",
  "phoneNumber":"string with 10 length",
  "profileType":"string (must be public or private)",
  "role":"string (must be normal or admin)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message

### Login

- **Route**: POST /login/user
- **Access**: Public

Authenticate a user and return user data.

#### Request Body

```json
{
  "name": "string (1-250 characters)",
  "password": "string (not null)"
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message and user data

### Checkout Profile

- **Route**: POST checkout/profile
- **Access**: Public

#### Request Params
- we have to pass Id


#### Response

- Status Code: 200 OK
- Content: JSON object with all the user data.

### Update Profile

- **Route**: POST /update/profile
- **Access**: Public


#### Request Body

```json
{
  "id": "integer",
  "imageUrl": "string ",
  "bio":"string "
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message


### Update Image
- **Route**:/update/image
- **Access**: Public


#### Request Body

```json
{
  "id": "integer",
  "imageUrl": "string ",
 
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message

### Update ProfileType
- **Route**:/update/profileType
- **Access**: Public


#### Request Body

```json
{
  "id": "integer",
  "profileType": "either normal or admin user",
 
}
```

#### Response

- Status Code: 200 OK
- Content: JSON object with success message

### Checkout UserProfileList 
- **Route**:/checkout/userProfilesList
- **Access**: Public


#### Request Params
- we have to pass Id

#### Response

- Status Code: 200 OK
- Content: JSON object with other user data




