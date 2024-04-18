import React from "react";

const SpritesComponent = ({ sprites, name, id }) => {
  return (
    <div className="pokedex">
      {Object.keys(sprites).map((key, index) => {
        if (sprites[key]) {
          return (
            <img key={index} src={sprites[key]} alt={`Pokemon Sprite ${key}`} />
          );
        }
        return null;
      })}
      <div className="controls">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>
    </div>
  );
};
export default SpritesComponent;
