import React from 'react';
import styles from './CorrectPopup.module.css';

const CorrectPopup = ({ isOpen, onClose, playerData }) => {
  if (!isOpen || !playerData) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h1 className={styles.congratsText}>Congratulations!</h1>
        <h2 className={styles.playerName}>{playerData.Player}</h2>
        <div className={styles.imageContainer}>
          <img
            src={playerData['Player Picture']}
            alt={playerData.Player}
            className={styles.playerImage}
          />
        </div>
        <p className={styles.message}>You guessed the player correctly!</p>
      </div>
    </div>
  );
};

export default CorrectPopup;
