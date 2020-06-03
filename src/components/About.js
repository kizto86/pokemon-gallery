import React from "react";
// renders the about page
const About = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <p>
          Poke gallery is a react application that fetches Pokemon from the poke
          API
        </p>
        <p>It renders the first 150 Pokemon and displays their details</p>
        <p>The Pokemons can be filter by multiple types</p>
        <p>
          To view more information about each Pokemon click on the Pokemon Image
        </p>
      </div>
    </div>
  );
};

export default About;
