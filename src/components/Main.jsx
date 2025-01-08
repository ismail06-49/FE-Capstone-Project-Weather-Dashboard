import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { WeatherContext } from "../context/WeatherContext";
import CurrentWeather from "./CurrentWeather";
import WeatherCard from "./WeatherCard";
import LoadingPage from "./LoadingPage";
import { ToastContainer } from "react-toast";

export default function Main() {

    // Using useContext to access the theme and weather contexts
    const { dark } = useContext(ThemeContext)
    const { loading, currentWeather, hourlyForecast, dailyForecast,} = useContext(WeatherContext)

    return (
        // Main container with dynamic class based on the theme (dark or light)
        <div className={dark ? 'dark-main' : 'light-main'}>
            {
                // Conditional rendering: If loading is true, show the LoadingPage component
                loading ? <LoadingPage /> : 
                // Otherwise, render the weather data
                <div>
                    {/* Display the current weather using the CurrentWeather component */}
                    <CurrentWeather data={currentWeather} />
                    {/* Display the hourly forecast using the WeatherCard component */}
                    <WeatherCard type='hourly' title='HOURLY FORECAST' data={hourlyForecast} />
                    {/* Display the daily forecast using the WeatherCard component */}
                    <WeatherCard type='daily' title='DAILY FORECAST' data={dailyForecast} />
                </div>
            }
            {/* ToastContainer for displaying notifications with a delay of 3000ms (3 seconds) */}
            <ToastContainer delay={3000} />
        </div>
    )
}