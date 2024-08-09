const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.static('public'));

const SPACEX_API_BASE_URL = 'https://api.spacexdata.com/v4';

app.get('/launches', async (req, res) => {
    try {
        const response = await fetch(`${SPACEX_API_BASE_URL}/launches/latest`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching launches:', error);
        res.status(500).json({ error: 'Failed to fetch launches' });
    }
});

app.get('/rockets', async (req, res) => {
    try {
        const response = await fetch(`${SPACEX_API_BASE_URL}/rockets`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching rockets:', error);
        res.status(500).json({ error: 'Failed to fetch rockets' });
    }
});

app.get('/missions', async (req, res) => {
    try {
        const response = await fetch(`${SPACEX_API_BASE_URL}/missions`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching missions:', error);
        res.status(500).json({ error: 'Failed to fetch missions' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
