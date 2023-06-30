export async function getAllPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();
  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }
  const pokemonData = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`Failed to fetch posts, received status ${res.status}`);
      }
      return {
        name: pokemon.name,
        id: data.id,
        image_src: data.sprites.other.dream_world.front_default,
        moves: data.moves,
      };
    })
  );
  return pokemonData;
}

export async function getSinglePokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }
  return data;
}
