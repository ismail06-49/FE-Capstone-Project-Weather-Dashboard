import { useContext } from 'react'
import { CircleLoader } from 'react-spinners'
import { ThemeContext } from '../context/ThemeContetxt'

// Define the LoadingPage component
export default function LoadingPage() {
    
    // Access the theme context to determine if dark mode is enabled
    const { dark } = useContext(ThemeContext)

    return (
        // Main container for the loading page
        <div className="loading-page h-screen">
            <div className={`${dark ? 'dark-main' : 'light-main'} h-full flex flex-col items-center justify-center`}>
                <CircleLoader color={`${dark ? 'white' : 'black'}`} size={100} />
                <p className='mt-4 text-2xl'>Wait until the page loads...</p>
            </div>
        </div>
    )
}