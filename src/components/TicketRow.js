import React from "react";

const TicketRow = ({ index, ticket }) => {
  return (
    <div
      key={index}
      className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
    >
      {/* Render the icon component */}
      {ticket.icon}

      {/* Render the ticket text */}
      <span>{ticket.text}</span>
    </div>
  );
};

export default TicketRow;
