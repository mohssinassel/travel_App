import '../TrendingHotel/TrendingHotel.css'
import {BsFillStarFill} from "react-icons/bs";
import {AiFillHeart} from 'react-icons/ai';
import {TiLocation} from 'react-icons/ti';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";

const TrendingCar =() => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
        setFavorites(favorites.filter((fav) => fav !== id));
        } else {
        setFavorites([...favorites, id]);
        }
    };
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
        <div className="mainTrending">
                    
                    {userData.slice(0, 8).map(user => (
                        <div key={user.id}>
                            <div className="imageTrend" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url(${user.img_url})`}}>
                            <p onClick={() => toggleFavorite(user.id)}>
                                    <AiFillHeart className={favorites.includes(user.id) ? 'fav' : 'notfav'}/>
                                    </p> 
                                <div className="locationTrend">
                                <p> <TiLocation/></p>
                                <p>{user.city}</p>
                                <p className={user.is_featured == 1 ? "featured" : "featuredNone"}>featured</p>
                                </div>
                                </div>
                            <NavLink to={`/Hotel/${user.id}`} state={{ user }} style={{textDecoration : 'none', color : 'black'}}>
                            <div className="infoTrend">
                                {/* <div className="starTrend"><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/><BsFillStarFill className="star"/></div> */}
                                <div className="nameTrend">{user.marque}</div>
                                <div className="trendRate">
                                    <div>{user.rate}/5</div>
                                    <div>({user.review} reviews)</div>
                                </div>
                                <div>From <span>{user.price}</span>/ Night</div>
                                <div className='carInfo'>
                                    <div><span> {user.passenger}</span>seats</div>
                                    <div><span>{user.baggage}</span>baggage</div>
                                    <div><span>{user.door}</span>door</div>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                        ))}
                
                
                
            
        </div>
    )
}
export default TrendingCar;