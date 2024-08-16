import React from 'react';
import styles from './NotGuessedCorrectly.module.css';

const NotGuessedCorrectly = ({ isOpen, onClose, playerData }) => {
  if (!isOpen || !playerData) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h1 className={styles.congratsText}>Better luck next time!</h1>
        <h2 className={styles.playerName}>{playerData.Player}</h2>
        <div className={styles.imageContainer}>
          <img
            src={playerData['Player Picture']}
            alt={playerData.Player}
            className={styles.playerImage}
          />
        </div>
        <p className={styles.message}>Come back tomorrow for a new game!</p>
      </div>
    </div>
  );
};

export default NotGuessedCorrectly;
