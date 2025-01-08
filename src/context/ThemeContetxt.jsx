import { createContext, useEffect, useState } from "react";

// Create a context for managing the theme
export const ThemeContext = createContext();

// ThemeProvider component to wrap around the application and provide theme-related functionality
export default function ThemeProvider({ children }) {

   // State to manage whether the dark theme is enabled or not
    const [dark, setDark] = useState(false);

    // URL for the weather icons, specific to the theme
    const url = '/weather_icons/set04/big';

    // Function to save the current theme preference to localStorage
    function saveThemeToLocal(theme) {
        localStorage.setItem('theme', JSON.stringify(theme))
    }

    // useEffect hook to initialize the theme based on user preference or system settings
    useEffect(() => {
        // Retrieve the stored theme preference from localStorage
        const storedTheme = JSON.parse(localStorage.getItem('theme'));

        // If a theme preference is stored, set the state to that value
        if (storedTheme !== null) {
            setDark(storedTheme);
            return;
        }

        // If no theme preference is stored, check the system's color scheme preference
        const isSysthemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set the theme based on the system's preference
        setDark(isSysthemDark);
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // Provide the theme state and functions to the children components via Context
    return (
        <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocal, url }}>
            {children}
        </ThemeContext.Provider>
    )
}