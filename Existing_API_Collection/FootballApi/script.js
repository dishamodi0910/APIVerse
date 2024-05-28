// Function to fetch data from API
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to display league names with pictures
async function displayLeagues() {
  const leaguesData = await fetchData(`https://api.soccersapi.com/v2.2/leagues/?user=gabaniyash847&token=7e4a5c820e72104fc7362a33473d7f69&t=list`);

  const leagueDataContainer = document.getElementById("leagueData");

  leaguesData.data.forEach(league => {
    const leagueCard = document.createElement("div");
    leagueCard.classList.add("col-md-4", "mb-4");

    const cardContent = `
      <div class="card">
        <img src="IMAGE_URL_HERE" class="card-img-top" alt="${league.name}">
        <div class="card-body">
          <h5 class="card-title">${league.name}</h5>
        </div>
      </div>
    `;

    leagueCard.innerHTML = cardContent;
    leagueDataContainer.appendChild(leagueCard);
  });
}

// Function to display live scores with proper pictures
async function displayLiveScores() {
  // Fetch live scores data
  const liveScoresData = await fetchData(`https://api.soccersapi.com/v2.2/livescores/?user=gabaniyash847&token=7e4a5c820e72104fc7362a33473d7f69&t=today`);

  const liveScoresDataContainer = document.getElementById("liveScoresData");

  liveScoresData.data.forEach(match => {
    const matchCard = document.createElement("div");
    matchCard.classList.add("col-md-4", "mb-4");

    const cardContent = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${match.teams.home.name} vs ${match.teams.away.name}</h5>
          <p class="card-text">Score: ${match.scores.home_score} - ${match.scores.away_score}</p>
          <img src="${match.teams.home.img}" alt="${match.teams.home.name}" style="width: 50px; height: 50px;">
          <img src="${match.teams.away.img}" alt="${match.teams.away.name}" style="width: 50px; height: 50px;">
        </div>
      </div>
    `;

    matchCard.innerHTML = cardContent;
    liveScoresDataContainer.appendChild(matchCard);
  });
}

// Function to display fixtures
async function displayFixtures() {
  // Fetch fixtures data
  const currentDate = new Date().toISOString().split('T')[0];
  const fixturesData = await fetchData(`https://api.soccersapi.com/v2.2/fixtures/?user=gabaniyash847&token=7e4a5c820e72104fc7362a33473d7f69&t=schedule&d=${currentDate}&league_id=799`);

  const fixturesDataContainer = document.getElementById("fixturesData");

  fixturesData.data.forEach(fixture => {
    const fixtureCard = document.createElement("div");
    fixtureCard.classList.add("col-md-4", "mb-4");

    const cardContent = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${fixture.teams.home.name} vs ${fixture.teams.away.name}</h5>
          <p class="card-text">Status: ${fixture.status_name}</p>
        </div>
      </div>
    `;

    fixtureCard.innerHTML = cardContent;
    fixturesDataContainer.appendChild(fixtureCard);
  });
}

// Function to display season stats
async function displaySeasonStats() {
  // Fetch season stats data
  const seasonStatsData = await fetchData(`https://api.soccersapi.com/v2.2/stats/?user=gabaniyash847&token=7e4a5c820e72104fc7362a33473d7f69&t=season&id=406`);

  const seasonStatsDataContainer = document.getElementById("seasonStatsData");

  const statsContent = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Season Stats</h5>
          <p class="card-text">Number of teams: ${seasonStatsData.data.number_of_teams}</p>
          <p class="card-text">Number of matches: ${seasonStatsData.data.number_of_matches}</p>
          <p class="card-text">Most scored team: ${seasonStatsData.data.team_most_scored.id}</p>
          <p class="card-text">Most scored player: ${seasonStatsData.data.player_most_scored.id}</p>
        </div>
      </div>
    </div>
  `;

  seasonStatsDataContainer.innerHTML = statsContent;
}

// Function to display players
async function displayPlayers() {
  // Fetch players data
  const playersData = await fetchData(`https://api.soccersapi.com/v2.2/players/?user=gabaniyash847&token=7e4a5c820e72104fc7362a33473d7f69&t=list&country_id=4`);

  const playersDataContainer = document.getElementById("playersData");

  playersData.data.slice(0, 50).forEach((player, index) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("col-md-4", "mb-4");

    const cardContent = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${index + 1}. ${player.common_name}</h5>
          <p class="card-text">Position: ${player.position}</p>
          <p class="card-text">Birthday: ${player.birthday}</p>
          <img src="${player.img}" alt="${player.common_name}" style="width: 50px; height: 50px;">
        </div>
      </div>
    `;

    playerCard.innerHTML = cardContent;
    playersDataContainer.appendChild(playerCard);
  });
}

// Load data when the page loads
document.addEventListener("DOMContentLoaded", async () => {
   displayLeagues();
  displayLiveScores();
   displayFixtures();
  displaySeasonStats();
  displayPlayers();
});
