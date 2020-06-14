import React, { useState, useEffect } from "react";
import axios from "axios";

//This component renders the pokemon detail page
const PokemonDetails = ({ match }) => {
  useEffect(() => {
    fetchPoketype();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [poke, setPoke] = useState({});

  //fetches a single pokemon using it id
  const fetchPoketype = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then((response) => {
        const result = response.data;
        setPoke(result);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h1>Name : {poke.name}</h1>
        <h1>ID : {poke.id}</h1>
        <h1>Height : {poke.height}</h1>
        <h1>Weight : {poke.weight}</h1>
      </div>
    </div>
  );
};

export default PokemonDetails;
