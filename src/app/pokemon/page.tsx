"use client";

import { usePokeDetails } from "@/hooks/usePokeDetails";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("name") || "";
  const { pokemonDetails } = usePokeDetails(pokemonName);

  return (
    <div>
      {pokemonDetails?.moves.map((move, index) => (
        <div key={index}>{move.move.name}</div>
      ))}
    </div>
  );
};

export default Page;
