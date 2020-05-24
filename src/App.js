import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

import PokemanList from "./components/PokemonList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails: [],
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        //console.log(response)
        this.setState({ pokemons: response.data.results });

        // eslint-disable-next-line array-callback-return
        this.state.pokemons.map((pokemon) => {
          axios
            .get(pokemon.url)
            .then((response) => {
              console.log(response);
              var temp = this.state.pokemonDetails;
              temp.push(response.data);
              this.setState({ pokemonDetails: temp });
            })
            .catch((error) => {
              console.log("Error fetching and parsing data", error);
            });
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <PokemanList data={this.state.pokemonDetails} />
      </div>
    );
  }
}

export default App;
