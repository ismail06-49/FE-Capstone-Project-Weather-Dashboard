import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ThemeProvider from './context/ThemeContetxt';
import WeatherProvider from './context/WeatherContext';

// Main App component that serves as the root of the application
export default function App() {
  return (
    // Wrapping the entire application with ThemeProvider to manage theme-related state
    <ThemeProvider>
      {/* Wrapping the application with WeatherProvider to manage weather-related state */}
      <WeatherProvider>
        {/* Rendering the Header component at the top of the application */}
        <Header />
        {/* Rendering the Main component as the central content of the application */}
        <Main />
        {/* Rendering the Footer component at the bottom of the application */}
        <Footer />
      </WeatherProvider>
    </ThemeProvider>
  )
}
