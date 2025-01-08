import HorizontalScroll from "./HorizontalScroll";
import HourlyWidget from "./HourlyWidget";
import DailyWidget from "./DailyWidget";

// WeatherCard component that takes three props: type (hourly/daily), title (card title), and data (weather data)
export default function WeatherCard({type, title, data}) {
    
    return (
        <div className="Weather-card">
            {/* Card title */}
            <h2 className="my-4 ms-4 text-3xl">{title}</h2>
            
            {/* Horizontal scroll container for weather widgets */}
            <HorizontalScroll className="flex flex-row overflow-hidden" style={{cursor: 'pointer', overflowX: 'hidden'}}>
                {/* Mapping through the data array to render weather widgets */}
                {data.map((singleData) => (
                    <div key={singleData.date || singleData.day}>
                        {/* Conditional rendering: HourlyWidget for hourly data, DailyWidget for daily data */}
                        {
                            type === 'hourly' ?
                                <HourlyWidget data={singleData} /> : <DailyWidget data={singleData} />
                        }
                    </div>
                ))}
            </HorizontalScroll>
        </div>
    )
}