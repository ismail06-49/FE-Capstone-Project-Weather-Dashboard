import { useEffect, useState, createContext } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEM, UNITS} from '../constant'
import { getWeatherData } from "../api";

// Create a context for weather data to be shared across components
const WeatherContext = createContext();

// WeatherProvider component to manage and provide weather-related data
export default function WeatherProvider({ children }) {

    // State to manage the selected place (default is set from constants)
    const [place, setPlace] = useState(DEFAULT_PLACE);

    // State to manage loading status (true while fetching data)
    const [loading, setLoading] = useState(true);

    // State to store current weather data
    const [currentWeather, setCurrentWeather] = useState({});

    // State to store hourly forecast data
    const [hourlyForecast, setHourlyForecast] = useState([]);

    // State to store daily forecast data
    const [dailyForecast, setDailyForecast] = useState([]);

    // State to manage the measurement system (e.g., metric, imperial, auto)
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEM.AUTO);

    // State to store units based on the measurement system
    const [units, setUnits] = useState({});

    // useEffect to fetch weather data whenever the place or measurement system changes
    useEffect(() => {
        async function fetchWeatherData() {
            setLoading(true); // Set loading to true before fetching data

            // Fetch current weather data
            const currentData = await getWeatherData('current', place.place_id, measurementSystem);
            setCurrentWeather(currentData.current)
            setUnits(UNITS[currentData.units])

            // Fetch hourly forecast data
            const hourlyData = await getWeatherData('hourly', place.place_id, measurementSystem);
            setHourlyForecast(hourlyData.hourly.data)

            // Fetch daily forecast data
            const dailyData = await getWeatherData('daily', place.place_id, measurementSystem);
            setDailyForecast(dailyData.daily.data)

            setLoading(false) // Set loading to false after data is fetched
        }
        fetchWeatherData()
    }, [place, measurementSystem])

    // Provide the weather context to all child components
    return (
        <WeatherContext.Provider value={{ place, setPlace, loading, currentWeather, hourlyForecast, dailyForecast, measurementSystem, setMeasurementSystem, units }}>
            {children}
        </WeatherContext.Provider>
    )

}

export { WeatherContext };