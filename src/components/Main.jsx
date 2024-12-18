import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { ThemeContext } from "../context/ThemeContetxt";

export default function Main() {

    const {dark} = useContext(ThemeContext)

    return (
        <div className={dark ? 'dark-main': 'light-main'}>
            <CurrentWeather />
        </div>
    )
}