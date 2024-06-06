# Braille API

## Installation

To use this program, you need to have Node.js installed. Then, install the required `express` library by running:

```sh
npm i express
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

2. Endpoint 1 - /toBraille

To convert English text to Braille

POST - http://localhost:3000/toBraille

Data Body =>

```bash
{
  "text":"Enter English Text"
}
```

Example:

```bash
{
  "text":"ABCD 123A"
}

{
  "result": "⠁⠃⠉⠙ ⠼⠁⠃⠉⠰⠁"
}

```

3. Endpoint 2 - /toEnglish

To convert Braille to English text

POST - http://localhost:3000/toEnglish

Data Body =>

```bash
{
  "text":"Enter Braille"
}
```

Example:

```bash
{
  "text":"⠁⠃⠉⠙ ⠼⠁⠃⠉⠰⠁"
}

{
  "result": "ABCD 123A"
}

```

## Usage

1. Convert English to Braille
2. Convert Braille to English

Contributed by - Satwik Mohan



