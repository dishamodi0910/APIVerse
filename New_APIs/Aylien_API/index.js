const apiKey = 'YOUR_API_KEY'; // Replace with your AYLIEN API key
const appId = 'YOUR_APP_ID';   // Replace with your AYLIEN App ID
const endpoint = 'https://api.aylien.com/api/v1/sentiment';

document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    if (text) {
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AYLIEN-TextAPI-Application-Key': apiKey,
                'X-AYLIEN-TextAPI-Application-ID': appId
            },
            body: JSON.stringify({ text: text })
        })
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';
            if (data.polarity) {
                resultsContainer.innerHTML = `
                    <h3>Sentiment Analysis:</h3>
                    <p><strong>Polarity:</strong> ${data.polarity}</p>
                    <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
                `;
            } else {
                resultsContainer.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching text analysis results:', error);
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '<p>An error occurred while fetching text analysis results.</p>';
        });
    }
});
