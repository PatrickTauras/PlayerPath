import React from 'react';
import styles from './BottomSection.module.css';

const BottomSection = () => (
  <div className={styles.bottomSection}>
    <div className={styles.logoContainer}>
      <a href="https://x.com/PlayerPath_app" target="_blank" rel="noopener noreferrer">
        <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="X" className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/playerpath_app/" target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + "/images/instagram-icon.png"} alt="Instagram" className={styles.icon} />
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
