document.getElementById('get-coordinates').addEventListener('click', async function () {
    const address = document.getElementById('box1').value;
    try {
        const response = await fetch(`http://localhost:3000/geocode?address=${encodeURIComponent(address)}`);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('result').innerHTML = `Latitude: ${data.latitude}, Longitude: ${data.longitude}`;
        } else {
            document.getElementById('result').innerHTML = 'Address not found';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching the coordinates';
        console.error('Error:', error);
    }
});

document.getElementById('get-address').addEventListener('click', async function () {
    const coordinates = document.getElementById('box2').value.split(',');
    const lat = coordinates[0].trim();
    const lon = coordinates[1].trim();

    try {
        const response = await fetch(`http://localhost:3000/reverse-geocode?lat=${lat}&lon=${lon}`);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('result').innerHTML = `Address: ${data.address}`;
        } else {
            document.getElementById('result').innerHTML = 'Coordinates not found';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching the address';
        console.error('Error:', error);
    }
});
