// Function to fetch current matches
function fetchCurrentMatches() {
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=9df522d1-26ac-494c-9085-484911641a9f&offset=0')
      .then(response => response.json())
      .then(data => {
        const currentMatchesList = document.getElementById('currentMatchesList');
        currentMatchesList.innerHTML = ''; // Clear previous content
        data.data.forEach(match => {
          const matchCard = `
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${match.name}</h5>
                  <p class="card-text">Status: ${match.status}</p>
                  <p class="card-text">Venue: ${match.venue}</p>
                  <p class="card-text">Date: ${match.date}</p>
                </div>
              </div>
            </div>
          `;
          currentMatchesList.innerHTML += matchCard;
        });
      });
  }

  // Function to fetch live scores
  function fetchLiveScores() {
    fetch('https://api.cricapi.com/v1/cricScore?apikey=9df522d1-26ac-494c-9085-484911641a9f')
      .then(response => response.json())
      .then(data => {
        const liveScoresList = document.getElementById('liveScoresList');
        liveScoresList.innerHTML = ''; // Clear previous content
        data.data.forEach(score => {
          const scoreCard = `
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${score.t1} vs ${score.t2}</h5>
                  <p class="card-text">Status: ${score.status}</p>
                  <p class="card-text">Series: ${score.series}</p>
                </div>
              </div>
            </div>
          `;
          liveScoresList.innerHTML += scoreCard;
        });
      });
  }

  // Function to fetch player list
  function fetchPlayerList() {
    fetch('https://api.cricapi.com/v1/players?apikey=9df522d1-26ac-494c-9085-484911641a9f&offset=0')
      .then(response => response.json())
      .then(data => {
        const playerListItems = document.getElementById('playerListItems');
        playerListItems.innerHTML = ''; // Clear previous content
        data.data.forEach(player => {
          const playerItem = `
            <li>${player.name} - ${player.country}</li>
          `;
          playerListItems.innerHTML += playerItem;
        });
      });
  }

  // Fetch data when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentMatches();
    fetchLiveScores();
    fetchPlayerList();
  });