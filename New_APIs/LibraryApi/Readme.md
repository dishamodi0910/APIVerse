# Description
It is a library API which can be use to manage library data and library management.

# Installation
First of all clone the repository and navigate to this directory. Then run the following commands
```
npm i
cd src
node index.js
```

# End Points
### GET /api/v1/books
Returns the list of all books present in the library
### POST /api/v1/books
Add books to the library and it takes body parameters
### GET /api/v1/borrowers
Returns the list of all borrowers and their details
### POST /api/v1/borrowers
Add a borrower with details
### GET /api/v1/return/:id
Deletes a borrowers record when he/she had returned it
### GET /api/v1/search
Searches for the given book in the library

This can be use in real time also if we use Mongo DB