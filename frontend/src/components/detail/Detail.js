import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {TiLocation} from 'react-icons/ti';
import './Detail.css';

const Detail = () => {
  // Access the card id from URL parameter
    const location = useLocation();
    const { user } = location.state;

    // Use the user data in this component

    return (
        <div style={{alignItems : 'center'}}>
        <div className='backDetail' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/${user.img_url}')`}}>
        </div>
        <div className='containerDetail'>
        <div className='mainDetail'>
            <div className='firstDetail'>
                <div>{user.titre}</div>
                <div className='book'>BOOK NOW</div>
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