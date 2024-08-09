function fetchCryptoData() {
    const cryptoName = document.getElementById('cryptoInput').value.toLowerCase();
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data[cryptoName]) {
                document.getElementById('cryptoData').innerHTML = `
                    <p><strong>${cryptoName.toUpperCase()}:</strong> $${data[cryptoName].usd}</p>
                `;
            } else {
                document.getElementById('cryptoData').innerHTML = `<p>Cryptocurrency not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('cryptoData').innerHTML = `<p>There was an error fetching the data.</p>`;
            console.error('Error fetching the cryptocurrency data:', error);
        });
}
