const express = require('express');
const axios = require('axios'); // Import Axios

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define route to handle the client's request for a random activity
app.get('/randomActivity', async (req, res) => {
    try {
        const apiUrl = 'https://suyash878.github.io/JSON_boredAPI_Activities/Activities.json';
        const response = await axios.get(apiUrl); // Use Axios to make GET request

        if (!response.data) {
            throw new Error('Empty response from the API');
        }

        // Pick a random activity from the response data array
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomActivity = response.data[randomIndex].activity;

        res.json({activity: randomActivity});
    } catch (error) {
        console.error('Error fetching activity:', error);
        res.status(500).json({ error: 'Failed to fetch activity' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});