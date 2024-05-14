# Random User Generator API

This API generates random user data.

## Usage

### Endpoint

- GET /api/user

### Query Parameters

- `count` (optional): Specifies the number of random users to generate. Defaults to 10 if not provided.

### Example Request

- GET /api/user?count=3

### Example Response

```json
[
  {
    "userId": "65345344-8111-4fab-9f44-a930e621dd99",
    "firstName": "Jedediah",
    "lastName": "Krajcik",
    "username": "Mittie25",
    "email": "Elyssa.Ullrich41@yahoo.com",
    "avatar": "https://avatars.githubusercontent.com/u/53726850",
    "password": "9mmWz8n1tg8VJj_",
    "birthdate": "1976-07-29T11:41:24.358Z"
  },
  {
    "userId": "18b52f75-5f02-4955-989d-4a31696da69b",
    "firstName": "Rhiannon",
    "lastName": "Beatty",
    "username": "Alexzander28",
    "email": "Kathryn51@hotmail.com",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/90.jpg",
    "password": "9Jy432NlZ4b9Uij",
    "birthdate": "2003-10-01T21:35:50.632Z"
  },
  {
    "userId": "02322009-98af-4546-ab17-5172523f068f",
    "firstName": "Erwin",
    "lastName": "Cruickshank",
    "username": "King_Metz",
    "email": "Edward.Walsh58@gmail.com",
    "avatar": "https://avatars.githubusercontent.com/u/77814093",
    "password": "wyKrcGC0dFLZi1L",
    "birthdate": "1975-11-13T14:56:37.295Z"
  }
]
```

## Running the Server

- Install dependencies:

```
npm install
```

- Start the server:

```
node index.js
```

The server will run on http://localhost:8000 by default.
