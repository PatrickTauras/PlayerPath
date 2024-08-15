// src/Components/DateComponent.js

import React from 'react';
import styles from './DateComponent.module.css';

function DateComponent() {
  const currentDate = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return <p className={styles.dateContainer}>{formattedDate}</p>;
}

export default DateComponent;
