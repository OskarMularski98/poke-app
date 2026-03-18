import { Pokemon } from "@/types/Pokemon";
import { useCallback, useEffect, useState } from "react";
import { fetchPokemons } from "@/lib/api/pokemons";

export const usePokeList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const loadPokeList = useCallback(async () => {
    setLoading(true);
    try {
      const results = await fetchPokemons();

      setPokemons(results);
    } catch (e) {
      console.log(e);
      if (e instanceof Error) setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPokeList();
  }, [loadPokeList]);

  return { pokemons, loading, error };
};
