import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Calendar.module.css';

// Exported function to get the corrected today date
export const getCorrectedTodayDate = () => {
  const today = new Date();
  return today;
};

const Calendar = ({ onSelectDate, firstGameDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleYearChange = (direction) => {
    const newYear = selectedYear + direction;
    if (newYear <= new Date().getFullYear()) {
      setSelectedYear(newYear);
    }
  };

  const handleMonthChange = (month) => {
    const today = getCorrectedTodayDate(); // Use the exported date function
    if (selectedYear === today.getFullYear() && month > today.getMonth()) {
      return; // Don't allow future months
    }
    if (new Date(selectedYear, month, 1) >= new Date(firstGameDate)) {
      setSelectedMonth(month);
    }
  };

  const handleDateSelect = (day) => {
    const today = getCorrectedTodayDate(); // Use the exported date function
    const selectedDate = new Date(selectedYear, selectedMonth, day);

    if (selectedDate <= today && selectedDate >= new Date(firstGameDate)) {
      onSelectDate(selectedDate);
      setIsModalOpen(false);
    }
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const today = getCorrectedTodayDate(); // Use the exported date function

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
              {selectedYear < today.getFullYear() && (
                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleYearChange(1)} className={styles.navIcon} />
              )}
            </div>
            <div className={styles.divider}></div>
            <div className={styles.months}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                <div
                  key={index}
                  className={`${styles.month} ${index === selectedMonth ? styles.selectedMonth : ''}`}
                  onClick={() => handleMonthChange(index)}
                  style={{
                    cursor: (selectedYear === today.getFullYear() && index > today.getMonth()) ||
                            (new Date(selectedYear, index, 1) < new Date(firstGameDate))
                            ? 'not-allowed' : 'pointer',
                    color: (selectedYear === today.getFullYear() && index > today.getMonth()) ||
                           (new Date(selectedYear, index, 1) < new Date(firstGameDate))
                           ? 'gray' : 'black'
                  }}
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
                  className={`${styles.day} ${today.getFullYear() === selectedYear && today.getMonth() === selectedMonth && today.getDate() === day ? styles.today : ''}`} 
                  onClick={() => handleDateSelect(day)}
                  style={{
                    cursor: new Date(selectedYear, selectedMonth, day) > today ||
                            new Date(selectedYear, selectedMonth, day) < new Date(firstGameDate)
                            ? 'not-allowed' : 'pointer',
                    color: new Date(selectedYear, selectedMonth, day) > today ||
                           new Date(selectedYear, selectedMonth, day) < new Date(firstGameDate)
                           ? 'gray' : 'black'
                  }}
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
