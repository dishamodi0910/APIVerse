document.getElementById('calculateButton').addEventListener('click', calculateFootprint);

const apiKey = 'YOUR_CARBON_API_KEY'; // Replace with your Carbon Footprint API key

function calculateFootprint() {
    const activityType = document.getElementById('activityType').value;
    const amount = document.getElementById('activityAmount').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    let apiUrl = '';
    let params = {};

    switch (activityType) {
        case 'vehicle':
            apiUrl = 'https://api.carboninterface.com/v1/estimates';
            params = {
                type: "vehicle",
                distance_unit: "km",
                distance_value: amount,
                vehicle_model_id: "ID_OF_SPECIFIC_VEHICLE_MODEL" // Replace with actual model ID
            };
            break;
        case 'flight':
            apiUrl = 'https://api.carboninterface.com/v1/estimates';
            params = {
                type: "flight",
                legs: [
                    {
                        departure_airport: "SFO", // Replace with actual airport code
                        destination_airport: "LAX", // Replace with actual airport code
                        cabin_class: "economy"
                    }
                ],
                passengers: amount
            };
            break;
        case 'energy':
            apiUrl = 'https://api.carboninterface.com/v1/estimates';
            params = {
                type: "electricity",
                electricity_unit: "kwh",
                electricity_value: amount,
                country: "us" // Replace with actual country code
            };
            break;
        default:
            return;
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
        if (data.data && data.data.attributes && data.data.attributes.carbon_kg) {
            document.getElementById('carbonResult').textContent = `${data.data.attributes.carbon_kg} kg CO2`;
        } else {
            alert('Failed to calculate carbon footprint.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error calculating carbon footprint.');
    });
}
