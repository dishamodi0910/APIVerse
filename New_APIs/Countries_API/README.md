# Countries & Cities API

## Description
This API provides detailed information about countries and their cities. You can retrieve data such as capital, language, currency, latitude, longitude, continent, and neighboring countries. Additionally, you can filter countries by language or currency, find neighboring countries of a specific country, and list all countries in a specific continent.

## Features
1. Retrieve information about countries, including language, currency, latitude, longitude, continent, and neighboring countries.
2. Filter countries by language or currency.
3. Find neighboring countries of a specific country.
4. List all countries in a specific continent.

## Requirements
- Node.js
- MongoDB
- Postman

## Installation
1. Clone the Repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2.Install Dependencies:

```bash
npm install
```

3. Setup MongoDB:
    - Ensure MongoDB is installed and running on your local machine or a remote server.
    - Create a new database and collection for storing country data.

4. Start the Server:

```bash
node server.js
```

## API Endpoints:

1. Get All Countries:

```http
GET /api/countries
```

2. Get Country by Name:

```http
GET /api/countries/:name
```

3. Get Countries by Language:

```http
GET /api/countries/language/:language
```

4. Get Countries by Currency:

```http
GET /api/countries/currency/:currency
```

5. Get Neighboring Countries:

```http
GET /api/countries/:name/neighbors
```

6. Get Countries by Continent:

```http
GET /api/countries/continent/:continent
```

## Notes
- Ensure server is running at 5000.
- Use Postman or similar tools to test and interact with the API endpoints.