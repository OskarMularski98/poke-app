"use client";

import { usePokeList } from "@/hooks/usePokeList";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const { pokemons } = usePokeList();
  const [value, setValue] = useState<string>("");
  const filteredPokemons = pokemons?.filter((pokemon) =>
    pokemon.name.includes(value !== "" ? value : " "),
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = (item: string) => {
    setValue(item);
  };
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      {filteredPokemons?.map((pokemon, index) => (
        <Link
          href={{
            pathname: "/pokemon",
            query: { name: pokemon.name },
          }}
          onClick={() => onClick(pokemon.name)}
          key={index}
        >
          {pokemon.name}
        </Link>
      ))}
    </div>
  );
}
