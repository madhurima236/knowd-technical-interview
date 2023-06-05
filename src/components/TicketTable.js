import React, {useState} from "react";
import TicketRow from "./TicketRow";
import {Modal, Button} from 'react-bootstrap';

const TicketTable = ({ tickets }) => {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedTicket(null);
    };

    return (
        // <div
        //   className="ticket-table"
        //   style={{ height: "400px", overflowY: "scroll" }}
        // >
        //   {tickets.map((ticket, index) => (
        //     <Link key={index} to={`/ticket/${index}`}>
        //       <TicketRow index={index} ticket={ticket} />
        //     </Link>
        //   ))}
        // </div>
        <div>
            {tickets.map((ticket, index) => (
                <div key={index} onClick={() => handleTicketClick(ticket)}>
                    <TicketRow index={index} ticket={ticket} />
                </div>
            ))}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTicket?.text}</Modal.Title>
                </Modal.Header>
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
