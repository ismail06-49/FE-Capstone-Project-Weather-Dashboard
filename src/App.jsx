import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ThemeProvider from './context/ThemeContetxt';

export default function App() {

  
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}
