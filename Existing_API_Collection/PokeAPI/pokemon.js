const API_URL = "https://pokeapi.co/api/v2/pokemon";

const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  };

const pokemon = getQueryParam('name')
const name = document.querySelector('#name')
const type = document.querySelector('#type')
const ability = document.querySelector('#ability')
const baseExp = document.querySelector('#base-exp')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const baseStat = document.querySelector('#base-stat')
const image = document.querySelector('#poke-img')
const evolve = document.querySelector('#evolve-from')
const category = document.querySelector('#category')

const fetchPokeData = async (query) => {

    const response = await fetch(`${API_URL}/${query}`)
    const data = await response.json()
    const abilities = data.abilities.map(curr => curr.ability.name).join(', ')
    const baseStat = data.stats.map(curr => ({[curr.stat.name] : curr.base_stat}))
    const type = data.types.map(curr => curr.type.name).join(', ')
    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();
    const evolveFrom = speciesData.evolves_from_species ? speciesData.evolves_from_species.name : 'None';
    
    return {
        name : data.name,
        ability : abilities,
        baseExp : data.base_experience,
        height : data.height,
        weight : data.weight,
        type ,
        baseStat,
        imgURL : data.sprites.other['official-artwork'].front_default,
        evolveFrom,
        category: speciesData.genera.find(genus => genus.language.name === 'en').genus.replace(' Pokémon', '')
    }
  }

fetchPokeData(pokemon).then((pokemonData) => {
    height.textContent += `${pokemonData.height / 10} m`
    name.textContent += `${pokemonData.name}`
    weight.textContent += `${weightConversion(pokemonData.weight)} kg`
    type.textContent += `${pokemonData.type}`
    ability.textContent += `${pokemonData.ability}`
    baseExp.textContent += `${pokemonData.baseExp}`
    category.textContent += `${pokemonData.category}`
    evolve.textContent += `${pokemonData.evolveFrom}`
    pokemonData.baseStat.forEach(stat => {
        baseStat.innerHTML += `${Object.keys(stat)[0]}: ${Object.values(stat)[0]} <br>`
      });
    image.src = `${pokemonData.imgURL}`
})

//hectogram to kg
function weightConversion(weight){
    return weight * .1
}
