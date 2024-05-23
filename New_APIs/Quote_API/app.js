import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const quotesPath = path.join(__dirname, 'quotes.json');
let quotesData = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));

// Helper function to save quotes to the file
const saveQuotes = () => {
  fs.writeFileSync(quotesPath, JSON.stringify(quotesData, null, 2), 'utf8');
};

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Hello");
});

// Get quotes by genre
app.get('/quotes/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const limit = parseInt(req.query.limit) || quotesData[genre].length;

  const quotes = quotesData[genre]?.slice(0, limit) || [];
  if (quotes.length === 0) {
    res.status(404).json({ message: 'No quotes found for this genre' });
  } else {
    res.json(quotes);
  }
});

// Search quotes
app.get('/quotes/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = [];

  for (const genre in quotesData) {
    quotesData[genre].forEach(quote => {
      if (quote.quote.toLowerCase().includes(query) || quote.author.toLowerCase().includes(query)) {
        results.push({ ...quote, genre });
      }
    });
  }

  if (results.length === 0) {
    res.status(404).json({ message: 'No quotes found for this search query' });
  } else {
    res.json(results);
  }
});

// Submit a new quote
app.post('/quotes', (req, res) => {
  const { genre, quote, author } = req.body;

  if (!genre || !quote || !author) {
    return res.status(400).json({ message: 'Genre, quote, and author are required' });
  }

  if (!quotesData[genre]) {
    quotesData[genre] = [];
  }

  const newQuote = { quote, author };
  quotesData[genre].push(newQuote);
  saveQuotes();
  
  res.status(201).json(newQuote);
});

// Rate a quote
app.put('/quotes/:genre/:index/rate', (req, res) => {
  const { genre, index } = req.params;
  const { rating } = req.body;

  if (!quotesData[genre] || !quotesData[genre][index]) {
    return res.status(404).json({ message: 'Quote not found' });
  }

  quotesData[genre][index].rating = rating;
  saveQuotes();
  
  res.json(quotesData[genre][index]);
});

// Get a random quote
app.get('/quotes/random', (req, res) => {
  const allQuotes = Object.values(quotesData).flat();
  const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  res.json(randomQuote);
});

// Mock user authentication
const users = {
  "user1": { password: "password1" },
  "user2": { password: "password2" }
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username].password === password) {
    res.json({ message: 'Login successful', username });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
