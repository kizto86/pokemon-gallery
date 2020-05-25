import React from "react";
import Pokemon from "./Pokemon";

//RENDER THE POKEMONS RETURNED FROM THE POKEMON API

const PokemonList = (props) => {
  const results = props.data;
  let pokemon = results.map((pokemon) => (
    <Pokemon pokemon={pokemon} key={pokemon.id} />
  ));

  return (
    <div className="container">
      <div className="card-columns">{pokemon}</div>
    </div>
  );
};

export default PokemonList;
