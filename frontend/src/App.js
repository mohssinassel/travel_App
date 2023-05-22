
import './App.css';
import NavBar from './components/navBar/NavBar';

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
