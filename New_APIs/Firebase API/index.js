document.addEventListener('DOMContentLoaded', function () {
    fetchData();

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

async function fetchData() {
    const response = await fetch('https://your-firebase-project.firebaseio.com/data.json');
    const data = await response.json();
    const dataList = document.getElementById('dataList');
    for (const key in data) {
        const dataItem = document.createElement('div');
        dataItem.className = 'dataItem';
        dataItem.innerHTML = `<p>${data[key]}</p>`;
        dataList.appendChild(dataItem);
    }
}
