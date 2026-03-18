import { fetchPokemonDetails } from "@/lib/api/pokemons";
import { PokemonDetails } from "@/types/PokemonDetails";
import { useEffect, useState } from "react";

export const usePokeDetails = (name: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await fetchPokemonDetails(name);

        setPokemonDetails(results);
      } catch (e) {
        if (e instanceof Error) setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { loading, error, pokemonDetails };
};
