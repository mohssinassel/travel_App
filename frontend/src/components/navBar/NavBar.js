
import {BsTelephone, BsPerson} from 'react-icons/bs';
import{TfiFacebook, TfiGoogle , TfiLinkedin} from 'react-icons/tfi'
import React from "react";
import './NavBar.css';
// import {BrowserRouter , Routes , Route , Link} from "react-router-dom";



const NavBar = () =>{
    


    return(
    <div className="nav">
        <div className="navBarFirst">
            <ul className="leftFirstBar">
                <li><a href='#a'><TfiFacebook/></a></li>
                <li><a href='#a'><TfiLinkedin/></a></li>
                <li><a href='#a'><TfiGoogle/></a></li>
                <li><a href='#a'>Contact@Travel.com</a></li>
                
            </ul> 
            <ul className='rightFirstBar'>
                <li style={{ borderRight : '2px solid black' }} ><a href='#a' style={{paddingRight : "10px"}}><BsTelephone/>&nbsp;&nbsp;(+212)5&nbsp;41&nbsp;34&nbsp;24&nbsp;56</a></li>
                <li><a href='#a'><BsPerson/>&nbsp;&nbsp;Sign in Or Registre</a></li>
            </ul>
        </div>
        <hr/>
        <div className="navBarSecond">
            <div className='Logo'>
                Travel.
            </div>
            <div className='rightSecondBar'>
                <ul >
                    <li><a href='#a'>HOME</a></li>
                    <li><a href='#a' >HOTEL</a></li>
                    <li><a href='#a'>TOURS</a></li>
                    <li><a href='#a'>CAR</a></li>
                    <li><a href='#a'>EVENT</a></li>
                    <li><a href='#a'>FLIGHT</a></li>
                    <li><a href='#a'>BOAT</a></li>
                </ul>
            </div>

        </div>
        

    </div>
    )

}

export default NavBar;