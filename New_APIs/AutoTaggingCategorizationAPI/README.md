# Auto Tag or Topic Category Detection from Text API

## Method of installation

Install the `express` library using the following command:

```sh

npm i express

```

## How to use

1. Run the following command:

```sh

node index.js

```

OR

```sh

nodemon index.js

```

2. Endpoint - /getTags

POST - http://localhost:3000/getTags

Databody:

```bash

{
  "text":"I love technology, camping and swimming"
}

```

Response:

```bash

{
  "result": [
    "technology",
    "sports",
    "science",
    "travel"
  ]
}

```

## Usage

Automatically add tags to text and will allow mapping text with paricular tags or category.

Contributed By - Satwik Mohan