document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchWeatherButton').addEventListener('click', fetchWeather);
});

async function fetchWeather() {
    const location = document.getElementById('location').value;
    
    // Sample coordinates for New York City; you may use a geocoding service to convert the location to coordinates
    const coordinates = {
        "New York": "40.7128,-74.0060",
        // Add more locations as needed
    };

    const coords = coordinates[location] || "40.7128,-74.0060"; // Default to New York if location is not recognized
    const apiKey = 'YOUR_CLIMACELL_API_KEY';  // Replace with your actual Climacell API key
    const endpoint = `https://api.tomorrow.io/v4/timelines?location=${coords}&fields=temperature,precipitation&units=imperial&apikey=${apiKey}`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        if (data.data && data.data.timelines && data.data.timelines.length > 0) {
            const weatherData = data.data.timelines[0].intervals[0].values;
            displayWeather(weatherData);
        } else {
            displayError('No weather data found.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('Failed to fetch weather data.');
    }
}

function displayWeather(weather) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h3>Weather Information</h3>
        <p><strong>Temperature:</strong> ${weather.temperature}°F</p>
        <p><strong>Precipitation:</strong> ${weather.precipitation} mm</p>
    `;
}

function displayError(message) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `<p>${message}</p>`;
}
