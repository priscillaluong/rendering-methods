import React, { useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

export default function Moves() {
  const fetcherFunc = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/move",
    fetcherFunc
  );

  const allMoves = data.results;
  allMoves.map((move: any) => {
    console.log(move);
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return allMoves.map((move: any) => {
    return <div>{move.name}</div>;
  });
}
