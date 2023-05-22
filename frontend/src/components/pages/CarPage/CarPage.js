
// import {NavLink} from "react-router-dom";
import '../HotelPage/HotelPage.css';
import {BsHeart , BsFillStarFill} from "react-icons/bs"
import {TiLocation} from 'react-icons/ti';
import { useState , useEffect } from 'react';
import axios from 'axios';


const CarPage = () => {
    const [userData, setUserData] = useState([]);

    const fun = async () => {
        const response = await axios.get('http://localhost:80/Travel/api/Element/car.php')
        console.log(response);
        if(response.data){
            setUserData(response.data);}
            else{
                console.log(response.error);
            }
    }
    useEffect( () =>{fun()},[])
    return(
        <div className="WholePage">
            <div className="leftSide">
                <div className="searchPage">
                    <form className="pageForm">
                        <label>Location</label>
                        <input type="text"></input>
                        <label>Date</label>
                        <input type="date"></input>
                        <label>Gestes</label>
                        <input type="text"></input>
                        <input type="submit" className='submit'></input>
                    </form>
                </div>
                <div className='filter'>
                    
                </div>
            </div>
            <div className="rightSide">
                <div>
                    <h3>16 Hotel Found</h3>
                </div>
                <div >
                    <div className='mainResult'>
                    {userData.map(user => (
                        <div key={user.id}>
                            <div className="imageTrend" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0)),url(${user.img_url})`}}>
                                <p><BsHeart/></p>
                                <div className="locationTrend">
                                <p> <TiLocation/></p>
                                <p>{user.city}</p>
                                </div>
                                </div>
                            <div className="infoTrend">
                                {/* <div className="starTrend"><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/></div> */}
                                <div className="nameTrend">{user.marque}</div>
                                <div className="trendRate">
                                    <div>{user.rate}/5</div>
                                    <div>({user.Review} reviews)</div>
                                </div>
                                <div>From <span>{user.price}</span>/ Night</div>
                            </div>
                        </div>
                        ))}


                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CarPage;