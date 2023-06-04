import React from "react";

const TicketRow = ({ ticket }) => {
  return (
    <div>
      {/* Render the icon component */}
      {ticket.icon}

      {/* Render the ticket text */}
      <span>{ticket.text}</span>
    </div>
  );
};

export default TicketRow;
