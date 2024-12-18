import data from './api/Current.json'
import Header from './components/Header';
import Main from './components/Main';
import ThemeProvider from './context/ThemeContetxt';

export default function App() {

  console.log(data);
  
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  )
}
