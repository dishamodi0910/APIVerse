# Text Sentiment API

## Installation

To use the API you need to install the `express` library using the following command:

```sh

npm i express

```

## Method to use

1. Run the index.js file

```sh

node index.js

```
OR
```sh

nodemon index.js

```

2. Wait for the model to get trained. Once the model gets trained the server will start running.

3. Endpoint - /predict

POST - http://localhost:3000/predict

Databody - 

```bash

{
  "text":"I love your smile Khyati"
}

```

Response - 

```bash

{
  "sentiment": "joy"
}

```

## Usage 

To analyze the sentiment of a person from text.

Contributed by - Satwik Mohan