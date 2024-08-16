import React, { useState } from 'react';
import TopSection from '../Components/TopSection';
import Modal from '../Components/Modal';
import DateComponent from '../Components/DateComponent';
import Stats from '../Components/Stats';
import Calendar from '../Components/Calendar';
import Time from '../Components/Time';
import NumberOfGames from '../Components/NumberOfGames';
import PlayerData from '../Components/PlayerData';
import BottomSection from '../Components/BottomSection';
import Streak from '../Components/Streak';
import styles from './GamePage.module.css';

function GamePage() {
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(true);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gameStats, setGameStats] = useState({
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    highScore: 0,
    guessDistribution: Array(8).fill(0),
    currentStreak: 0,
    maxStreak: 0
  });

  const toggleInitialModal = () => {
    setIsInitialModalOpen(!isInitialModalOpen);
  };

  const toggleSecondaryModal = () => {
    setIsSecondaryModalOpen(!isSecondaryModalOpen);
  };

  const updateStats = (guesses, won) => {
    setGameStats(prevStats => {
      const newStats = { ...prevStats };
      newStats.gamesPlayed += 1;
      if (won) {
        newStats.wins += 1;
        newStats.currentStreak += 1;
        if (newStats.currentStreak > newStats.maxStreak) {
          newStats.maxStreak = newStats.currentStreak;
        }
      } else {
        newStats.losses += 1;
        newStats.currentStreak = 0;
      }
      newStats.guessDistribution[guesses - 1] += 1;
      return newStats;
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const isToday = new Date().toISOString().slice(0, 10) === selectedDate.toISOString().slice(0, 10);

  // Format the selected date
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.gamePage}>
      <TopSection />
      <div className={styles.dateIndicator}>
        {isToday ? "Today's Board" : `${formattedDate} Board`}
      </div>
      <div className={styles.boxContainer}>
        <DateComponent />
        <Time />
        <NumberOfGames />
        <Streak />
      </div>
      <div className={styles.mainContent}>
        <PlayerData updateStats={updateStats} selectedDate={selectedDate} />
      </div>
      <div className={styles.buttonContainer}>
        <Calendar 
          onSelectDate={handleDateSelect} 
          firstGameDate="2024-08-10"
        />
        <Stats {...gameStats} className={styles.statsButton} />
        <button className={styles.helpButton} onClick={toggleSecondaryModal}>?</button>
      </div>
      <Modal 
        isOpen={isInitialModalOpen} 
        onClose={toggleInitialModal} 
        text="Welcome to the Career Path game! In this game, you will navigate through various career choices and challenges. Your decisions will impact your career path and ultimately your success. Click the 'Play' button to begin your journey!" 
      />
      <Modal 
        isOpen={isSecondaryModalOpen} 
        onClose={toggleSecondaryModal} 
        text="Welcome to the Career Path game! In this game, you will navigate through various career choices and challenges. Your decisions will impact your career path and ultimately your success. Click the 'Play' button to begin your journey!" 
      />
      <BottomSection />
    </div>
  );
}

export default GamePage;