
// import {NavLink} from "react-router-dom";
import './HotelPage.css';
import { BsFillStarFill} from "react-icons/bs";
import {AiFillHeart} from 'react-icons/ai';
import {TiLocation} from 'react-icons/ti';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const HotelPage = () => {
    // const img = 'images/hotel/hotel1.jpg';
    const [searchName, setSearchName]= useState("")
        
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
        setFavorites(favorites.filter((fav) => fav !== id));
        } else {
        setFavorites([...favorites, id]);
        }
    };
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
            }
        }, []);
        
        // Save favorites to local storage whenever it changes
        useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }, [favorites]);
    
    const [userData, setUserData] = useState([]);
    

    const fun = async () => {
        const response = await axios.get('http://localhost:80/Travel/api/Element/hotel.php')
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
                        <input type="text" onChange={(event) =>{setSearchName(event.target.value);}}></input>
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
                
                <div >
                    <div className='mainResult'>
                    {userData.filter((user)=>{
                        if(searchName == ""){
                            return user
                        }else if (user.city.toLowerCase().includes(searchName.toLowerCase())){
                            return user
                        }
                    }).map(user => (
                        <div key={user.id}>
                            <div className='imageTrend'  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url(${user.img_url})`}}>
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
                                <div className="starTrend">
                                    {Array.from({ length: user.star_rate }).map((_, i) => (
                                        <BsFillStarFill key={i} className='star' />
                                    ))}
                                </div>
                                <div className="nameTrend">{user.titre}</div>
                            
                                <div className="trendRate">
                                    <div>{user.rate}/5</div>
                                    <div>({user.review} reviews)</div>
                                </div>
                                <div>From <span>{user.price}$</span>/ Night</div>
                            </div>
                            </NavLink>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default HotelPage;