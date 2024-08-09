const express = require('express');
const path = require('path');
const { types } = require('util');
const fs = require('fs');

const app = express();
const port = 3000;

// Read the pokedata.json file
const pokemonData = JSON.parse(fs.readFileSync('pokedata.json', 'utf8'));

app.use(express.static('public'));

// Endpoint to fetch Pokémon data by name
app.get('/api/pokemon/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const pokemon = pokemonData.find(p => p.name.toLowerCase() === name);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ error: 'Pokémon not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
