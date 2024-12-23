import { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import CurrentWeather from "./CurrentWeather";
import WeatherCard from "./WeatherCard";
import current from '../api/Current.json';
import hourlyData from '../api/Hourly.json';
import dailyData from '../api/Daily.json';

export default function Main() {

    const { dark } = useContext(ThemeContext)
    const [hourly, setHourly] = useState([])
    const [daily, setDaily] = useState([])

    useEffect(() => {
        setHourly(hourlyData.hourly.data)
        setDaily(dailyData.daily.data)
    }, [])

    return (
        <div className={dark ? 'dark-main': 'light-main'}>
            <CurrentWeather data={current} />
            <WeatherCard type='hourly' title='HOURLY FORECAST' data={hourly} />
            <WeatherCard type='daily' title='DAILY FORECAST' data={daily} />
        </div>
    )
}