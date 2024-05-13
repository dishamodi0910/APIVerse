const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Sample data for demonstration
let galaxies = [
    { id: 1, name: 'Milky Way', type: 'Spiral', diameter: '100,000 light-years', constellation: 'Sagittarius' },
    { id: 2, name: 'Andromeda', type: 'Spiral', diameter: '220,000 light-years', constellation: 'Andromeda' },
    { id: 3, name: 'Messier 87', type: 'Elliptical', diameter: '120,000 light-years', constellation: 'Virgo' }
];

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Get all galaxies
app.get('/galaxies', (req, res) => {
    res.json(galaxies);
});

// Get a specific galaxy by ID
app.get('/galaxies/:id', (req, res) => {
    const galaxyId = parseInt(req.params.id);
    const galaxy = galaxies.find(galaxy => galaxy.id === galaxyId);
    if (!galaxy) {
        return res.status(404).json({ message: 'Galaxy not found' });
    }
    res.json(galaxy);
});

// Create a new galaxy
app.post('/galaxies', (req, res) => {
    const { name, type, diameter, constellation } = req.body;
    const id = galaxies.length + 1;
    const newGalaxy = { id, name, type, diameter, constellation };
    galaxies.push(newGalaxy);
    res.status(201).json(newGalaxy);
});

// Update a galaxy
app.put('/galaxies/:id', (req, res) => {
    const galaxyId = parseInt(req.params.id);
    const { name, type, diameter, constellation } = req.body;
    const galaxyIndex = galaxies.findIndex(galaxy => galaxy.id === galaxyId);
    if (galaxyIndex === -1) {
        return res.status(404).json({ message: 'Galaxy not found' });
    }
    const updatedGalaxy = { id: galaxyId, name, type, diameter, constellation };
    galaxies[galaxyIndex] = updatedGalaxy;
    res.json(updatedGalaxy);
});

// Delete a galaxy
app.delete('/galaxies/:id', (req, res) => {
    const galaxyId = parseInt(req.params.id);
    galaxies = galaxies.filter(galaxy => galaxy.id !== galaxyId);
    res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
