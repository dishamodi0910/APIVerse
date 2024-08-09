const apiKey = 'YOUR_BING_SEARCH_API_KEY'; // Replace with your Bing Search API key
const endpoint = 'https://api.bing.microsoft.com/v7.0/search';

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (query) {
        fetch(`${endpoint}?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';
            if (data.webPages && data.webPages.value.length > 0) {
                const results = data.webPages.value.map(page => `
                    <div class="result-item">
                        <h2><a href="${page.url}" target="_blank">${page.name}</a></h2>
                        <p>${page.snippet}</p>
                    </div>
                `).join('');
                resultsContainer.innerHTML = `<h3>Results:</h3>${results}`;
            } else {
                resultsContainer.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '<p>An error occurred while fetching search results.</p>';
        });
    }
});
