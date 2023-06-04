import React, { useState } from "react";
import TicketTable from "./TicketTable";
import TicketTypeSelector from "./TicketTypeSelector";

const FilterableTicketTable = ({ tickets }) => {
  const [selectedType, setSelectedType] = useState("All");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (selectedType === "All") {
      return true;
    }

    return ticket.type === selectedType;
  });

  return (
    <div>
      <TicketTypeSelector onChange={handleTypeChange} />
      <TicketTable tickets={filteredTickets} />
    </div>
  );
};

export default FilterableTicketTable;
