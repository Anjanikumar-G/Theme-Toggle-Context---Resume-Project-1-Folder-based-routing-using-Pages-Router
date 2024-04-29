'use client'
import React, { createContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Define the ThemeProvider component
const ThemeProvider = (props) => {
    // State to hold the current theme
    const [theme, setTheme] = useState("light");

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    // Context value containing the current theme and toggle function
    const contextValue = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
