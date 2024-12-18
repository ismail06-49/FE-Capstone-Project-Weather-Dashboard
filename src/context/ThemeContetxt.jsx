import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [dark, setDark] = useState(false);
    const url = '../../public/dist/weather_icons/set04/big'

    function saveThemeToLocal(theme) {
        localStorage.setItem('theme', JSON.stringify(theme))
    }

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('theme'));
        if (storedTheme !== null) {
            setDark(storedTheme);
            return;
        }

        const isSysthemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(isSysthemDark);
    }, [])

    return (
        <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocal, url }}>
            {children}
        </ThemeContext.Provider>
    )
}