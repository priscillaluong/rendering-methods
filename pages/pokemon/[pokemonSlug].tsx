import React from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { getSinglePokemon } from "@/utils/get-pokemon";
import { PokemonType } from "@/components/collection/collection.component";

export default function PokemonSlug({
  pokemonData,
}: {
  pokemonData: PokemonType;
}) {
  return (
    <>
      <p>{pokemonData.name}</p>
      <p>{pokemonData.id}</p>
      <Image
        src={pokemonData.sprites.other.dream_world.front_default}
        alt="featuredMedia.alt || ''"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemonData = await getSinglePokemon(params?.pokemonSlug as string);
  return {
    props: {
      pokemonData,
    },
    revalidate: 100, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
