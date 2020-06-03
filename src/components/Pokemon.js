import React from "react";
import { Link } from "react-router-dom";

/*renders each of the pokemon details and also create 
a link on the image tag that navigate to the pokemon detail pages when clicked*/

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
