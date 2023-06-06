import React from "react";

const TicketModal = ({ showModal, handleClose, selectedTicket }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="bg-white border rounded-md shadow-lg z-10 w-5/6 h-3/5 overflow-y-auto">
        <div className="p-4 flex-grow flex-col justify-between h-full">
          <div className="overflow-y-auto">
          {selectedTicket && (
              <div className="ticket-details flex items-center">
                <span className="text-xl">{selectedTicket.icon}</span>
                <span className="ml-2">{selectedTicket.text}</span>
              </div>
            )}
          </div>
          <button
            onClick={handleClose}
            className="mt-4 bg-red-500 text-white rounded-full p-2 self-end"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
