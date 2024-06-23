# Visitor Counter API

This project is a serverless API hosted on Netlify using Redis Cloud as the database. The API allows for managing a simple counter that can be incremented, reset, or retrieved. It supports CORS for cross-origin requests.

## Table of Contents
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [OPTIONS /](#options-)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Error Handling](#error-handling)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Redis Cloud Account](https://redis.com/redis-enterprise-cloud/overview/)
- [Netlify Account](https://www.netlify.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mondalsurojit/Visitor-Counter-API.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables (create a `.env` file):
   ```env
   REDIS_HOST=your-redis-host
   REDIS_PORT=your-redis-port
   REDIS_PASSWORD=your-redis-password
   ```

4. Deploy to Netlify by linking your repository and configuring environment variables through the Netlify dashboard.

## API Endpoints

### GET /

This endpoint increments the counter by 1 if no query parameters are provided. If the `q` parameter is set to `reset`, it resets the counter to 0. If the `q` parameter is set to any other value, it returns the current count without incrementing.

#### Request

- Method: `GET`
- URL: `https://visitor-counter-api.netlify.app/.netlify/functions/counter/`

#### Query Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| q         | string | Optional. If `reset`, the counter is reset to 0.|

#### Response

- Status: `200 OK`
- Body: JSON object containing the current count value

  ```json
  {
    "value": <current_count>
  }
  ```

### OPTIONS /

This endpoint handles CORS preflight requests.

#### Request

- Method: `OPTIONS`
- URL: `https://visitor-counter-api.netlify.app/.netlify/functions/counter/`

#### Response

- Status: `200 OK`
- Body: `"Preflight OK"`

## Environment Variables

| Variable         | Description                              |
|------------------|------------------------------------------|
| `REDIS_HOST`     | The hostname of your Redis instance.     |
| `REDIS_PORT`     | The port number of your Redis instance.  |
| `REDIS_PASSWORD` | The password for your Redis instance.    |

## Dependencies

- [redis](https://www.npmjs.com/package/redis): Redis client for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Module to load environment variables from a .env file.
- [netlify-cli](https://www.npmjs.com/package/netlify-cli): Command line tool for Netlify.
- [netlify-lambda](https://www.npmjs.com/package/netlify-lambda): Tools for building and deploying serverless functions with Netlify.
- [serverless-http](https://www.npmjs.com/package/serverless-http): Serverless framework for running Node.js HTTP servers.


## Error Handling

In case of an error while interacting with Redis, the API responds with:

- Status: `500 Internal Server Error`
- Body: `"Error interacting with Redis"`

## Development

To run the project locally, follow these steps:

1. Ensure Redis Cloud is configured and accessible.
2. Ensure the `.env` file is correctly set up with Redis credentials.
3. Run the serverless function locally using Netlify CLI:
   ```sh
   netlify dev
   ```

## Deployment

Deploy the API using Netlify by following their [serverless function deployment guide](https://docs.netlify.com/functions/overview/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify this documentation to better suit your specific requirements and project structure.