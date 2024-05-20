# GeoAPI

GeoAPI is a simple RESTful API that allows you to convert addresses to geographic coordinates (latitude and longitude) and vice versa. This API is built using Node.js and Express.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Example Requests](#example-requests)
- [Contributing](#contributing)

## Overview

GeoAPI provides an easy way to work with geographic data. You can use it to:
- Convert a physical address into geographic coordinates (latitude and longitude).
- Convert geographic coordinates into a human-readable address.

## Features

- Convert address to latitude and longitude.
- Convert latitude and longitude to an address.
- Easy to use RESTful API.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Suyash878/GeoAPI.git
   cd geoapi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   The server will start on port 3000 by default. You can access it at `http://localhost:3000`.

## Usage
```bash
curl -X GET "http://your-deployed-url.com/reverse-geocode?lat=37.4224764&lon=-122.0842499"

curl -X GET "http://your-deployed-url.com/geocode?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
```
## Endpoints

**Endpoint:** `/geocode`

**Method:** `GET`

**Description:** Converts an address to latitude and longitude coordinates.

**Query Parameters:**
- `address` (required): The address you want to geocode.

**Endpoint:** `/reverse-geocode`

**Method:** `GET`

**Description:** Converts latitude and longitude coordinates to a human-readable address.

**Query Parameters:**
- `lat` (required): The latitude coordinate.
- `lon` (required): The longitude coordinate.

## Example Requests

GET http://your-deployed-url.com/geocode?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA.

```json
{
    "latitude": "37.4224764",
    "longitude": "-122.0842499"
}
```
GET http://your-deployed-url.com/reverse-geocode?lat=37.4224764&lon=-122.0842499
```json
{
    "address": "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA"
}
```
## Contributing

Contributions are welcome! Please follow these steps if you have any improvements or new features to suggest:

### Step 1: Fork the Repository

1. Navigate to the [GeoAPI repository](https://github.com/dishamodi0910/APIVerse.git) on GitHub.
2. Click the "Fork" button in the top right corner to create a copy of the repository on your own GitHub account.

### Step 2: Clone Your Fork

1. Open your terminal or command prompt.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/geoapi.git
   ```

### Step 3: Commit Your Changes

```bash
git add .
git commit -m "Description of your changes"
```

### Step 4: Push Your Changes

```bash
git push origin master
```

### Step 5: Open a Pull Request

Navigate to the [GeoAPI repository](https://github.com/dishamodi0910/APIVerse.git) on GitHub and click on the "New pull request" button to submit your changes for review.

Thank you for contributing to GeoAPI!

