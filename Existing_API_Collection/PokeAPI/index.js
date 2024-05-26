const API_URL = "https://pokeapi.co/api/v2/pokemon";

const pokeError = document.querySelector('#poke-error')
const pokeLoad = document.querySelector('#poke-load')
const searchForm = document.querySelector('#search')

const fetchPokeData = async (query) => {
  try{
    pokeLoad.innerHTML = 'Loading...'
    pokeError.innerHTML = ''
    const response = await fetch(`${API_URL}/${query}`)
    if (!response.ok){
      throw new Error('Sorry! Pokemon not found.')
    }
    const data = await response.json();
    
    window.location.href = `pokemon.html?name=${data.name}`;
  }catch(error){
    pokeLoad.innerHTML = ''
    pokeError.innerHTML = error.message
  }
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.querySelector('#input').value.trim();
  if (input){
    fetchPokeData(input)
  }
} )

