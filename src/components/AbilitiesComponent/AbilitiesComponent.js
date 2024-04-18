import React from "react";

const AbilitiesComponent = ({ abilities, url }) => {
  return (
    <div>
      <h1 className="cardData">Abilities</h1>
      {abilities &&
        abilities.map((ability, index) => (
          <div key={index}>
            <p>Name: {ability.ability.name}</p>
            <p>URL: {url}</p>
          </div>
        ))}
    </div>
  );
};
export default AbilitiesComponent;
