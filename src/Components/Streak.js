// src/Components/Streak.js
import React, { useEffect, useState } from 'react';
import styles from './Streak.module.css';

function Streak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const storedStreak = localStorage.getItem('streak');
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    if (lastVisitDate === today) {
      setStreak(parseInt(storedStreak, 10));
    } else {
      if (new Date(lastVisitDate).toDateString() === new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()) {
        const newStreak = parseInt(storedStreak, 10) + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', newStreak.toString());
      } else {
        setStreak(1);
        localStorage.setItem('streak', '1');
      }
      localStorage.setItem('lastVisitDate', today);
    }
  }, []);

  return (
    <div className={styles.streakContainer}>
      Streak: {streak}
    </div>
  );
}

export default Streak;
