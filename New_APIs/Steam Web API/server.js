const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const STEAM_API_KEY = 'YOUR_STEAM_API_KEY';

app.use(express.static('public'));

app.get('/getProfile', async (req, res) => {
    const steamId = req.query.steamId;
    const response = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId}`);
    const data = await response.json();
    res.json(data);
});

app.get('/getAchievements', async (req, res) => {
    const gameId = req.query.gameId;
    const steamId = req.query.steamId;
    const response = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameId}&key=${STEAM_API_KEY}&steamid=${steamId}`);
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
