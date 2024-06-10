# Lung Cancer Survival Months Predictor API

## Installation 

Install the required `express` library using the following command:

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

2. EndPoint - /predict

To predict survial months for lung cancer

POST - http://localhost:3000/predict

DataBody:

```bash

{
    "age": 68,
    "gender": "Male",
    "tumorSizeMM": 81.67867748,
    "stage": "Stage III",
    "isDiabities": "Yes",
    "isHyperTension": "Yes",
    "isHeartDisease": "Yes",
    "performanceStatus": 3,
    "bloodPressureSystolic": 161,
    "bloodPressureDiastolic": 99,
    "glucoseLevel": 113.9192425,
    "smockingPacksPerYear": 17.00695611
}

```

Response:

```bash

{
  "survivalMonths": 69.62543173938643
}

```

## Usage

To predict survival months and the API can be used in any application regarding health and medicine.

Contributed by - Satwik Mohan