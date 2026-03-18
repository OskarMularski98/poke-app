export type PokemonDetails = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
};
