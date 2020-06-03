import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <div>
      <nav>
        <Header />
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/pokemon">
            <li>Pokemons</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
