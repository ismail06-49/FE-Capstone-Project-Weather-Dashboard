import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ThemeProvider from './context/ThemeContetxt';
import WeatherProvider from './context/WeatherContext';

export default function App() {

  
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Header />
        <Main />
        <Footer />
      </WeatherProvider>
    </ThemeProvider>
  )
}
