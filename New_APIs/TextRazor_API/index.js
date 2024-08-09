const apiKey = 'YOUR_TEXTRAZOR_API_KEY'; // Replace with your TextRazor API key
const endpoint = 'https://api.textrazor.com/';

document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    if (text) {
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-textrazor-key': apiKey
            },
            body: new URLSearchParams({
                'text': text,
                'extractors': 'entities,topics'
            })
        })
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';
            if (data.response && data.response.entities) {
                const entities = data.response.entities.map(entity => `
                    <div class="result-item">
                        <h2>${entity.type}</h2>
                        <p>${entity.mention}</p>
                    </div>
                `).join('');
                resultsContainer.innerHTML = `<h3>Entities:</h3>${entities}`;
            } else {
                resultsContainer.innerHTML = '<p>No entities found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching text analysis results:', error);
        });
    }
});
