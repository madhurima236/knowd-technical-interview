import "./App.css";
import { SiGmail, SiStripe, SiAmazon } from "react-icons/si";
import { Stripe, Gmail, Alexa } from "./dataset";
import TicketRow from "./components/TicketRow";
import TicketTable from "./components/TicketTable";

function App() {
  const exampleTicket = {
    type: "Gmail",
    text: "Can't delete all emails at once",
    icon: <SiGmail />,
  };

  const ticketArray = [];

  // Merge Stripe tickets
  Stripe.forEach((ticket) => {
    ticketArray.push({
      type: "Stripe",
      text: ticket,
    });
  });

  // Merge Gmail tickets
  Gmail.forEach((ticket) => {
    ticketArray.push({
      type: "Gmail",
      text: ticket,
    });
  });

  // Merge Alexa tickets
  Alexa.forEach((ticket) => {
    ticketArray.push({
      type: "Alexa",
      text: ticket,
    });
  });

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <h1 className={"text-5xl"}>Knowd Technical Interview</h1>

      <div>
        <h2>Ticket Row Example</h2>
        <TicketRow ticket={exampleTicket} />{" "}
        {/* Render the ticket row component */}
      </div>

      <div>
        <h1>Ticket Table Example</h1>
        <TicketTable tickets={ticketArray} />
      </div>
    </div>
  );
}

export default App;
