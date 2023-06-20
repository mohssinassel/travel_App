
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
import Detail from './components/detail/Detail';
import Test from './Test';
import { useState } from 'react';
// import signIn from './components/signIn/signIn';

import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [Username,setUsername] = useState(undefined);
  return (

    <div className="App">
      <div className='AppHome'>
      <ToastContainer />
      <NavBar setUsername={setUsername}/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Hotel' Component={HotelPage} ></Route>
        <Route path='/Tour' Component={TourPage}></Route>
        <Route path='/Car' Component={CarPage}></Route>
        <Route path='/Flight' Component={FlightPage}></Route>
        <Route path='/Boat' Component={BoatPage}></Route>
        <Route path='/Event' Component={EventPage}></Route>
        <Route path="/:choix/:id" Component={() => <Detail Username={Username} />}></Route>
      </Routes>
      </div>
      {/* <Test/>  */}
      {/* <signIn/> */}
      <Footer Username={ Username }/>
    </div>
  );
}

export default App;
