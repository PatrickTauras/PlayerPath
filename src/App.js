import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './Pages/GamePage'; // Import the GamePage component
import ContactPage from './Pages/ContactPage'; 
import PrivacyPolicy from './Pages/PrivacyPolicy';
import NoPage from './Pages/NoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PlayerPath-Deployment" element={<GamePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} /> {/* Optional: Handle non-existing routes */}
      </Routes>
    </Router>
  );
};

export default App;
