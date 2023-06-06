import "./App.css";
import { SiGmail, SiStripe, SiAmazon } from "react-icons/si";
import { Stripe, Gmail, Alexa } from "./dataset";
import FilterableTicketTable from "./components/FilterableTicketTable";
import { Search, Engine } from "./search-engine";
import SearchInput from "./components/SearchInput";
import { useState, useEffect } from "react";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

function App() {
  const ticketArray = [];

  // Merge Stripe tickets
  Stripe.forEach((ticket) => {
    ticketArray.push({
      type: "Stripe",
      text: ticket,
      icon: <SiStripe />,
    });
  });

  // Merge Gmail tickets
  Gmail.forEach((ticket) => {
    ticketArray.push({
      type: "Gmail",
      text: ticket,
      icon: <SiGmail />,
    });
  });

  // Merge Alexa tickets
  Alexa.forEach((ticket) => {
    ticketArray.push({
      type: "Alexa",
      text: ticket,
      icon: <SiAmazon />,
    });
  });

  const engine = Engine(ticketArray);
  const [searchResults, setSearchResults] = useState([]);
  const { tickets, hasMore, loadMore, setQuery} = useInfiniteScroll(
    10,
    engine,
    ticketArray
  );
    
  useEffect(() => {
    setSearchResults(tickets);
  }, [tickets]);

  const onSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="h-screen bg-gray-100 overflow-y-auto flex flex-col">
      <div className="flex justify-start">
        <h1 className="text-xl font-bold text-blue-900 mt-4 ml-4">
          Knowd Technical Interview
        </h1>
      </div>
      <div className="flex justify-center items-center box mt-10">
        <SearchInput onSearch={onSearch} />
      </div>
      <div className="flex-grow">
              <FilterableTicketTable tickets={tickets} loadMore={loadMore} hasMore={hasMore} />
      </div>
    </div>
  );
}

export default App;
