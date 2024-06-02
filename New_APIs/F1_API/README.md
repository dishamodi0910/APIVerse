# F1 API

This project is a RESTful API for accessing information about Formula 1 (F1) drivers, teams, and races. The API is built using Flask and Flask-RESTful.

## Features

- Retrieve information about F1 drivers
- Retrieve information about F1 teams
- Retrieve information about F1 races

## Prerequisites

- Python 3.6+
- Flask
- Flask-RESTful

## Installation

1. Clone the repository:
    ```bash
    git clone  https://github.com/dishamodi0910/APIVerse.git
    cd APIVerse
    ```

2. Create and activate a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. Run the application:
    ```bash
    python app.py
    ```

2. Access the API endpoints in your browser or using a tool like Postman:
    - Get all drivers: `GET /drivers`
    - Get a specific driver: `GET /drivers/<driver_id>`
    - Get all teams: `GET /teams`
    - Get a specific team: `GET /teams/<team_id>`
    - Get all races: `GET /races`
    - Get a specific race: `GET /races/<race_id>`

## Project Structure

- **app.py**: The main application file where the Flask app and API are initialized.
- **resources/**: Contains the resource classes for handling API requests.
  - **driver.py**: Resource class for driver-related endpoints.
  - **team.py**: Resource class for team-related endpoints.
  - **race.py**: Resource class for race-related endpoints.
- **models/**: Contains the model classes for accessing data.
  - **driver.py**: Model class for driver data.
  - **team.py**: Model class for team data.
  - **race.py**: Model class for race data.
- **data.py**: Contains sample data for drivers, teams, and races.

## Example Data

Sample data is included in the `data.py` file. This can be replaced with a database or any other data source.


