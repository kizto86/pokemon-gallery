import React from "react";
import Pokemons from "./components/Pokemons";
import "./App.css";
import About from "./components/About";
import pokemonDetails from "./components/PokemonDetails";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Ability to handle route in react BrowserRoute
//Render the component based on the url
//exact make sure the exact route is render. If there is no exact as soon as the route match a path it stop but exact ensures that it the right path.
//switch make sure that as soon as the exact url is found it stops and render the component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/pokemon" exact component={Pokemons} />
          <Route path="/pokemon/:id" exact component={pokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
