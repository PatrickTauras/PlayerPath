import React from 'react';

// Define CSS styles as a template literal
const contactStyles = `
  /* Popup overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dimmed background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* Popup container */
  .popup-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px; /* Slightly rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 300px; /* Adjust width as needed */
    height: auto; /* Auto height */
    text-align: center; /* Center-align the content */
  }

  /* Close button */
  .close-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .close-button:hover {
    background-color: darkblue;
  }
`;

// Function to inject styles into the document head
const injectStyles = (styles) => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
};

// Inject the styles into the document head
injectStyles(contactStyles);

const Contact = ({ onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div>
                    {/* Display "BUSINESS EMAIL:" in bold */}
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>BUSINESS EMAIL:</p>
                </div>
                {/* Close button */}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Contact;
