# Medicine API for India

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

2. Use the enpoints to get your desired service.

3. Endpoint 1 - /searchByName 
To get the data of the medicine with the following name

GET - http://localhost:80/searchByName?name=(Enter Medicine Name)

Query Parameter => name

eg - name = Zaling Plus Tablet CR

```bash

{
  "result": [
    {
      "id": 249154,
      "name": "Zaling Plus Tablet CR",
      "price": 165,
      "Is_discontinued": "FALSE",
      "manufacturer_name": "Mitis Biomedics Ltd",
      "type": "allopathy",
      "pack_size_label": "strip of 10 tablet cr",
      "short_composition1": "Paroxetine (12.5mg) ",
      "short_composition2": " Clonazepam (0.5mg)"
    }
  ]
}

```

4. Endpoint 2 - /searchByManufacturer 
To get the data of the medicine with the following manufacturer's name

GET - http://localhost:80/searchByManufacturer?manufacturer=(Enter Manufacturer Name)

Query Parameter => manufacturer

eg - manufacturer = Mitis Biomedics Ltd

```bash

{
  "result": [
    {
      "id": 249154,
      "name": "Zaling Plus Tablet CR",
      "price": 165,
      "Is_discontinued": "FALSE",
      "manufacturer_name": "Mitis Biomedics Ltd",
      "type": "allopathy",
      "pack_size_label": "strip of 10 tablet cr",
      "short_composition1": "Paroxetine (12.5mg) ",
      "short_composition2": " Clonazepam (0.5mg)"
    }
  ]
}

```

5. Endpoint 3 - /AllDiscontinued
To get the data of the medicines which are discontinued

GET - http://localhost:80/AllDiscontinued

6. Endpoint 4 - /searchByPrice
To get the data of all the medicines with the following price

GET - http://localhost:80/searchByPrice?price=(Enter the price)

Query Parameter => price

eg - price = 90

7. Endpoint 5 - /searchByPriceUnder
To get the data of all the medicines under the following price

GET - http://localhost:80/searchByPriceUnder?price=(Enter the price)

Query Parameter => price

eg - price = 90

8. Endpoint 6 - /searchByPriceAbove
To get the data of all the medicines above the following price

GET - http://localhost:80/searchByPriceAbove?price=(Enter the price)

Query Parameter => price

eg - price = 90

