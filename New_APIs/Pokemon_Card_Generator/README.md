# Pokémon API

This API provides information about Pokémon. You can fetch details of a specific Pokémon by its name.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the necessary dependencies by running the following command:

    ```bash
    npm install
    ```

### Running the Server

1. Make sure you have a file named `pokedata.json` in the project directory. This file should contain the Pokémon data in JSON format.
2. Start the server by running the following command:

    ```bash
    node app.js
    ```

3. The server will start running on `http://localhost:3000`.

## API Endpoints

### Fetch Pokémon Data by Name

**Description:**

This endpoint fetches data for a specific Pokémon by its name.

**Parameters:**

- `name` (required): The name of the Pokémon (case insensitive).

**Response:**

- **200 OK**: Returns the Pokémon data in JSON format.
- **404 Not Found**: Returns an error message if the Pokémon is not found.



**Example Response:**

```json
{
  "id": 25,
  "name": "Pikachu",
  "type": ["Electric"],
  "base_experience": 112,
  "height": 4,
  "weight": 60
}


**Endpoint:**

