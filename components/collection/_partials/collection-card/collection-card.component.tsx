import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokemonType } from "../../collection.component";

export const CollectionCard = ({
  pokemon: { name, id, image_src },
}: {
  pokemon: PokemonType;
}) => {
  return (
    <>
      <Link href={`/pokemon/${name}`}>
        <p>{name}</p>
        <p>{id}</p>
        <Image
          src={image_src}
          alt="featuredMedia.alt || ''"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </Link>
    </>
  );
};
