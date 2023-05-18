
import './App.css';
import NavBar from './components/navBar/NavBar';
import { FaHotel ,FaCar} from 'react-icons/fa';
import { MdFlight , MdEvent , MdDirectionsBoat , MdTour} from 'react-icons/md';
import Hotel from './components/Search/Hotel/Hotel';
import Car from './components/Search/Car/Car';
import Boat from './components/Search/Boat/Boat';
import FirstImage from './images/hiker-with-backpack-standing-top-mountain.jpg';
import SecondImage from './images/shot-man-looking-valley-mountains-puez-geisler-nature-park-italy.jpg';
import Destination from './components/Destination/Destination';
import Trending from './components/Trending/Trending'
import {BrowserRouter as Router } from "react-router-dom";  
import { useState } from 'react';
import Tour from './components/Search/Tour/Tour';
import  Event from './components/Search/Event/Event';
import Flight from './components/Search/Flight/Flight';
import { Routes , Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import HotelPage from './components/pages/HotelPage/HotelPage';
import TourPage from './components/pages/TourPage/TourPage';
import CarPage from './components/pages/CarPage/CarPage';
import BoatPage from './components/pages/BoatPage/BoatPage';
import FlightPage from './components/pages/FlightPage/FlightPage';
import EventPage from './components/pages/EventPage/EventPage';
import Test from './Test';
// import signIn from './components/signIn/signIn';
function App() {
  return (
    <div className="App">
      <div className='AppHome'>
      <NavBar/>  
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Hotel' Component={HotelPage} ></Route>
        <Route path='/Tour' Component={TourPage}></Route>
        <Route path='/Car' Component={CarPage}></Route>
        <Route path='/Flight' Component={FlightPage}></Route>
        <Route path='/Boat' Component={BoatPage}></Route>
        <Route path='/Event' Component={EventPage}></Route>
      </Routes>
      </div>
      {/* <Test/>  */}
      {/* <signIn/> */}
      <Footer/>
    </div>
  );
}

export default App;
