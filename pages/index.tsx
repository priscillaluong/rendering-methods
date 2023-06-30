import { Collection } from "../components/collection/collection.component";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { getAllPokemon } from "../utils/get-pokemon";

export default function Home({ pokemonData }: any) {
  return (
    <Layout>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Collection pokemonData={pokemonData}></Collection>
    </Layout>
  );
}

export async function getServerSideProps() {
  const pokemonData = await getAllPokemon();
  return {
    props: {
      pokemonData,
    },
  };
}
