import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Pokemons from "./pages/Pokemons";
import Header from "./components/Header";
//import PokemonsDetails from "./pages/PokemonDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Pokemons} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
