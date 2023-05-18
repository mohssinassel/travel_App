


import '../../../App.css';
import NavBar from '../../../components/navBar/NavBar';
import { FaHotel ,FaCar} from 'react-icons/fa';
import { MdFlight , MdEvent , MdDirectionsBoat , MdTour} from 'react-icons/md';
import Hotel from '../../../components/Search/Hotel/Hotel';
import Car from '../../../components/Search/Car/Car';
import Boat from '../../../components/Search/Boat/Boat';
import FirstImage from '../../../images/hiker-with-backpack-standing-top-mountain.jpg';
import SecondImage from '../../../images/shot-man-looking-valley-mountains-puez-geisler-nature-park-italy.jpg';
import Destination from '../../../components/Destination/Destination';
import Trending from '../../../components/Trending/Trending'
import {BrowserRouter as Router } from "react-router-dom";  
import { useState } from 'react';
import Tour from '../../../components/Search/Tour/Tour';
import  Event from '../../../components/Search/Event/Event';
import Flight from '../../../components/Search/Flight/Flight';
import { Route } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';






function Home() {
const [search, setSearch] = useState("Hotel");

function searchChoice(search){
    
    if (search === 'Hotel') {
        return <Hotel/>;
    } else if (search === 'Car') {
        return <Car />;
    } else if (search === 'Tour') {
        return <Tour />;
    }else if (search === 'Event'){
        return <Event/>
    }else if(search === 'Flight'){
        return <Flight/>
    }else if(search === 'Boat'){
        return<Boat/>
    }


    }

return (
    <div className='AppHome'>
        <div className='Main'>
            <div className='frontMain'>
                <div className='mainTitle'>
                Let's The World Together!
                </div>
                <div className='searchMain'>
                    <div className='navChoice'> 
                        <button className={search==="Hotel"?"choiceSelected":"choice"} onClick={()=>setSearch("Hotel")}><FaHotel/>&nbsp;Hotel</button>
                        <button className={search==="Tour"?"choiceSelected":"choice"} onClick={()=>setSearch("Tour")}><MdTour/>&nbsp;Tour</button>
                        <button className={search==="Car"?"choiceSelected":"choice"} onClick={()=>setSearch("Car")}><FaCar/>&nbsp;Car</button>
                        <button className={search==="Event"?"choiceSelected":"choice"} onClick={()=>setSearch("Event")}><MdEvent/>&nbsp;Event</button>
                        <button className={search==="Flight"?"choiceSelected":"choice"} onClick={()=>setSearch("Flight")}><MdFlight/>&nbsp;Flight</button>
                        <button className={search==="Boat"?"choiceSelected":"choice"} onClick={()=>setSearch("Boat")}><MdDirectionsBoat/>&nbsp;Boat</button>
                    </div>
            {   searchChoice(search)}
                </div>
            </div>
            <div className='frontPicture'>
                <img src={FirstImage} alt='image1'/>
                <img src={SecondImage} alt='image2'/>
            </div>
            </div><br/>
            <hr/>
            <Destination/>
            <br/><br/>
            <hr/>
            <Trending/>
            <br/><br/>
        </div>
);
}

export default Home;
