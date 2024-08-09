document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchApiButton').addEventListener('click', fetchRandomApi);
});

async function fetchRandomApi() {
    const apiKey = 'YOUR_RAPIDAPI_KEY';
    const apiHost = 'example-apis.p.rapidapi.com';  // Replace with actual API host
    const endpoint = `https://${apiHost}/apis/random`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        if (data.api) {
            displayApi(data.api);
        } else {
            displayError('No API found.');
        }
    } catch (error) {
        console.error('Error fetching API:', error);
        displayError('Failed to fetch API details.');
    }
}

function displayApi(api) {
    const apiDiv = document.getElementById('api');
    apiDiv.innerHTML = `
        <h3>${api.name}</h3>
        <p><strong>Category:</strong> ${api.category}</p>
        <p><strong>Description:</strong> ${api.description}</p>
        <a href="${api.api_url}" target="_blank">Explore API</a>
    `;
}

function displayError(message) {
    const apiDiv = document.getElementById('api');
