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
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-md w-2/3 max-h-64 overflow-y-auto">
      <div className="flex justify-center p-3">
        <TicketTypeSelector onChange={handleFilterChange} />
      </div>
      <div>
        <TicketTable tickets={filteredTickets} />
      </div>
    </div>
  );
};

export default FilterableTicketTable;
