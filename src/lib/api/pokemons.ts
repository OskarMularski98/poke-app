export const fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  const { results } = await response.json();

  return results;
};

export const fetchPokemonDetails = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const results = await response.json();

  return results;
};
