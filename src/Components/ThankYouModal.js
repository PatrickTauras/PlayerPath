import React from 'react';
import styles from './ThankYouModal.module.css';

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Thank you for your response!</h2>
        <p>We will look into your message very shortly. Hope you have a good day!</p>
      </div>
    </div>
  );
};

export default ThankYouModal;