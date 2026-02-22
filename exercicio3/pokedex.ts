const pokedex: Record<string, { tipo: string; ataque: number }> = {
  pikachu: { tipo: "elétrico", ataque: 55 },
  charmander: { tipo: "fogo", ataque: 52 },
  bulbasaur: { tipo: "planta", ataque: 49 }
};

const pokemon = process.argv[2];

if (!pokemon) {
  console.log("Digite um Pokémon!");
  process.exit(1);
}

const info = pokedex[pokemon.toLowerCase()];

if (!info) {
  console.log("Pokémon não encontrado!");
} else {
  console.log(`Nome: ${pokemon}`);
  console.log(`Tipo: ${info.tipo}`);
  console.log(`Ataque: ${info.ataque}`);
}