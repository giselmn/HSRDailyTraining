import React from 'react';
import './TicketBox.css'; // Custom CSS for styling

function TicketBox({ trainingName, commissionDetails, onComplete, onDelete }) {
  return (
    <div className="ticket-box">
      <img src="/images/ticketblank.jpg" alt="Ticket" className="ticket-image" />
      
      {/* Overlay text on the ticket */}
      <div className="ticket-info">
        <p className="training-name">{trainingName || 'Training Name'}</p>
        <p className="commission-details">{commissionDetails || 'Commission Details'}</p>
      </div>

      {/* Complete and Delete Buttons */}
      <div className="ticket-actions">
        <button onClick={onComplete}>Complete</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TicketBox;
