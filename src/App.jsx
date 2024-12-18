import data from './api/Current.json'
import Header from './components/Header';
import ThemeProvider from './context/ThemeContetxt';

export default function App() {

  console.log(data);
  
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}
