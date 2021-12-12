import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import { Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Footer from "./components/Footer";
import HotelList from './pages/HotelList'
import HotelDetails  from "./pages/HotelDetails";
import HotelPayment  from "./pages/HotelPayment";
import Congratulations  from "./pages/Congratulations";
import NotFound from "./pages/NotFound";


const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
          <Suspense fallback="loading">
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/hotellist' element={<HotelList/>}/>
              <Route path='/details/:id' element={<HotelDetails/>}/>
              <Route path='/payment/:id' element={<HotelPayment/>}/>
              <Route path='/congratulations/:id' element={<Congratulations/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
            </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
