import { useContext } from "react";
import { MdLocationOn, MdSearch, MdSettings, MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContetxt";

export default function Header() {
    const { dark, setDark, saveThemeToLocal } = useContext(ThemeContext);

    function themeHandle() {
        setDark(!dark);
        saveThemeToLocal(!dark);
    }

    return (
        <div className={`header ${dark ? 'dark-bar' : 'light-bar'}`}>
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="text-center flex flex-row items-center">
                        <MdLocationOn className="text-xl" />
                        <h1 className="text-lg md:text-xl lg:text-2xl">Marrakech, MA</h1>
                    </div>
                    <div className="search w-full md:w-1/2 flex flex-row-reverse items-center mt-2 md:mt-0">
                        <div className="search-input w-full">
                            <input
                                type="text"
                                className={`w-full rounded-md text-center ring-1 outline-none ${dark ? 'dark-input' : 'light-input'}`}
                                placeholder="Search..."
                            />
                        </div>
                        <div className="search-icon absolute">
                            <MdSearch className="text-xl" />
                        </div>
                    </div>
                    <div className="settings flex flex-row items-center absolute md:static end-0 -translate-y-5 md:translate-y-0 -translate-x-4 md:translate-x-0 mt-2 md:mt-0">
                        <div className="theme cursor-pointer" onClick={themeHandle}>
                            {dark ? <IoMoonSharp className="text-xl" /> : <MdSunny className="text-xl" />}
                        </div>
                        <div className="setting ms-4">
                            <MdSettings className="text-xl" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}