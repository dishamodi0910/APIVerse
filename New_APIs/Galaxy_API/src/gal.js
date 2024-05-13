function searchGalaxy() {
    const galaxyName = document.getElementById('galaxyInput').value.trim();
    if (!galaxyName) {
        alert('Please enter a galaxy name.');
        return;
    }
    fetch(`http://localhost:3000/galaxies?name=${galaxyName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Galaxy not found');
            }
            return response.json();
        })
        .then(galaxies => {
            const foundGalaxy = galaxies.find(galaxy => galaxy.name.toLowerCase() === galaxyName.toLowerCase());
            if (!foundGalaxy) {
                throw new Error('Galaxy not found');
            }
            const galaxyInfo = `
                <h2>Galaxy Information</h2>
                <p><strong>Name:</strong> ${foundGalaxy.name}</p>
                <p><strong>Type:</strong> ${foundGalaxy.type}</p>
                <p><strong>Diameter:</strong> ${foundGalaxy.diameter}</p>
                <p><strong>Constellation:</strong> ${foundGalaxy.constellation}</p>
            `;
            document.getElementById('galaxyInfo').innerHTML = galaxyInfo;
        })
        .catch(error => {
            document.getElementById('galaxyInfo').innerHTML = `
                <p class="galaxy-not-found">${error.message}</p>
            `;
        });
}
