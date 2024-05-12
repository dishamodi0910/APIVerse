# Image Gallery

This is a simple web application for displaying images fetched from the Unsplash API. It allows users to search for images based on keywords and also fetch random images.

## Features

- **Search by Keyword**: Users can enter a keyword in the search input field and press the "Search" button to fetch images related to that keyword.
- **Random Image**: Users can click the "Get Me a Random Image" button to fetch a set of random images.
- **Image Display**: The fetched images are displayed in the gallery section of the web page.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: Unsplash API
- **External Libraries**: Axios (for making HTTP requests)

## Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone https://github.com/APIVerse
```
2. Navigate to the project directory:

```
/New_APIs/unsplashApi
```
3. Setup the environment variables: Look for the `.env.example` file in the project directory and create a new file named `.env`. Copy the contents of the `.env.example` file to the `.env` file and replace the placeholder values with your Unsplash API access key.
4. Install the dependencies:

```bash
npm install
```
5. Start the server:
```
node index.js
```
6. Open index.html in your browser to view the application.
7. Generate Random Images by clicking the "Get Me a Random Image" button or search for images by entering a keyword in the search input field and pressing the "Search" button.