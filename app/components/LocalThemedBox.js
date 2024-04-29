'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
    // Access theme and toggleTheme function from the context
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Function to toggle the local theme
    const toggleLocalTheme = () => {
        // Implement logic to toggle the local theme
    };

    return (
        <div style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box" className={`bg-${theme}`}>
            <p id="local-themed-text-container" className={`txt-${theme}`}>
                Local Themed Text
            </p>
            <button
                id="local-theme-toggler"
                className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}
                onClick={toggleLocalTheme}
            >
                {theme === "light" ? "Toggle local theme to dark" : "Toggle local theme to light"}
            </button>
        </div>
    );
}

export { LocalThemedBox };
