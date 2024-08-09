document.getElementById('fetchLaunches').addEventListener('click', async () => {
    await fetchData('/launches');
});

document.getElementById('fetchRockets').addEventListener('click', async () => {
    await fetchData('/rockets');
});

document.getElementById('fetchMissions').addEventListener('click', async () => {
    await fetchData('/missions');
});

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('dataDisplay').textContent = 'Failed to fetch data.';
    }
}

function displayData(data) {
    const displayDiv = document.getElementById('dataDisplay');
    displayDiv.innerHTML = '';

    if (Array.isArray(data)) {
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h3>${item.name || item.mission_name || item.rocket_name}</h3>
                <p>${item.details || item.description || item.mission_id}</p>
            `;
            displayDiv.appendChild(itemDiv);
        });
    } else {
        displayDiv.textContent = 'No data available.';
    }
}
