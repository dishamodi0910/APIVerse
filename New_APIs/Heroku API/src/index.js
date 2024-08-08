const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const HEROKU_API_KEY = 'your_heroku_api_key';

const headers = {
    'Authorization': `Bearer ${HEROKU_API_KEY}`,
    'Accept': 'application/vnd.heroku+json; version=3',
    'Content-Type': 'application/json'
};

app.post('/deploy', async (req, res) => {
    const { app_name, source_url } = req.body;
    const url = `https://api.heroku.com/apps/${app_name}/builds`;
    const payload = { source_blob: { url: source_url } };

    try {
        const response = await axios.post(url, payload, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.post('/scale', async (req, res) => {
    const { app_name, dyno_type, quantity } = req.body;
    const url = `https://api.heroku.com/apps/${app_name}/formation`;
    const payload = { updates: [{ type: dyno_type, quantity }] };

    try {
        const response = await axios.patch(url, payload, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.get('/logs', async (req, res) => {
    const { app_name } = req.query;
    const url = `https://api.heroku.com/apps/${app_name}/log-sessions`;
    const payload = { dyno: 'web', lines: 100, source: 'app', tail: true };

    try {
        const response = await axios.post(url, payload, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
