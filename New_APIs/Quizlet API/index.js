document.addEventListener('DOMContentLoaded', function () {
    fetchQuizletStudySets();

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

async function fetchQuizletStudySets() {
    const accessToken = 'YOUR_QUIZLET_ACCESS_TOKEN';
    const endpoint = 'https://api.quizlet.com/2.0/sets';

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const studySets = document.getElementById('studySets');
        data sets.forEach(set => {
            const setItem = document.createElement('div');
            setItem.className = 'setItem';
            setItem.innerHTML = `
                <h3>${set.title}</h3>
                <p>${set.term_count} terms</p>
                <p>${set.description || 'No description available'}</p>
            `;
            studySets.appendChild(setItem);
        });
    })
    .catch(error => console.error('Error fetching study sets:', error));
}
