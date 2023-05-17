
import {BsTelephone, BsPerson} from 'react-icons/bs';
import{TfiFacebook, TfiGoogle , TfiLinkedin} from 'react-icons/tfi'
import React from "react";
import './NavBar.css';
// import {BrowserRouter , Routes , Route , Link} from "react-router-dom";
import {NavLink} from "react-router-dom"



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
                <li><NavLink to="/"><BsPerson/>&nbsp;&nbsp;Sign in Or Registre</NavLink></li>
            </ul>
        </div>
        <hr/>
        <div className="navBarSecond">
            <div className='Logo'>
                Travel.
            </div>
            <div className='rightSecondBar'>
                <ul >
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/Hotel">HOTEL</NavLink></li>
                    <li><NavLink to="/Tour">TOUR</NavLink></li>
                    <li><NavLink to="/Car">CAR</NavLink></li>
                    <li><NavLink to="/Event">EVENT</NavLink></li>
                    <li><NavLink to="/Flight">FLIGHT</NavLink></li>
                    <li><NavLink to="/Boat">BOAT</NavLink></li>

                </ul>
            </div>

        </div>
        

    </div>
    )

}

export default NavBar;