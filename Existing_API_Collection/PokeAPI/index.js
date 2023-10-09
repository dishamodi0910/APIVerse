const API_URL = "https://pokeapi.co/api/v2/pokemon";

const addDataToPage = (value = []) => {
  const pageData = value
    .map(
      (val) =>
        `<tr><td>${val.name}</td><td><a href="${val.url}">${val.url}</a></td></tr>`
    )
    .join("");

  const pokemonTag = document.getElementById("pokemon");
  pokemonTag.innerHTML += pageData;
};

const fetchData = async () => {
  let url = "";
  if (document.getElementById("loadmore").value) {
    url = document.getElementById("loadmore").value;
  } else {
    url = API_URL;
  }

  const response = await fetch(url);
  const responseBody = await response.json();
  addDataToPage(responseBody.results);

  document.getElementById("loadmore").value = responseBody.next;
};

fetchData();
