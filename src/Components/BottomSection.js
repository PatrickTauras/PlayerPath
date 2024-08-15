import React from 'react';
import styles from './BottomSection.module.css';

const BottomSection = () => (
  <div className={styles.bottomSection}>
    <div className={styles.logoContainer}>
      <a href="https://x.com/PlayerPath_app" target="_blank" rel="noopener noreferrer">
        <img src="/images/x-icon.png" alt="X" className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/playerpath_app/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram-icon.png" alt="Instagram" className={styles.icon} />
      </a>
    </div>
    <div className={styles.linksContainer}>
      <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
      <a href="/contact" className={styles.link}>Contact</a>
    </div>
    <div className={styles.copyRight}>
      © PlayerPath | All Images And Photos Belong to the NBA & ESPN
    </div>
  </div>
);

export default BottomSection;
