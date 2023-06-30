import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokemonType } from "../../collection.component";
import styles from "./collection-card.module.css";

export const CollectionCard = ({
  pokemon: { name, id, image_src },
}: {
  pokemon: PokemonType;
}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.card} href={`/pokemon/${name}`}>
        <Image
          src={image_src}
          alt="featuredMedia.alt || ''"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <h1>{name}</h1>
        <p>{id}</p>
      </Link>
    </div>
  );
};
