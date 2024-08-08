# URL Shortener API

This API allows you to shorten URLs and redirect users from shortened URLs to their original long URLs.

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running locally or accessible remotely

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dishamodi0910/APIVerse.git
   cd APIVerse/New_APIs/URL_shorten
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ``` 
     DB=<your-mongodb-uri>
     ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### POST /api/shorten

Shortens a long URL.

**Request Body**
```json
{
  "originalUrl": "https://example.com/very-long-url-to-shorten"
}
```

**Response**
```json
{
  "shortUrl": "http://your-domain.com/abc123"
}
```

### GET /:shortUrl

Redirects to the original long URL associated with the provided short URL.

## Usage

1. Send a POST request to `/api/shorten` with a JSON body containing `originalUrl`.
2. The API responds with a `shortUrl`.
3. Use the `shortUrl` to redirect users to the original `originalUrl`.
 
 