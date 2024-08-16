import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Calendar.module.css';

const Calendar = ({ onSelectDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  useEffect(() => {
    // Automatically set the month to August if not already set
    if (selectedMonth !== 7) { // 7 is August (0-indexed)
      setSelectedMonth(7);
    }
  }, [selectedMonth]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleYearChange = (direction) => {
    setSelectedYear(selectedYear + direction);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(selectedYear, selectedMonth, day);
    onSelectDate(selectedDate);
    setIsModalOpen(false); // Close the calendar modal
  };

  const today = new Date();
  const startDate = new Date(2024, 7, 10); // Allow dates starting from 8/10/2024
  const endDate = today; // Allow dates up to today

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const isDateSelectable = (day) => {
    const dateToCheck = new Date(selectedYear, selectedMonth, day);
    return dateToCheck >= startDate && dateToCheck <= endDate;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.icon} onClick={toggleModal}>
        <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
      </div>
      {isModalOpen && (
        <div className={styles.overlay} onClick={toggleModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={toggleModal}>×</button>
            <div className={styles.header}>
              <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleYearChange(-1)} className={styles.navIcon} />
              <span className={styles.year}>{selectedYear}</span>
              <FontAwesomeIcon icon={faChevronRight} onClick={() => handleYearChange(1)} className={styles.navIcon} />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.months}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                <div
                  key={index}
                  className={`${styles.month} ${index === selectedMonth ? styles.selectedMonth : ''}`}
                  onClick={() => handleMonthChange(index)}
                >
                  {month}
                </div>
              ))}
            </div>
            <div className={styles.divider}></div>
            <div className={styles.days}>
              {daysArray.map(day => (
                <div 
                  key={day} 
                  className={`${styles.day} ${isDateSelectable(day) ? '' : styles.disabledDay}`} 
                  onClick={() => isDateSelectable(day) && handleDateSelect(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
