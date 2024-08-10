document.getElementById('fetch-data').addEventListener('click', () => {
    const stockSymbol = document.getElementById('stock-symbol').value.toUpperCase();
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const apiUrl = `https://api.example.com/stock/${stockSymbol}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const stockDataDiv = document.getElementById('stock-data');
            if (data.error) {
                stockDataDiv.innerHTML = `<p>${data.error}</p>`;
            } else {
                stockDataDiv.innerHTML = `
                    <p><strong>Symbol:</strong> ${data.symbol}</p>
                    <p><strong>Price:</strong> $${data.price}</p>
                    <p><strong>Change:</strong> ${data.change}%</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
});
