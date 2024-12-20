import { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import CurrentWeather from "./CurrentWeather";
import WeatherCard from "./WeatherCard";
import current from '../api/Current.json';
import data from '../api/Hourly.json';

export default function Main() {

    const { dark } = useContext(ThemeContext)
    const [hourly, setHourly] = useState([])
    useEffect(() => {
        setHourly(data.hourly.data)
    }, [])

    return (
        <div className={dark ? 'dark-main': 'light-main'}>
            <CurrentWeather data={current} />
            <WeatherCard title='HOURLY FORECAST' data={hourly} />
        </div>
    )
}