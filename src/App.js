import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import PokemanList from "./components/PokemonList";

class App extends Component {
  pokemonDetails = [];

  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonType: [],
      displayList: [],
    };
  }
  //SETTING ALL DATA FETCHING INSIDE REACT ComponentDidMount LIFECYCLE

  componentDidMount() {
    this.getPokemon();
    this.getPoketype();
  }

  //FETCHES THE DIFFERENT TYPES OF POKEMON

  getPoketype() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => {
        this.setState({ pokemonType: response.data.results });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  //FETCHES THE FIRST 150 POKEMON

  getPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        this.setState({ pokemons: response.data.results });

        // eslint-disable-next-line array-callback-return
        this.state.pokemons.map((pokemon) => {
          axios
            .get(pokemon.url)
            .then((response) => {
              var temp = this.pokemonDetails;
              temp.push(response.data);
              this.setState({ displayList: temp });
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
  //HANDLES THE OnRemove EVENT

  onSelect = (selectedList) => {
    this._filterFunction(selectedList);
  };

  //HANDLES THE onRemove EVENT

  onRemove = (selectedList) => {
    if (selectedList.length > 0) {
      this._filterFunction(selectedList);
    } else {
      this.setState({ displayList: this.pokemonDetails });
    }
  };

  //THIS FUNCTION  HANDLES THE FILTERING LOGIC

  _filterFunction = (selectedList) => {
    let filteredList = [];
    filteredList = this.pokemonDetails.filter((pokemon) => {
      return selectedList.some((f) => {
        return pokemon.types.some((pkType) => {
          return f.name === pkType.type.name;
        });
      });
    });

    this.setState({ displayList: filteredList });
  };

  render() {
    return (
      <div className="container">
        <Header />

        <Multiselect
          options={this.state.pokemonType}
          selectedValues={this.state.selectedValue}
          onSelect={this.onSelect}
          onRemove={this.onRemove}
          displayValue="name"
        />
        <br />

        <PokemanList data={this.state.displayList} />
      </div>
    );
  }
}

export default App;
