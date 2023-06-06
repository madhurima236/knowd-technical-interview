import React, { useState } from "react";
import TicketTable from "./TicketTable";
import TicketTypeSelector from "./TicketTypeSelector";

const FilterableTicketTable = ({ tickets, loadMore, hasMore }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleScroll = (e) => {
    const { scrollHeight, clientHeight, scrollTop } = e.target;
    const bottom = scrollHeight - scrollTop - clientHeight <= 40;
    console.log("scrollHeight", scrollHeight - scrollTop - clientHeight);
    // console.log("scrollHeight", scrollHeight);
    // console.log("scrollTop", scrollTop);
    // console.log("clientHeight", clientHeight);
    if (bottom && hasMore) {
      console.log("bottom");
      loadMore();
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (filter === "All") {
      return true;
    }

    return ticket.type === filter;
  });

  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-md w-2/3 max-h-64 mt-11"
      // onScroll={handleScroll}
    >
      <div className="flex justify-center">
        <TicketTypeSelector onChange={handleFilterChange} />
      </div>
      <div
        className="overflow-y-auto top-20 transform bg-white shadow-md max-h-64"
        onScroll={handleScroll}
      >
        <TicketTable tickets={filteredTickets} />
      </div>
    </div>
  );
};

export default FilterableTicketTable;
