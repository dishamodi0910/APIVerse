document.addEventListener('DOMContentLoaded', function () {
    fetchStreamlabsDonations();

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

async function fetchStreamlabsDonations() {
    const accessToken = 'YOUR_STREAMLABS_ACCESS_TOKEN';
    const endpoint = 'https://streamlabs.com/api/v1.0/donations';

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const donationList = document.getElementById('donationList');
        data.data.forEach(donation => {
            const donationElement = document.createElement('div');
            donationElement.className = 'donation';
            donationElement.innerHTML = `
                <h3>${donation.name}</h3>
                <p>Amount: ${donation.amount}</p>
                <p>Message: ${donation.message}</p>
            `;
            donationList.appendChild(donationElement);
        });
    })
    .catch(error => console.error('Error fetching donations:', error));
}
