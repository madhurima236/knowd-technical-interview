import "./App.css";
import { SiGmail, SiStripe, SiAmazon } from "react-icons/si";
import { Stripe, Gmail, Alexa } from "./dataset";
import TicketRow from "./components/TicketRow";

function App() {
  const ticket = {
    type: "Gmail",
    text: "Can't delete all emails at once",
    icon: <SiGmail />,
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <h1 className={"text-5xl"}>Knowd Technical Interview</h1>
      <div>
        <h2>Ticket Row Example</h2>
        <TicketRow ticket={ticket} /> {/* Render the ticket row component */}
      </div>
    </div>
  );
}

export default App;
