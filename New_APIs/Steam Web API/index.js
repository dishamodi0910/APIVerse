document.getElementById('getProfileButton').addEventListener('click', async () => {
    const steamId = document.getElementById('steamId').value;
    const response = await fetch(`/getProfile?steamId=${steamId}`);
    const result = await response.json();
    document.getElementById('results').textContent = JSON.stringify(result, null, 2);
});

document.getElementById('getAchievementsButton').addEventListener('click', async () => {
    const gameId = document.getElementById('gameId').value;
    const steamId = document.getElementById('steamId').value;
    const response = await fetch(`/getAchievements?gameId=${gameId}&steamId=${steamId}`);
    const result = await response.json();
    document.getElementById('results').textContent = JSON.stringify(result, null, 2);
});
