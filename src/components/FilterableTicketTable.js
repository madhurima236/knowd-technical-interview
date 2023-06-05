import React, { useState } from "react";
import TicketTable from "./TicketTable";
import TicketTypeSelector from "./TicketTypeSelector";

const FilterableTicketTable = ({ tickets }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (filter === "All") {
      return true;
    }

    return ticket.type === filter;
  });

  return (
    <div>
      <TicketTypeSelector onChange={handleFilterChange} />
      <TicketTable tickets={filteredTickets} />
    </div>
  );
};

export default FilterableTicketTable;
