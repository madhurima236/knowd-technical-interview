import React from "react";

const TicketTable = ({ tickets }) => {
  return (
    <div
      className="ticket-table"
      style={{ height: "400px", overflowY: "scroll" }}
    >
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Ticket</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.type}</td>
              <td>{ticket.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;