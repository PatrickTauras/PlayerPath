import React from 'react';

const footerStyle = {
  backgroundColor: 'lightblue',
  padding: '20px',
  borderTop: '2px solid blue',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between', // Align items to the ends (left and right)
  alignItems: 'center', // Center items vertically
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const rightSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const textMargin = {
  marginRight: '40px', // Adjust the margin to move the text more to the left
};

const iconStyle = {
  marginRight: '10px', // Add some spacing between icons
};

function Footer() {
  return (
    <div style={footerStyle}>
      <div style={leftSectionStyle}>
        {/* Text above icons */}
        <div>
          <p>Social Media Platforms!</p>
        </div>
        {/* Place your icons here */}
        <div>
          <img src="instagram-icon.png" alt="Instagram" style={iconStyle} />
          <img src="x-icon.png" alt="X" style={iconStyle} />
          <img src="tiktok-icon.png" alt="Tiktok" style={iconStyle} />
        </div>
      </div>
      <div style={rightSectionStyle}>
        {/* Place your text here */}
        <p style={textMargin}>© 2024 Career Path Game</p>
      </div>
    </div>
  );
}

export default Footer;
