// src/Components/ToggleSwitch.js
import React from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ isChecked, onChange, label }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className={styles.slider}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default ToggleSwitch;
