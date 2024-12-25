import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { WeatherContext } from "../context/WeatherContext";
import { BsFillSendFill } from "react-icons/bs";

export default function HourlyWidget(data) {
    
    const { url, dark } = useContext(ThemeContext);
    const { units } = useContext(WeatherContext);

    const {
        date,
        icon,
        summary,
        temperature,
        precipitation,
        wind
    } = data.data;
    console.log(data);
    

    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date().setMinutes(0))
    };
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date).setMinutes(0))
    };

    weather_date.day = weather_date.day === now_date.day && 
        weather_date.time === now_date.time ? 'Today' :
        weather_date.time === '00:00' ? weather_date.day : '';

    return (
        <div className={`${dark ? 'dark-card' : 'light-card'} hover:scale-110 widget shadow-md h-52 w-40 rounded-lg p-4 m-2 flex flex-col items-center justify-between`}>
            <div className="day text-lg font-semibold">{weather_date.day}</div>
            <div className="time text-sm text-gray-500">{weather_date.time}</div>
            <div className="temperature flex items-center mt-2">
                <div className="icon mr-2">
                    <img src={`${url}/${icon}.png`} alt={summary} className="w-12 h-12" draggable={false} />
                </div>
                <div className="temp text-2xl font-bold">{Math.round(temperature)} {units.temperature}</div>
            </div>
            <div className="precipitation text-sm text-gray-500 mt-2">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
            <div className="wind flex items-center mt-2">
                <div className="wind-speed text-sm">{Math.round(wind.speed)} {units.wind_speed}</div>
                <div className="wind-direction ml-2" style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
                    <BsFillSendFill className="w-5 h-5 text-gray-700" />
                </div>
            </div>
        </div>
    );
}