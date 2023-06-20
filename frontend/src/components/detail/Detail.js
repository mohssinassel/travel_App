import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {TiLocation} from 'react-icons/ti';
import './Detail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Detail = ({Username}) => {
  // Access the card id from URL parameter
    const location = useLocation();
    const { user } = location.state;

    const handleNotification = () => {
        toast("Reservation Reussi !"); // Affiche une notification
    };
    const handleNotificationError = () => {
        toast("Resevation failed (Pas de compte)"); // Affiche une notification
    };


    // Use the user data in this component
    const sendDataToPHP = async (Username) => {
        try {
        const response = await axios.post('http://localhost:80/Travel/api/Element/boat.php', Username);
          console.log(response.data); // Handle the response as needed
        } catch (error) {
          console.error(error); // Handle errors
        }
    };
    const handleButtonClick = (Username) => {
        // Function 1
        sendDataToPHP(Username);
    
      // Function 2
    handleNotification()
    };
    return (
        <div style={{alignItems : 'center'}}>
        <div className='backDetail' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/${user.img_url}')`}}>
        </div>
        <div className='containerDetail'>
        <div className='mainDetail'>
            <div className='firstDetail'>
                <div>{user.titre}</div>
                <div className='book' onClick={()=> Username === undefined ? handleNotificationError() : handleButtonClick(Username)}>BOOK NOW</div>
            </div>
            <div className='secondDetail'>
                <div><TiLocation size='20'/></div>
                <div>{user.city}</div>
                <div>--</div>
                <div>{user.rate}/5</div>
                <div>({user.review} Review)</div>
            </div>
            <hr></hr>
            <div className='thirdDetail'>
                <div className='descDetail'>Description</div>
                <div>{user.description}</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Detail;