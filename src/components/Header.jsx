import { useContext } from "react";
import { MdLocationOn, MdSearch, MdSettings, MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContetxt";

export default function Header() {

    const { dark, setDark, saveThemeToLocal } = useContext(ThemeContext);

    function themeHandle() {
        setDark(!dark)
        saveThemeToLocal(!dark)
    }
    
    return (
        <div className={`header ${dark ? 'dark-bar' : 'light-bar'}`}>
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="text-center flex flex-row items-center">
                        <MdLocationOn />
                        <h1>Marrakech, MA</h1>
                    </div>
                    <div className="search w-1/2 flex flex-row-reverse items-center">
                        <div className="search-input w-full">
                            <input type="text" className={`w-full rounded-md ring-1 outline-none ${dark ? 'dark-input' : 'light-input'}`} placeholder=" Search..." />
                        </div>
                        <div className="search-icon absolute">
                            <MdSearch />
                        </div>
                    </div>
                    <div className="settings flex flex-row items-center">
                        <div className="theme" onClick={themeHandle}>
                            {dark ? <IoMoonSharp /> : <MdSunny /> }
                        </div>
                        <div className="setting ms-4">
                            <MdSettings />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
