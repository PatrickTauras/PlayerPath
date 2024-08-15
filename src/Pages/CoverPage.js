import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/BottomSection';
import styles from './ContactPage.module.css'; // Ensure to create and import the CSS module

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className={styles.contactPage}>
      <button 
        onClick={() => navigate('/play')} 
        className={styles.backButton}
      >
        Back
      </button>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactPage;
