// src/Components/Modal.js
import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <h2>Welcome to PlayerPath!</h2>
          <p>
            PlayerPath is our new daily game, inspired by the New York Times Games 'Wordle' and 'Connections,' designed specifically for basketball enthusiasts.
          </p>
          <h3>How to play:</h3>
          <p>
            Guess the <b>Current or Former NBA player</b> based on the NBA teams shown. Each guess reveals a new NBA team!
          </p>
          <h4>Example: LeBron James</h4>
          <div className={styles.example}>
            <div className={styles.row}>
              <div className={styles.modalCard}>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg" alt="Cleveland Cavaliers" className={styles.logoImage} />
                </div>
                <div className={styles.hiddenLogoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/NBA_team_placeholder.png" alt="Team 2" className={styles.hiddenLogoImage} />
                </div>
                <div className={styles.hiddenLogoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/NBA_team_placeholder.png" alt="Team 3" className={styles.hiddenLogoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" alt="Los Angeles Lakers" className={styles.logoImage} />
                </div>
              </div>
              <div className={styles.arrowContainer}>
                <div className={styles.arrowText}>Guess Made</div>
                <div className={styles.arrow}>→</div>
              </div>
              <div className={styles.modalCard}>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg" alt="Cleveland Cavaliers" className={styles.logoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg" alt="Miami Heat" className={styles.logoImage} />
                </div>
                <div className={styles.hiddenLogoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/NBA_team_placeholder.png" alt="Team 3" className={styles.hiddenLogoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" alt="Los Angeles Lakers" className={styles.logoImage} />
                </div>
              </div>
              <div className={styles.arrowContainer}>
                <div className={styles.arrowText}>Guess Made</div>
                <div className={styles.arrow}>→</div>
              </div>
              <div className={styles.modalCard}>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg" alt="Cleveland Cavaliers" className={styles.logoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg" alt="Miami Heat" className={styles.logoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg" alt="Cleveland Cavaliers" className={styles.logoImage} />
                </div>
                <div className={styles.logoBox}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" alt="Los Angeles Lakers" className={styles.logoImage} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hint}>
            <p>Hint: Use the toggle switches if you're having trouble.</p>
          </div>
          <button className={styles.playButton} onClick={onClose}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
