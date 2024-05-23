# Motivational Quotes API

The Motivational Quotes API provides motivational quotes categorized by genre. You can fetch quotes based on genre, search for quotes, submit new quotes, rate quotes, and retrieve a random quote.

## Base URL

`http://localhost:3000`

## Endpoints

### 1. Get Quotes by Genre

**GET /quotes/:genre**

Fetch quotes from a specified genre.

#### URL Parameters

- `genre` (required): The genre of the quotes. Available genres:
 - `happiness`
 - `motivation`
 - `hardwork`
 - `peace`

#### Query Parameters

- `limit` (optional): The number of quotes to retrieve. Defaults to all quotes in the specified genre.
 - Example: `1`, `5`

#### Example Requests

1. **Fetch all quotes from the motivation genre**

GET /quotes/motivation

**Example Response**

```json
[  
  {
    "quote": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "author": "Winston Churchill"
  }
]

- Fetch 1 quote from the happiness genre

GET /quotes/happiness?limit=1

Example Response

[
  {
    "quote": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama"
  }
]

2. Search Quotes

GET /quotes/search
Search for quotes based on a query.

Query Parameters
q (required): The search query.

Example Request
GET /quotes/search?q=success

Example response 
[
  {
    "quote": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    "author": "Colin Powell",
    "genre": "hardwork"
  },
  {
    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer",
    "genre": "hardwork"
  }
]

- POST /quotes
Submit a new quote to the API.

Request Body

genre (required): The genre of the quote.
quote (required): The text of the quote.
author (required): The author of the quote.

{
  "genre": "motivation",
  "quote": "Success is not the key to happiness. Happiness is the key to success.",
  "author": "Albert Schweitzer"
}

Example response 

{
  "quote": "Success is not the key to happiness. Happiness is the key to success.",
  "author": "Albert Schweitzer"
}

- Rate a Quote
PUT /quotes/:genre/:index/rate
Rate a quote in the specified genre and index.
URL Parameters

genre (required): The genre of the quote.
index (required): The index of the quote within the genre.

Request Body

rating (required): The rating for the quote.

Example request 

{
  "rating": 5
}

Example response 

{
  "quote": "The best way to get started is to quit talking and begin doing.",
  "author": "Walt Disney",
  "rating": 5
}

5. Get a Random Quote
GET /quotes/random
Fetch a random quote from the API.
Example Request

Example response 

{
  "quote": "Peace begins with a smile.",
  "author": "Mother Teresa",
  "genre": "peace"
}

#### Using JavaScript fetch API

// Fetch quotes by genre
fetch('http://localhost:3000/quotes/motivation?limit=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Search for quotes
fetch('http://localhost:3000/quotes/search?q=success')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Submit a new quote
fetch('http://localhost:3000/quotes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    genre: 'motivation',
    quote: 'Success is not the key to happiness. Happiness is the key to success.',
    author: 'Albert Schweitzer'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Rate a quote
fetch('http://localhost:3000/quotes/motivation/0/rate', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    rating: 5
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get a random quote
fetch('http://localhost:3000/quotes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));