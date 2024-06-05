# ChatBot API

## Installation

To use this program, you need to have Node.js installed. Then, install the required `express`,`fs` and `natural` libraries by running:

```sh
npm i express fs natural
```

## Method to use the API

1. Run the index.mjs file using the following command:
```sh
    node index.mjs
```

OR

```sh
    nodemon index.mjs
```

2. Wait for a few seconds as the model get trained.

3. When the server starts running you can use the ChatBot service.

4. Endpoint - /chat

POST - http://localhost:3000/chat

Databody =>

```bash

{
  "message":"Enter a message or chat for the ChatBot to answer"
}

```

5. Example:

```bash
{
  "message":"What's going in life"
}

{
  "response": "Things have been interesting! How about you?"
}

```

6. By adding more tags, patterns and responses the ChatBot becomes more and more advance and will be able to answer more and more complex messages.

Contributed by - Satwik Mohan