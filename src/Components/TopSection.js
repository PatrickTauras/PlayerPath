import React from 'react';
import styles from './TopSection.module.css'; // Import the CSS module

function TopSection() {
  return (
    <div className={styles.topSection}>
      <div className={styles.logoContainer}>
        <img src="/images/PlayerPathLogo.webp" alt="PlayerPath Logo" className={styles.logo} />
        <span className={styles.title}>PlayerPath</span>
      </div>
    </div>
  );
}

export default TopSection;
