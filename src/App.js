// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoverPage from './Pages/CoverPage';
import GamePage from './Pages/GamePage';
import ContactPage from './Pages/ContactPage'; 
import PrivacyPolicy from './Pages/PrivacyPolicy';
import NoPage from './Pages/NoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/play" element={<GamePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
