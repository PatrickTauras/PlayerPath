import React, { useState, useEffect } from 'react';
import './NumberOfGames.css'; // Import the CSS file

function NumberOfGames() {
  const [gamesPlayed, setGamesPlayed] = useState(0);

  useEffect(() => {
    const storedGamesPlayed = localStorage.getItem('gamesPlayed');
    if (storedGamesPlayed) {
      setGamesPlayed(parseInt(storedGamesPlayed, 10));
    } else {
      localStorage.setItem('gamesPlayed', '0');
    }
  }, []);

  useEffect(() => {
    const incrementCount = () => {
      const currentDate = new Date();
      const lastDatePlayed = localStorage.getItem('lastDatePlayed');
      const currentCSTDate = new Date(currentDate.toLocaleString('en-US', { timeZone: 'America/Chicago' }));

      if (!lastDatePlayed || new Date(lastDatePlayed).toDateString() !== currentCSTDate.toDateString()) {
        const updatedCount = gamesPlayed + 1;
        localStorage.setItem('gamesPlayed', updatedCount.toString());
        localStorage.setItem('lastDatePlayed', currentCSTDate.toString());
        setGamesPlayed(updatedCount);
      }
    };

    incrementCount();

    const now = new Date();
    const currentCSTDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    const midnightCST = new Date(currentCSTDate);
    midnightCST.setHours(24, 0, 0, 0);

    const timeUntilMidnightCST = midnightCST - currentCSTDate;
    const timeoutID = setTimeout(() => {
      incrementCount();
      setInterval(incrementCount, 86400000); // 24 hours in milliseconds
    }, timeUntilMidnightCST);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [gamesPlayed]);

  return (
    <div className="number-of-games-container">
      Count: {gamesPlayed}
    </div>
  );
}

export default NumberOfGames;
