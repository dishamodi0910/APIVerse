# Social Media Analytics API

This is a simple Social Media Analytics API built using Node.js and Express. The API provides basic analytics data for users such as total posts, likes, comments, and shares.

## Project Structure

```
social-media-analytics-api/
├── README.md
├── app.js
├── package.json
└── routes/
    └── analytics.js
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/social-media-analytics-api.git
   ```

2. Navigate to the project directory:
   ```
   cd social-media-analytics-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the API

To start the server, run:
```
npm start
```

The server will start on port 3000 by default. You can access the API at `http://localhost:3000/api/analytics/:userId`.

## Endpoints

### GET /api/analytics/:userId

Fetch analytics data for a user.

#### Parameters

- `userId` (string): The ID of the user.

#### Response

- `200 OK`: Returns the analytics data for the user.
- `404 Not Found`: User not found.

#### Example

```
GET /api/analytics/user1

Response:
{
    "posts": 120,
    "likes": 340,
    "comments": 45,
    "shares": 67
}
```

## Mock Data

Currently, the API uses mock data for demonstration purposes. You can find the mock data in `routes/analytics.js`.

## License

This project is licensed under the MIT License.
```

### Instructions to Run the Code

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/social-media-analytics-api.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd social-media-analytics-api
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Start the Server**
   ```sh
   npm start
   ```

5. **Access the API**
   Open your browser or use a tool like Postman to make a GET request to:
   ```
   http://localhost:3000/api/analytics/user1
   ```

Feel free to expand this example by adding more features like user authentication, database integration, or more detailed analytics.