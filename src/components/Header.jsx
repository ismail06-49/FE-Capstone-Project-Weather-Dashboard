import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { WeatherContext } from "../context/WeatherContext";
import { searchPlaces } from "../api";
import { MdLocationOn, MdSearch, MdSettings, MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { MEASUREMENT_SYSTEM } from "../constant";

export default function Header() {
    const { dark, setDark, saveThemeToLocal } = useContext(ThemeContext);
    const { place, setPlace, measurementSystem, setMeasurementSystem } = useContext(WeatherContext);
    const [text, setText] = useState('');
    const [search, setSearch] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    function themeHandle() {
        setDark(!dark);
        saveThemeToLocal(!dark);
    }

    async function handleSearch(e) {
        setText(e.target.value)
        const data = await searchPlaces(e.target.value)
        setSearch(data)
        setShowSearch(data.length)
    }

    const changePlaces = (place) => {
        setPlace(place)
        setText('')
        setShowSearch(false)
    }

    const changeMeasurementSystem = (system) => {
        setMeasurementSystem(system)
        setShowSettings(false)
    }

    return (
        <div className={`header ${dark ? 'dark-bar' : 'light-bar'}`}>
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="text-center hover:scale-110 cursor-pointer flex flex-row items-center">
                    <MdLocationOn className="text-xl" />
                    <h1 className="text-lg md:text-xl lg:text-xl">{place.name}, {place.country}</h1>
                </div>
                <div className="search w-full md:w-1/2 flex flex-row-reverse items-center mt-2 md:mt-0">
                    <div className="search-input w-full">
                        <input
                            type="text"
                            className={`w-full text-center hover:border-b outline-none ${dark ? 'dark-input' : 'light-input'}`}
                            placeholder="Search..."
                            value={text}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="search-icon hidden md:block absolute">
                        <MdSearch className="text-xl" />
                    </div>
                    {
                        showSearch && (<div className={`${dark ? 'dark-search' : 'light-search'} absolute min-w-72 top-0 translate-y-20 sm:translate-y-14 rounded-lg`}>
                            {
                                search.length > 0 && search.map((result) => (
                                    <div className="cursor-pointer p-2" key={result.place_id} onClick={() => changePlaces(result)}>
                                        {result.name}, {result.adm_area1}, {result.country}
                                    </div>
                                ))
                            }
                        </div>)
                    }
                </div>
                <div className="settings flex flex-row items-center absolute md:static end-0 -translate-y-5 md:translate-y-0 -translate-x-4 md:translate-x-0 mt-2 md:mt-0">
                    <div className="theme cursor-pointer hover:scale-110" onClick={themeHandle}>
                            {dark ? <IoMoonSharp className="text-xl" /> : <MdSunny className="text-xl" />}
                    </div>
                    <div className="setting hover:scale-110 ms-4 cursor-pointer" onClick={() => setShowSettings(!showSettings)}>
                        <MdSettings className="text-xl" />
                    </div>
                    <div className={`${showSettings ? 'block' : 'hidden'} ${dark ? 'dark-main' : 'light-main'} p-4 absolute w-72 top-0 end-0 translate-y-16 sm:translate-y-9 rounded-3xl`}>
                        <h4>Measurement System</h4>
                        <div className={`mt-4 flex flex-row gap-2 flex-wrap items-center`}>
                            {Object.values(MEASUREMENT_SYSTEM).map((system) => (
                                <div className={`${dark ? 'dark-card' : 'light-card'} ${system === measurementSystem ? 'opacity-100' : 'opacity-50'} cursor-pointer w-20 h-8 rounded-lg text-center`} onClick={() => changeMeasurementSystem(system)} key={system}>{system}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}