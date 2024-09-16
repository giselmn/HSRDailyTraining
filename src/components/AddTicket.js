import React, { useState } from 'react';
import './AddTicket.css';
import TicketBox from './Ticketbox';

function TrainingPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [trainingName, setTrainingName] = useState('');
  const [commissionDetails, setCommissionDetails] = useState('');
  const [tickets, setTickets] = useState([]); // Array to hold multiple tickets

  const handleAddTrainingClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tickets.length < 5) {
      // Add the new ticket to the array if the limit (5) is not reached
      setTickets([...tickets, { trainingName, commissionDetails }]);
      setTrainingName(''); // Clear input fields after submission
      setCommissionDetails('');
    } else {
      alert("You can only add up to 5 tickets.");
    }

    setShowPopup(false); // Close the popup after submission
  };

  const handleDelete = (index) => {
    // Delete the ticket at the given index
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
  };

  const handleComplete = (index) => {
    // Mark the ticket as completed (you can update the logic as needed)
    alert(`Ticket ${index + 1} marked as complete!`);
  };

  return (
    <div>
      <button onClick={handleAddTrainingClick} disabled={tickets.length >= 5}>
        Add Training
      </button>
      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src="/images/himekohsr.png" alt="Training Template" className="popup-image" />
            <div>
              <h2>Welcome to Your Training</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name of Training:
                  <input
                    type="text"
                    value={trainingName}
                    onChange={(e) => setTrainingName(e.target.value)}
                    placeholder="Enter training name"
                  />
                </label>
                <label>
                  Commission Details:
                  <textarea
                    value={commissionDetails}
                    onChange={(e) => setCommissionDetails(e.target.value)}
                    placeholder="Enter commission details"
                  ></textarea>
                </label>
                <button className="submit-button">Submit</button>
              </form>
            </div>
            <button className="close-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Render multiple tickets */}
      {tickets.map((ticket, index) => (
        <TicketBox
          key={index}
          trainingName={ticket.trainingName}
          commissionDetails={ticket.commissionDetails}
          onComplete={() => handleComplete(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TrainingPopup;
