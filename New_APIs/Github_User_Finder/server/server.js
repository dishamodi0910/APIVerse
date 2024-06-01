const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com/users';

// Endpoint to retrieve details of a GitHub user by username
app.get('/users/:username', async (req, res) => {
    const { username } = req.params;
    try {
        // Make a GET request to GitHub API to fetch user details
        const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}`);
        // Respond with the user details
        res.json(response.data);
    } catch (error) {
        // Handle errors (e.g., user not found)
        res.status(404).json({ message: 'User not found' });
    }
});

// Endpoint to retrieve repositories of a GitHub user by username
app.get('/users/:username/repos', async (req, res) => {
    const { username } = req.params;
    try {
        // Make a GET request to GitHub API to fetch user repositories
        const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}/repos`);
        // Respond with the list of repositories
        res.json(response.data);
    } catch (error) {
        // Handle errors (e.g., user not found or no repositories available)
        res.status(404).json({ message: 'User not found or no repositories available' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
