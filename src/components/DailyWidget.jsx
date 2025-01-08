import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { WeatherContext } from "../context/WeatherContext";

// DailyWidget component that displays daily weather information
export default function DailyWidget({ data }) {

    // Using useContext to access theme and weather context values
    const { url, dark } = useContext(ThemeContext)
    const { units } = useContext(WeatherContext);

    // Destructuring the data prop to extract necessary weather information
    const {
        day,
        icon,
        summary,
        temperature_max,
        temperature_min,
        precipitation,
        weather
    } = data;

    // Formatting the current date to match the format of the weather data
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date())
    }

    // Formatting the weather date to match the format of the current date
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date(day))
    }

    // If the weather date is the same as the current date, display "Today" instead of the date
    weather_date.day = weather_date.day === now_date.day ? 'Today' : weather_date.day;

    // Rendering the widget with weather information
    return (
        <div className={`${dark ? 'dark-card' : 'light-card'} hover:scale-110 widget shadow-md h-52 w-40 rounded-lg p-4 m-2 flex flex-col items-center justify-between`}>
            <div className="day text-lg font-semibold">{weather_date.day}</div>
            <div className="temperature flex flex-col items-center my-2">
                <div className="weather">{weather}</div>
                <div className="icon mr-2">
                    <img src={`${url}/${icon}.png`} alt={summary} className="w-12 h-12" draggable={false} />
                </div>
                <div className="temp text-xl flex flex-row font-semibold">
                    {Math.round(temperature_max)} {units.temperature}<span className="opacity-50 ms-2">{Math.round(temperature_min)} {units.temperature}</span>
                </div>
            </div>
            <div className="precipitation text-sm mt-2">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
        </div>
    )
}