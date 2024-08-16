// src/Pages/PrivacyPolicyPage.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.privacyPolicyPage}>
      <button onClick={() => navigate('/play')} className={styles.backButton}>Back</button>
      <div className={styles.content}>
        <h1>Privacy Policy</h1>
        <p>Last updated: July 7, 2024</p>

        <h2>Introduction</h2>
        <p>Welcome to PlayerPath's Privacy Policy. Your privacy is critically important to us.</p>

        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>We do not collect any personal data not given to us directly through the contact form (First and Last Name Plus Email Address). Personal data refers to any information that can directly or indirectly identify an individual, such as name, email, and address.</p>
        <h3>Non-Personal Data</h3>
        <p>We do not collect non-personal data either. Non-personal data refers to information that cannot be used to identify an individual. This includes aggregated or anonymized data, such as statistical or demographic data, which can help understand how users interact with our website and services.</p>

        <h2>Use of Local Storage</h2>
        <p>We use local storage to enhance your experience on our site. Local storage allows us to save text files on your device when you visit our site. We utilize this to store your personal game progress, including streaks and win rates, so you can track your achievements over time.</p>
        <p>If you prefer not to use local storage, you can adjust your browser settings to disable it. However, be aware that this may affect the functionality of some features on our site.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>

        <h2>Data Security</h2>
        <p>We strive to use commercially acceptable means to protect your personal data, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure.</p>

        <h2>Your Data Protection Rights</h2>
        <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at <Link to="/contact">Contact Us</Link>.</p>

        <h2>Data Retention</h2>
        <p>We retain your personal data only for as long as necessary to fulfill the purposes we collected it for.</p>

        <h2>Third-Party Services</h2>
        <p>We may employ third-party companies and individuals to perform services on our behalf, such as analytics and advertising. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. External Links: PlayerPath may work with some third-party advertising companies to deliver ads when you play our game. We encourage you to review the privacy policies of these agencies for more information about their data practices.</p>

        <h2>Children’s Privacy</h2>
        <p>Our services do not address anyone under the age of 13. If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers immediately.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <Link to="/contact">Contact Us</Link>.</p>

        <h2>Acceptance of This Policy</h2>
        <p>By using this Website, you signify your agreement to the terms of our privacy policy. If you do not agree with these terms, please do not use our website. Continued use of the website following the posting of changes to these terms means you accept those changes.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
