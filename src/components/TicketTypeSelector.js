import React from "react";

const TicketTypeSelector = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="All">All</option>
      <option value="Gmail">Gmail</option>
      <option value="Stripe">Stripe</option>
      <option value="Alexa">Alexa</option>
    </select>
  );
};

export default TicketTypeSelector;
