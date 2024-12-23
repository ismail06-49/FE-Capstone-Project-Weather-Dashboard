import { useEffect, useState } from "react";
import HorizontalScroll from "./HorizontalScroll";
import HourlyWidget from "./HourlyWidget";
import DailyWidget from "./DailyWidget";

export default function WeatherCard({type, title, data}) {
    
    const [renderData, setRenderData] = useState([])

    useEffect(() => {

        if (type === 'hourly') {
            return setRenderData(data.slice(0, 24));
        } else if (type === 'daily') {
            return setRenderData(data.slice(0, 7));
        }

    }, [type, data])
    
    return (
        <div className="Weather-card">
            <h2 className="my-4 ms-4 text-3xl">{title}</h2>
            <HorizontalScroll className="flex flex-row overflow-hidden" style={{cursor: 'pointer', overflowX: 'hidden'}}>
                {renderData.map((singleData) => (
                    <div key={singleData.date || singleData.day}>
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