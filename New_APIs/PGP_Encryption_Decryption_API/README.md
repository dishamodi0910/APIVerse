# Encryption and Decryption API using Pretty Good Privacy (PGP) algorithm

## Installation

To use this program, you need to have Node.js installed. Then, install the required `express` and `openpgp` libraries by running:

```sh
npm i express
```

```sh
npm i openpgp
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
2. Then use the /generateKey endpoint to generate the    encryption and decryption key pair.

POST - http://localhost:80/generateKey

The Data body :

{
    "name":"Username",
    "email":"Useremail",
    "password":"A strong password of your choice"
}

3. After creating the key pairs you can use the encryption and decryption functionalities.

4. To use the encryption dervice use the /encrypt endpoint.

POST - http://localhost:80/encrypt

The Data body :

{
    "text":"Plain text to be encrypted",
    "encryptKey":"Generated Encryption Key"
}

5. To use the encryption service use the /encrypt endpoint.

POST - http://localhost:80/decrypt

The Data body :

{
    "text":"Encrypted plain text to be decrypted",
    "decryptKey":"Generated Decryption Key"
}

## Usage

The API is used in the encryption and decryption of emails.

## Contributed By - Satwik Mohan



