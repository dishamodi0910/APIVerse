document.addEventListener('DOMContentLoaded', function () {
    fetchTwitchStreams();

    document.getElementById('deployButton').addEventListener('click', async () => {
        const appName = document.getElementById('deployAppName').value;
        const sourceUrl = document.getElementById('deploySourceUrl').value;
        const response = await fetch('/deploy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ app_name: appName, source_url: sourceUrl })
        });
        const result = await response.json();
        console.log(result);
    });

    document.getElementById('scaleButton').addEventListener('click', async () => {
        const appName = document.getElementById('scaleAppName').value;
        const dynoType = document.getElementById('scaleDynoType').value;
        const quantity = document.getElementById('scaleQuantity').value;
        const response = await fetch('/scale', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ app_name: appName, dyno_type: dynoType, quantity: parseInt(quantity) })
        });
        const result = await response.json();
        console.log(result);
    });

    document.getElementById('logsButton').addEventListener('click', async () => {
        const appName = document.getElementById('logsAppName').value;
        const response = await fetch(`/logs?app_name=${appName}`);
        const result = await response.json();
        const results = document.getElementById('results');
        results.innerHTML = JSON.stringify(result, null, 2);
    });
});

async function fetchTitchStreams() {
    const clientId = 'YOUR_TWITCH_CLIENT_ID';
    const endpoint = 'https://api.twitch.tv/helix/streams';

    fetch(endpoint, {
        headers: {
            'Client-ID': clientId,
            'Authorization': 'Bearer YOUR_TWITCH_ACCESS_TOKEN'
        }
    })
    .then(response => response.json())
    .then(data => {
        const streamList = document.getElementById('streamList');
        data.data.forEach(stream => {
            const streamElement = document.createElement('div');
            streamElement.className = 'stream';
            streamElement.innerHTML = `
                <h3>${stream.user_name}</h3>
                <p>${stream.title}</p>
                <img src="${stream.thumbnail_url}" alt="${stream.user_name}">
            `;
            streamList.appendChild(streamElement);
        });
    })
    .catch(error => console.error('Error fetching streams:', error));
}
