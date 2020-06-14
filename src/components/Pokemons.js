import React, { Component } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import PokemonList from "./PokemonList";

class Pokemons extends Component {
  pokemonDetails = [];

  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonType: [],
      displayList: [],
      loading: true,
    };
  }

  //setting all data fetching inside react componentDidMount lifecycle

  componentDidMount() {
    this.getPokemon();
    this.getPoketype();
  }

  getPoketype = async () => {
    try {
      const pokeType = await fetch("https://pokeapi.co/api/v2/type");
      const response = await pokeType.json();

      this.setState({ pokemonType: response.results });
    } catch (error) {
      console.log("Error while fetching poke type", error);
    }
  };

  //fetches the different types of pokemon

  /*getPoketype() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => {
        console.log(response);
        this.setState({ pokemonType: response.data.results });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }*/

  //fetches the first 150 pokemons

  getPokemon = async () => {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    );

    let pokemons = response.data.results;
    //console.log(pokemons);
    let pkmList = [];
    await this._asyncForEach(pokemons, async (pokemon) => {
      let result = await axios.get(pokemon.url);
      pkmList.push(result.data);
    });

    pkmList.sort((a, b) => {
      return a.id - b.id;
    });

    this.pokemonDetails = pkmList;
    this.setState({ displayList: pkmList, loading: false });
  };

  _asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  //handles the  OnSelect event

  onSelect = (selectedList) => {
    this._filterFunction(selectedList);
  };

  //handles the OnRemove event

  onRemove = (selectedList) => {
    if (selectedList.length > 0) {
      this._filterFunction(selectedList);
    } else {
      this.setState({ displayList: this.pokemonDetails });
    }
  };

  //handles the filtering logic

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
    const { loading, displayList } = this.state;
    return (
      <div className="container">
        <Multiselect
          options={this.state.pokemonType}
          selectedValues={this.state.selectedValue}
          onSelect={this.onSelect}
          onRemove={this.onRemove}
          displayValue="name"
        />
        <br />
        <div>
          {loading ? (
            <p>Fetching pokemons.....</p>
          ) : (
            <PokemonList data={displayList} />
          )}
        </div>
      </div>
    );
  }
}

export default Pokemons;
