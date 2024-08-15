import React from 'react';
import styles from './ToggleSwitch.module.css';

const PositionToggle = ({ isChecked, onChange }) => {
  return (
    <label className={styles.switchContainer}>
      <input type="checkbox" checked={isChecked} onChange={onChange} className={styles.switchInput} />
      <span className={styles.switchSlider}></span>
      <span className={styles.switchText}>Show Position</span>
    </label>
  );
};

export default PositionToggle;