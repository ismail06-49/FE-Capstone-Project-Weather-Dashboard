import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { WeatherContext } from "../context/WeatherContext";
import CurrentWeather from "./CurrentWeather";
import WeatherCard from "./WeatherCard";
import LoadingPage from "./LoadingPage";

export default function Main() {

    const { dark } = useContext(ThemeContext)
    const { loading, currentWeather, hourlyForecast, dailyForecast,} = useContext(WeatherContext)

    return (
        <div className={dark ? 'dark-main' : 'light-main'}>
            {
                loading ? <LoadingPage /> : <div>
                    <CurrentWeather data={currentWeather} />
                    <WeatherCard type='hourly' title='HOURLY FORECAST' data={hourlyForecast} />
                    <WeatherCard type='daily' title='DAILY FORECAST' data={dailyForecast} />
                </div>
            }
        </div>
    )
}