

import { useState } from 'react';
import './Trending.css'
import TrendingHotel from './Trendingchoice/TrendingHotel/TrendingHotel';
import TrendingCar from './Trendingchoice/TrendingCar/TrendingCar';
import TrendingEvent from './Trendingchoice/TrendingEvent/TrendingEvent';
import TrendingTour from './Trendingchoice/TrendingTour/TrendingTour';


const Trending = ()=>{
    const [trend , setTrend] = useState("Hotel");
    function trendChoice(search){
        if (search === 'Hotel') {
            return <TrendingHotel/>;
        } else if (search === 'Car') {
            return <TrendingCar />;
        }
        else if (search === 'Tour') {
            return <TrendingTour />;
        }else if (search === 'Event'){
            return <TrendingEvent/>
        }

        
    }
    return(
        <div className='trending'>
            <p>trending</p>
            <ul>
                <li className={trend==="Hotel"?"trendingChoiceActive":"trendingChoice"} onClick={()=>setTrend("Hotel")}>Hotel</li>
                <li className={trend==="Tour"?"trendingChoiceActive":"trendingChoice"} onClick={()=>setTrend("Tour")}>Tour</li>
                <li className={trend==="Car"?"trendingChoiceActive":"trendingChoice"} onClick={()=>setTrend("Car")}>Car</li>
                <li className={trend==="Event"?"trendingChoiceActive":"trendingChoice"} onClick={()=>setTrend("Event")}>Event</li>
            </ul>
            {trendChoice(trend)}
            

        </div>
    )
}

export default Trending;