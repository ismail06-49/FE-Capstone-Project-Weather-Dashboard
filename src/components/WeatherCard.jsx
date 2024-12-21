import HorizontalScroll from "./HorizontalScroll";
import HourlyWidget from "./HourlyWidget";

export default function WeatherCard({title, data}) {
    
    const dayHours = data.slice(0, 24)
    
    return (
        <div className="Weather-card">
            <h2 className="my-4 ms-4 text-3xl">{title}</h2>
            <HorizontalScroll className="flex flex-row overflow-hidden" style={{cursor: 'pointer', overflowX: 'hidden'}}>
                {dayHours.map((singleData) => (
                    <div key={singleData.date}>
                        <HourlyWidget data={singleData} />
                    </div>
                ))}
            </HorizontalScroll>
        </div>
    )
}