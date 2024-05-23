# Motivational Quotes API

The Motivational Quotes API provides motivational quotes categorized by genre. You can fetch quotes based on genre and specify the number of quotes you want to retrieve.

## Base URL

http://localhost:3000 


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
[  {    "quote": "The best way to get started is to quit talking and begin doing.",    "author": "Walt Disney"  },  {    "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",    "author": "Winston Churchill"  }]
```

#### Fetch 1 quote from the happiness genre

```
GET /quotes/happiness?limit=1
```

#### Example Response

```
[
  {
    "quote": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama"
  }
]
```

#### Response Codes

- 200 OK: Quotes were successfully retrieved.
- 404 Not Found: No quotes found for the specified genre.
- 500 Internal Server Error: An error occurred on the server.

#### Data Structure

Each quote consists of the following fields:

- quote: The text of the quote.
- author: The author of the quote.

#### Using JavaScript fetch API 

```
fetch('http://localhost:3000/quotes/motivation?limit=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```