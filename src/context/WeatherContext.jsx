import { useEffect, useState, createContext } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEM, UNITS} from '../constant'
import { getWeatherData } from "../api";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {

    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEM.AUTO);
    const [units, setUnits] = useState({})

    useEffect(() => {
        async function fetchWeatherData() {
            setLoading(true);

            const currentData = await getWeatherData('current', place.place_id, measurementSystem);
            setCurrentWeather(currentData.current)
            setUnits(UNITS[currentData.units])

            const hourlyData = await getWeatherData('hourly', place.place_id, measurementSystem);
            setHourlyForecast(hourlyData.hourly.data)

            const dailyData = await getWeatherData('daily', place.place_id, measurementSystem);
            setDailyForecast(dailyData.daily.data)

            setLoading(false)
        }
        fetchWeatherData()
    }, [place, measurementSystem])

    return (
        <WeatherContext.Provider value={{ place, setPlace, loading, currentWeather, hourlyForecast, dailyForecast, measurementSystem, setMeasurementSystem, units }}>
            {children}
        </WeatherContext.Provider>
    )

}

export { WeatherContext };