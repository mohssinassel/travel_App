
import './Destination.css';
import {NavLink} from "react-router-dom";


const Destination = () =>{
    return(
    <div className='mainDestination'>
        <p className='destinationTitle'>Top Destination</p>
        <div className='Destination'>
            <ul className='Destination1'>
                <li>
                    <div><p>New York</p>
                    </div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                    </ul>
                </li> 
                <li>
                    <div>
                    <p>California</p>
                    </div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                    </ul>
                    </li>
            </ul>
            <ul className='Destination2'>
                <li>
                    <div><p>Los Angless</p></div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                    </ul>
                    </li>
                <li>
                    <div><p>Miami</p></div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        {/* <li><NavLink className='nav-link'>2 Hotels</NavLink></li>    */}
                    </ul>
                </li>
                <li>
                    <div><p>Orlando</p></div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                    </ul>
                </li>
                <li>
                    <div><p>Dallas</p></div>
                    <ul className='second-ul'>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                        <li><NavLink className='nav-link'>2 Hotels</NavLink></li>
                    </ul>
                    </li>
            </ul>
            
        </div>
    </div>
    )
}
export default Destination;