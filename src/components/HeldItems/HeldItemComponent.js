import React from "react";

const HeldItemComponent = ({ held_items }) => {
  return (
    <div>
      <h1 className="cardData">Held Items</h1>
      {held_items &&
        held_items.map((item, index) => <li key={index}>{item.item.name}</li>)}
    </div>
  );
};

export default HeldItemComponent;
