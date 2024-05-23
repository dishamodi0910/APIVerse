import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello");
})

const getQuotes = (genre, limit) => {
  const quotesPath = path.join(__dirname, 'quotes.json');
  const quotesData = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));
  const selectedQuotes = quotesData[genre] || [];
  return selectedQuotes.slice(0, limit);
};

app.get('/quotes/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const limit = parseInt(req.query.limit) || 0;

  const quotes = getQuotes(genre, limit);
  if (quotes.length === 0) {
    res.status(404).json({ message: 'No quotes found for this genre' });
  } else {
    res.json(quotes);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
