import React from 'react';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  return (
    <div className={styles.header}>
      <img src="/images/swish-logo.png.webp" alt="Swish Logo" className={styles.logo} />
      <span className={styles.title}>Swish</span>
    </div>
  );
}

export default Header;
