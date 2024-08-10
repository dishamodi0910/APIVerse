document.getElementById('getTimeZoneButton').addEventListener('click', getTimeZone);
document.getElementById('convertTimeButton').addEventListener('click', convertTime);

const apiKey = 'YOUR_API_KEY';  // Replace with your TimeZoneDB API key
const apiUrl = 'http://api.timezonedb.com/v2.1/';

async function getTimeZone() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}get-time-zone?key=${apiKey}&format=json&by=zone&zone=${location}`);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch time zone data.');
    }
}

async function convertTime() {
    const fromTimeZone = document.getElementById('fromTimeZone').value;
    const toTimeZone = document.getElementById('toTimeZone').value;
    const timeToConvert = document.getElementById('timeToConvert').value;

    if (!fromTimeZone || !toTimeZone || !timeToConvert) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}convert-time-zone?key=${apiKey}&format=json&from=${fromTimeZone}&to=${toTimeZone}&time=${timeToConvert}`);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to convert time.');
    }
}

function displayResults(data) {
    const results = document.getElementById('results');
    results.textContent = JSON.stringify(data, null, 2);
}
