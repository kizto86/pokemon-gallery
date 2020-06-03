import React from "react";
import Pokemon from "./Pokemon";

//render the pokemons returned from the pokemon API

const PokemonList = (props) => {
  const results = props.data;

  let pokemonList = results.map((pokemon) => (
    <Pokemon pokemon={pokemon} key={pokemon.id} />
  ));

  return (
    <div className="container">
      <div className="row">
        {pokemonList.map((value, index) => {
          return (
            <div className="col-sm-12 col-md-4 mb-5" key={index}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
