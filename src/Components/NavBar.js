import React from 'react';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();

    // Render nothing if not on the root page
    return null;
};
