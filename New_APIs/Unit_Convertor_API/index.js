const apiKey = 'YOUR_API_KEY'; // Replace with your Unit Converter API key
const endpoint = 'https://api.unitconvertapi.com/v1/convert';

document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    
    if (amount && fromUnit && toUnit) {
        fetch(`${endpoint}?from=${fromUnit}&to=${toUnit}&amount=${amount}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const resultContainer = document.getElementById('result');
            if (data.result) {
                resultContainer.innerHTML = `
                    <h3>Conversion Result:</h3>
                    <p>${amount} ${fromUnit} is equal to ${data.result} ${toUnit}</p>
                `;
            } else {
                resultContainer.innerHTML = '<p>Conversion failed. Please check your input and try again.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching conversion results:', error);
            const resultContainer = document.getElementById('result');
            resultContainer.innerHTML = '<p>An error occurred while fetching conversion results.</p>';
        });
    }
});
