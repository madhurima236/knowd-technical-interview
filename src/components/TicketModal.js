import React from "react";
import { Modal, Button } from "react-bootstrap";

const TicketModal = ({ showModal, handleClose, selectedTicket }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Body>
        {selectedTicket && (
          <div className="ticket-details">
            {selectedTicket.icon}
            <span>{selectedTicket.text}</span>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="blue" onClick={handleClose} className="close-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketModal;
