import React from 'react';

function DateComponent({ style }) {
  const currentDate = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return <p style={{ ...style, marginRight: '10px', marginBottom: '5px', marginTop: '0' }}>{formattedDate}</p>;
}

export default DateComponent;
