document.addEventListener('DOMContentLoaded', function () {
    fetchRandomJoke();

    document.getElementById('fetchJokeButton').addEventListener('click', fetchRandomJoke);

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

async function fetchRandomJoke() {
    const endpoint = 'https://official-joke-api.appspot.com/random_joke';

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const joke = document.getElementById('joke');
            joke.innerHTML = `
                <p>${data.setup}</p>
                <p><strong>${data.punchline}</strong></p>
            `;
        })
        .catch(error => console.error('Error fetching joke:', error));
}
