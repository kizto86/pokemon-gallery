import React from "react";

//RENDER EACH OF THE POKEMON DETAILS

const Pokemon = (props) => (
  <div className="card text-center mx-auto" style={{ maxWidth: "18rem" }}>
    <div className="card-header">
      <b>Name: {props.pokemon.name}</b>
    </div>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">
        Number: {props.pokemon.id}
      </h6>
    </div>
    <div>
      <h6 className="card-subtitle mb-2 text-muted">
        Type:
        {props.pokemon.types.map((value, index) => {
          return value.type.name + ",";
        })}
      </h6>

      <img src={props.pokemon.sprites["front_default"]} alt="" />
    </div>
  </div>
);

export default Pokemon;
