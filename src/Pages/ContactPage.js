// src/Pages/ContactPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThankYouModal from '../Components/ThankYouModal'; // Ensure correct import path
import styles from './ContactPage.module.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kxcy48o', 'template_f3kdwir', e.target, '-1N3uiUNGCHbyyzZj')
      .then((result) => {
        setIsModalOpen(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <div className={styles.contactPage}>
      <button onClick={() => navigate('/play')} className={styles.backButton}>Back</button>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name<span className={styles.required}>*</span></label>
          <div className={styles.nameFields}>
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required className={styles.input} />
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required className={styles.input} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Email<span className={styles.required}>*</span></label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label>Message<span className={styles.required}>*</span></label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className={styles.textarea} />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactPage;
