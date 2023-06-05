import React, { useState, useEffect } from "react";
import TicketRow from "./TicketRow";
import { Modal, Button } from "react-bootstrap";

const TicketTable = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleKeyDown = (e, tickets) => {
    if (e.key === "Enter") {
      handleTicketClick(tickets[currIndex]);
    } else if (e.key === "ArrowUp") {
      setCurrIndex((prevIndex) => {
        console.log(prevIndex);
        return prevIndex > 0 ? prevIndex - 1 : 0;
      });
    } else if (e.key === "ArrowDown") {
      setCurrIndex((prevIndex) => {
        return prevIndex < tickets.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) =>
      handleKeyDown(event, tickets)
    );
    return () => {
      document.removeEventListener("keydown", (event) =>
        handleKeyDown(event, tickets)
      );
    };
  }, [currIndex, tickets]);

  useEffect(() => {
    setCurrIndex(null);
  }, [tickets]);

  //   useEffect(() => {
  //     const handleEnterKeyDown = (event) => {
  //       if (event.key === 'Enter' && currIndex !== null) {
  //         handleTicketClick(tickets[currIndex]);
  //       }
  //     };

  //     document.addEventListener('keydown', handleEnterKeyDown);
  //     return () => {
  //       document.removeEventListener('keydown', handleEnterKeyDown);
  //     };
  //   }, [currIndex, tickets]);

  const handleClose = () => {
    setShowModal(false);
    setSelectedTicket(null);
  };

  return (
    <div>
      {tickets.map((ticket, index) => (
        <div
          key={index}
          onClick={() => handleTicketClick(ticket)}
          className={currIndex === index ? "selected-row" : ""}
        >
          <TicketRow index={index} ticket={ticket} />
        </div>
      ))}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          {selectedTicket && (
            <div>
              {selectedTicket.icon}
              <span>{selectedTicket.text}</span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TicketTable;
