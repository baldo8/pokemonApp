import React from "react";

const FormsComponent = ({ forms }) => {
  return (
    <div>
      <h1 className="cardData">Forms</h1>
      {forms && forms.map((form, index) => <li key={index}>{form.name}</li>)}
    </div>
  );
};
export default FormsComponent;
