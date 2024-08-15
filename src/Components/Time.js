// src/Components/Time.js

import React, { useState, useEffect } from 'react';
import './Time.css'; // Import the CSS file

function Time() {
  const [startTime, setStartTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now - startTime) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [startTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="time-container">
      {formatTime(elapsedTime)}
    </div>
  );
}

export default Time;
