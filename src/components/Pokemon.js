import React from "react";
import { Link } from "react-router-dom";

//RENDER EACH OF THE POKEMON DETAILS

const Pokemon = (props) => (
  <div className="card text-center mx-auto" style={{ maxWidth: "18rem" }}>
    <div className="card-header">
      <b>Name: {props.pokemon.name}</b>
    </div>
    <br />

    <div>
      <h6 className="card-subtitle mb-2 text-muted">
        Type:
        {props.pokemon.types.map((value, index) => {
          return value.type.name + ",";
        })}
      </h6>

      <Link to={`/pokemon/${props.pokemon.id}`}>
        <img src={props.pokemon.sprites["front_default"]} alt="" />
      </Link>
    </div>
  </div>
);

export default Pokemon;
