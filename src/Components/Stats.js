import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import styles from './Stats.module.css';

const Stats = ({ gamesPlayed, wins, losses, guessDistribution, currentStreak, maxStreak }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const winPercentage = gamesPlayed > 0 ? Math.round((wins / gamesPlayed) * 100) : 0;

  return (
    <div>
      <div className={styles.statsButton} onClick={toggleModal}>
        <FontAwesomeIcon icon={faChartLine} className={styles.statsIcon} />
      </div>
      {isModalOpen && (
        <div>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={toggleModal}>×</button>
            <h2>Game Stats</h2>
            <div className={styles.statsContainer}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{gamesPlayed}</div>
                <div className={styles.statLabel}>Played</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{winPercentage}%</div>
                <div className={styles.statLabel}>Win %</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{currentStreak}</div>
                <div className={styles.statLabel}>Current Streak</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>{maxStreak}</div>
                <div className={styles.statLabel}>Max Streak</div>
              </div>
            </div>
            <div className={styles.guessDistribution}>
              <h3>Guess Distribution</h3>
              {guessDistribution.map((count, index) => (
                <div key={index} className={styles.guessRow}>
                  <span>{index + 1}</span>
                  <div className={styles.guessBarContainer}>
                    <div className={styles.guessBar} style={{ width: `${count * 10}px` }}>
                      {count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
