import React from "react";

const TicketRow = ({ index, ticket }) => {
  return (
    <div
      key={index}
      className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="mr-2 text-xl">{ticket.icon}</div>
      <span
        className="overflow-hidden text-overflow-ellipsis whitespace-nowrap text-lg"
        style={{ maxWidth: "100%", textOverflow: "ellipsis" }}
      >
        {ticket.text}
      </span>
    </div>
  );
};

export default TicketRow;
