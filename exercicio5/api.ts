export type Pokemon = {
  name: string;
  height: number;
  weight: number;
};

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error("Pokémon não encontrado");
  }

  const data = await response.json();

  return {
    name: data.name,
    height: data.height,
    weight: data.weight
  };
}