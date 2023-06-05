import "./App.css";
import { SiGmail, SiStripe, SiAmazon } from "react-icons/si";
import { Stripe, Gmail, Alexa } from "./dataset";
import FilterableTicketTable from "./components/FilterableTicketTable";
import { Search, Engine } from "./search-engine";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

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

  const [searchResults, setSearchResults] = useState([]);
  const engine = Engine(ticketArray);

  // Get the text from docs based on the result array
  const getTextFromResults = (results, docs) => {
    const texts = [];

    for (const result of results) {
      const id = result[0];
      const index = parseInt(id, 10); // Convert id to a number
      if (index >= 0 && index < docs.length) {
        texts.push(docs[index]);
      } else {
        texts.push("Invalid index");
      }
    }

    return texts;
  };

  const onSearch = (query) => {
    const result = Search(engine, query);
    setSearchResults(getTextFromResults(result, ticketArray));
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <h1 className={"text-5xl"}>Knowd Technical Interview</h1>

      <div>
        <h1>Customer Tickets</h1>
        <SearchInput onSearch={onSearch} />
        <FilterableTicketTable tickets={searchResults} />
      </div>
    </div>
  );
}

export default App;
