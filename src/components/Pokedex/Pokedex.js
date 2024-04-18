// Pokedex.js
import React from "react";
import "./pokedex.css"; // Assuming the CSS styles are in a file called Pokedex.css

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="screen"></div>
      <div className="controls">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>
    </div>
  );
};

export default Pokedex;
