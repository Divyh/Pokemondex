const pokemon_count = 140;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const poke_container = document.getElementById("poke-container");
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);

  const data = await res.json(res);
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonElem = document.createElement("div");
  pokemonElem.classList.add("pokemon");
  // name
  //id
  let name = pokemon.name[0].toUpperCase();
  const id = pokemon.id.toString();

  const poke_types = pokemon.types.map((type) => type.type.name); //api
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  pokemonElem.style.backgroundColor = color;

  const pokemonInnerHtml = `<div class="image-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="">
    </div>
    <div class="info"> 
    <span class="number">${id} </span>
    <h3> ${name}</h3>
    <small class="type"> Type : <span>  ${type} </span> </small>
    </div>
    `;
  pokemonElem.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonElem);
};

fetchPokemons();
