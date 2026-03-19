"use client";

import BaseInput from "@/components/BaseInput/BaseInput";
import { usePokeList } from "@/hooks/usePokeList";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import styles from "./page.module.scss";

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
    <div className={styles.container}>
      <div className={styles.content}>
        <BaseInput
          value={value}
          onChange={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <div className={styles.items}>
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
