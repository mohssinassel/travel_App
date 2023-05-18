import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [userData, setUserData] = useState([]);

    const fun = async () => {
        const response = await axios.get('http://localhost:80/Travel/api/index.php')
    
        if(response.data){
            setUserData(response.data);}
            else{
                console.log(response.error);
            }
    }
    useEffect( () =>{fun()},[])
    return (
        <div>
        <h1>User Data</h1>
        <ul>
            {userData.map(user => (
            <li key={user.id}>
                <p>ID: {user.id}</p>
                {/* <p>Name: {user.name}</p> */}
                <p>Email: {user.email}</p>
            </li>
            ))}
    
        </ul>
        </div>
    );
    };

export default Test;
