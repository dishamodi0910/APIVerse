# Streamlabs API Integration

This project demonstrates how to interact with the Streamlabs API using Node.js. It allows you to authenticate with Streamlabs, fetch user data, and manage donations.

## Prerequisites

- Node.js
- npm or yarn
- Streamlabs account
- Streamlabs API client ID and client secret

## Getting Started

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/streamlabs-api-integration.git
    cd streamlabs-api-integration
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your Streamlabs client ID, client secret, and redirect URI:

    ```env
    CLIENT_ID=your_client_id
    CLIENT_SECRET=your_client_secret
    REDIRECT_URI=http://localhost:3000/callback
    ```

### Running the Application

1. Start the application:

    ```sh
    npm start
    ```

    or

    ```sh
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`. You will be redirected to the Streamlabs authentication page.

3. After successful authentication, you will be redirected back to the application with your access token.

## Usage

### Fetching User Data

To fetch user data, make a GET request to the `/user` endpoint:

```sh
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" http://localhost:3000/user
