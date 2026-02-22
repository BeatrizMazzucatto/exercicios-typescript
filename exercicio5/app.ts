import { getPokemon } from './api';

const pokemonName = process.argv[2] || "pikachu";

getPokemon(pokemonName)
  .then(pokemon => {
    console.log("Pokémon encontrado:");
    console.log(`Nome: ${pokemon.name}`);
    console.log(`Altura: ${pokemon.height}`);
    console.log(`Peso: ${pokemon.weight}`);
  })
  .catch(err => console.error(err.message));