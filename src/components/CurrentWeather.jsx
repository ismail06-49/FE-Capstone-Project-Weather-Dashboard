import { useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeContext } from '../context/ThemeContetxt';
import { WeatherContext } from '../context/WeatherContext';

export default function CurrentWeather({data}) {
    const { url, dark } = useContext(ThemeContext);
    const { units } = useContext(WeatherContext);

    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data;

    const info = [
        {
            id: 0,
            icon: 'droplet',
            name: 'Precipitation',
            value: Math.round(precipitation.total),
            unit: units.precipitation
        },
        {
            id: 1,
            icon: 'wind',
            name: 'Wind',
            value: Math.round(wind.speed),
            unit: units.wind_speed
        },
        {
            id: 2,
            icon: 'moisture',
            name: 'Humidity',
            value: Math.round(humidity),
            unit: units.humidity
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: 'UV Index',
            value: Math.round(uv_index),
            unit: units.uv_index
        },
        {
            id: 4,
            icon: 'clouds-fill',
            name: 'Cloud Cover',
            value: Math.round(cloud_cover),
            unit: units.cloud_cover
        },
        {
            id: 5,
            icon: 'eye',
            name: 'Visibility',
            value: Math.round(visibility),
            unit: units.visibility
        }
    ];

    return (
        <div className={`${dark ? 'dark-card' : 'light-card'} max-w-md md:max-w-full mx-auto p-4 rounded-lg shadow-md`}>
            <div className="flex flex-col items-center md:absolute md:start-1/2 md:-translate-x-1/2">
                <div className="weather-icon mb-4">
                    <img src={`${url}/${icon_num}.png`} alt={summary} className="w-24 h-24" />
                </div>
                <div className="current-value text-center">
                    <div className="real text-3xl font-bold">
                        {Math.round(temperature)} {units.temperature}
                    </div>
                    <div className="feels-like text-gray-500">
                        Feels Like: {Math.round(feels_like)} {units.temperature}
                    </div>
                </div>
                <div className="summary text-center mt-2 text-lg">{summary}</div>
            </div>
            <div className="info grid grid-cols-2 gap-4 mt-6">
                {info.map(({ id, icon, name, value, unit }) => (
                    <div className="item flex flex-col items-center" key={id}>
                        <div className="info-item flex items-center">
                            <div className="icon text-2xl">
                                <i className={`bi bi-${icon}`}></i>
                            </div>
                            <div className="value ml-2 text-xl">{value} {unit}</div>
                        </div>
                        <div className="name text-sm text-gray-500">{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}