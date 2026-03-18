"use client";

import BaseInput from "@/components/BaseInput/BaseInput";
import { usePokeList } from "@/hooks/usePokeList";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const { pokemons } = usePokeList();
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const filteredPokemons =
    pokemons?.filter((pokemon) => {
      if (isFocused && value === "") return true;
      if (value !== "")
        return value !== "" ? pokemon.name.includes(value) : false;
      return false;
    }) ?? [];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = (item: string) => {
    setValue(item);
  };

  return (
    <div className=" h-screen">
      <div className=" flex flex-col justify-center items-center">
        <BaseInput
          value={value}
          onChange={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <div className=" flex  flex-col max-h-40 max-w-full px-10 overflow-y-scroll scroll-smooth">
          {filteredPokemons?.map((pokemon, index) => (
            <Link
              href={{
                pathname: "/pokemon",
                query: { name: pokemon.name },
              }}
              onClick={() => onClick(pokemon.name)}
              onMouseDown={(e) => e.preventDefault()}
              key={index}
            >
              {pokemon.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
