import { MdLocationOn, MdSearch, MdSettings, MdSunny } from "react-icons/md";

export default function Header() {
    
    return (
        <div className="header dark-bar">
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="text-center flex flex-row items-center">
                        <MdLocationOn />
                        <h1>Marrakech, MA</h1>
                    </div>
                    <div className="search w-1/2 flex flex-row-reverse items-center">
                        <div className="search-input w-full">
                            <input type="text" className="w-full rounded-md ring-1 outline-none dark-input" placeholder=" Search..." />
                        </div>
                        <div className="search-icon absolute">
                            <MdSearch />
                        </div>
                    </div>
                    <div className="settings flex flex-row items-center">
                        <div className="theme">
                            <MdSunny />
                        </div>
                        <div className="setting">
                            <MdSettings />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
