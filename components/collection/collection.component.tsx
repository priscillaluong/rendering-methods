import React from "react";
import { CollectionCard } from "./_partials/collection-card/collection-card.component";
import styles from "./collection.module.css";

export type PokemonType = {
  name: string;
  id: number;
  image_src: string;
  moves: any;
  sprites?: any;
};

export const Collection = ({ pokemonData }: { pokemonData: PokemonType[] }) => {
  return (
    <>
      {pokemonData.map((pokemon) => {
        return <CollectionCard pokemon={pokemon}></CollectionCard>;
      })}
    </>
  );
};
