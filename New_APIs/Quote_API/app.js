import express from 'express'; // Import the Express framework
import fs from 'fs'; // Import the File System module to read files
import path from 'path'; // Import the Path module to work with file paths
import { fileURLToPath } from 'url'; // Import fileURLToPath from the url module
import cors from "cors"; // Import the CORS middleware to enable Cross-Origin Resource Sharing
import 'dotenv/config' // Import the dotenv module to load environment variables

// These lines are used to get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse incoming JSON requests

// Define a simple route to check if the server is running
app.get("/", (req, res) => {
    res.send("Hello");
});

// Function to get quotes based on genre and limit
const getQuotes = (genre, limit) => {
  const quotesPath = path.join(__dirname, 'quotes.json'); // Path to the quotes.json file
  const quotesData = JSON.parse(fs.readFileSync(quotesPath, 'utf8')); // Read and parse the quotes.json file
  const selectedQuotes = quotesData[genre] || []; // Get quotes for the given genre, or an empty array if not found
  return selectedQuotes.slice(0, limit); // Return the requested number of quotes
};

// Define a route to get quotes by genre
app.get('/quotes/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase(); // Get the genre from the URL parameter and convert to lowercase
  const limit = parseInt(req.query.limit) || 0; // Get the limit from the query parameter, default to 0 if not provided

  const quotes = getQuotes(genre, limit); // Get the quotes for the given genre and limit
  if (quotes.length === 0) { // If no quotes are found, send a 404 response
    res.status(404).json({ message: 'No quotes found for this genre' });
  } else { // Otherwise, send the quotes as a JSON response
    res.json(quotes);
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
