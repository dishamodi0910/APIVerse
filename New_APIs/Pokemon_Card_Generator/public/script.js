const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const url = "/api/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

// Function to fetch and generate Pokémon card based on user input
let getPokeData = () => {
  // Get the user input
  const pokemonName = document.getElementById("pokemon-name").value.toLowerCase().trim();

  if (pokemonName) {
    // Combine the local API URL with the Pokémon name
    const finalUrl = url + pokemonName;
    // Fetch generated URL
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        generateCard(data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
        card.innerHTML = '<p>Failed to fetch Pokémon data</p>';
      });
  } else {
    card.innerHTML = '<p>Please enter a Pokémon name</p>';
  }
};

// Function to generate the Pokémon card
let generateCard = (data) => {
  // Get necessary data and assign it to variables
  console.log(data);
  const hp = data.hp; // Assuming local API returns 'hp' directly
  const imgSrc = data.img; // Assuming local API returns 'img' directly
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.attack; // Assuming local API returns 'attack' directly
  const statDefense = data.defense; // Assuming local API returns 'defense' directly
  const statSpeed = data.speed; // Assuming local API returns 'speed' directly

  // Set themeColor based on pokemon type
  const themeColor = typeColor[data.types[0]];
  console.log(themeColor);
  card.innerHTML = `
        <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src=${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;
  appendTypes(data.types);
  styleCard(themeColor);
};

let appendTypes = (types) => {
  types.forEach((type) => {
    let span = document.createElement("SPAN");
    span.textContent = type;
    document.querySelector(".types").appendChild(span);
  });
};

let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #212121 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};

btn.addEventListener("click", getPokeData);
