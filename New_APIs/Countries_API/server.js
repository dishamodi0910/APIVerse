const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const countries = require('./countries');

// Middleware
app.use(express.json());

// Helper function to convert string to lowercase
const toLowerCase = str => str.toLowerCase();

// Get all countries
app.get('/api/countries', (req, res) => {
  res.json(countries);
});

// Get a country by name
app.get('/api/countries/:name', (req, res) => {
  const countryName = toLowerCase(req.params.name);
  const country = countries.find(c => toLowerCase(c.country) === countryName);
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: 'Country not found' });
  }
});

// Get countries by continent
app.get('/api/countries/continent/:continent', (req, res) => {
  const continent = toLowerCase(req.params.continent);
  const filteredCountries = countries.filter(c => toLowerCase(c.continent) === continent);
  res.json(filteredCountries);
});

// Get neighbors of a country
app.get('/api/countries/:name/neighbors', (req, res) => {
  const countryName = toLowerCase(req.params.name);
  const country = countries.find(c => toLowerCase(c.country) === countryName);
  if (country) {
    res.json(country.neighbors);
  } else {
    res.status(404).json({ message: 'Country not found' });
  }
});

// Get country by capital
app.get('/api/countries/capital/:capital', (req, res) => {
  const capital = toLowerCase(req.params.capital);
  const country = countries.find(c => toLowerCase(c.capital) === capital);
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: 'Country not found' });
  }
});

// Get countries by language
app.get('/api/countries/language/:language', (req, res) => {
  const language = toLowerCase(req.params.language);
  const filteredCountries = countries.filter(c => toLowerCase(c.language) === language);
  res.json(filteredCountries);
});

// Get countries by currency
app.get('/api/countries/currency/:currency', (req, res) => {
  const currency = toLowerCase(req.params.currency);
  const filteredCountries = countries.filter(c => toLowerCase(c.currency) === currency);
  res.json(filteredCountries);
});

// Get countries by latitude
app.get('/api/countries/latitude/:latitude', (req, res) => {
  const latitude = parseFloat(req.params.latitude);
  const filteredCountries = countries.filter(c => c.latitude === latitude);
  res.json(filteredCountries);
});

// Get countries by longitude
app.get('/api/countries/longitude/:longitude', (req, res) => {
  const longitude = parseFloat(req.params.longitude);
  const filteredCountries = countries.filter(c => c.longitude === longitude);
  res.json(filteredCountries);
});

// Get countries by continent and language
app.get('/api/countries/continent/:continent/language/:language', (req, res) => {
  const continent = toLowerCase(req.params.continent);
  const language = toLowerCase(req.params.language);
  const filteredCountries = countries.filter(c => toLowerCase(c.continent) === continent && toLowerCase(c.language) === language);
  res.json(filteredCountries);
});

// Add a new country
app.post('/api/countries', (req, res) => {
  const newCountry = req.body;

  if (!newCountry.country || !newCountry.capital || !newCountry.continent) {
    return res.status(400).json({ message: 'Country, capital, and continent are required fields.' });
  }
  countries.push(newCountry);
  fs.writeFile('./countries.js', `module.exports = ${JSON.stringify(countries, null, 2)};`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update countries file.' });
    }

    res.status(201).json(newCountry);
  });
});

// Update a country
app.put('/api/countries/:name', (req, res) => {
  const countryName = toLowerCase(req.params.name);
  const countryIndex = countries.findIndex(c => toLowerCase(c.country) === countryName);

  if (countryIndex === -1) {
    return res.status(404).json({ message: 'Country not found' });
  }
  countries[countryIndex] = { ...countries[countryIndex], ...req.body };
  fs.writeFile('./countries.js', `module.exports = ${JSON.stringify(countries, null, 2)};`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update countries file.' });
    }

    res.json(countries[countryIndex]);
  });
});

// Delete a country
app.delete('/api/countries/:name', (req, res) => {
  const countryName = toLowerCase(req.params.name);
  const countryIndex = countries.findIndex(c => toLowerCase(c.country) === countryName);

  if (countryIndex === -1) {
    return res.status(404).json({ message: 'Country not found' });
  }
  const deletedCountry = countries.splice(countryIndex, 1);
  fs.writeFile('./countries.js', `module.exports = ${JSON.stringify(countries, null, 2)};`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update countries file.' });
    }

    res.json(deletedCountry);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
