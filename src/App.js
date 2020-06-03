import React from "react";
import Pokemons from "./components/Pokemons";
import "./App.css";
import About from "./components/About";
import pokemonDetails from "./components/PokemonDetails";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//defining  routes and component to render on the routes
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/pokemon" exact component={Pokemons} />
          <Route path="/pokemon/:id" exact component={pokemonDetails} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
