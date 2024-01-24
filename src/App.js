import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter,Route,Routes, Link} from "react-router-dom";
import Navbar from './Internship/Navbar'
import WeatherApp from './Internship/Weather-app/components/WeatherApp'
import NewsApp from './Internship/News-App/components/NewsApp'
import EmpApp from './Internship/Emp-App/components/EmpApp'
import CalendarApp from './Internship/Calendar-App/components/CalendarApp'
import Footer from './Internship/Footer';
import './App.css'

export default function App() {
  return (
    
    <>
    <div>
      <Navbar/>
    </div>
 <div className=" border border-primary " id='main'>
 <Routes>
   <Route  path='/weather' element={<WeatherApp/>} />
  <Route  path='/news' element={<NewsApp/>} />
  <Route  path='/employee' element={<EmpApp/>} />
  <Route  path='/calendar' element={<CalendarApp/>} />
   </Routes>
 </div>
   <div>
    <Footer/ >
   </div>
    

    </>




    )
}
