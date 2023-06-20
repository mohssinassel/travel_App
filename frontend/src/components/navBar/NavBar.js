
import {BsTelephone, BsPerson} from 'react-icons/bs';
import{TfiFacebook, TfiGoogle , TfiLinkedin} from 'react-icons/tfi'
import {BiLogOut} from 'react-icons/bi'
import React from "react";
import './NavBar.css';
// import {BrowserRouter , Routes , Route , Link} from "react-router-dom";
import {NavLink} from "react-router-dom"
import {useState , useEffect} from 'react'
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import {FaSignInAlt} from 'react-icons/fa';



const NavBar = ({setUsername}) =>{
    const [isopen , setIsopen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [currentUser,setCurrentUser] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            setCurrentUser(
                JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
            );
            setUsername({currentUser});
            console.log(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)))

            }
        
        }, []); 
    function logOut(){
        localStorage.clear();
        setCurrentUser(undefined);
        setUsername(undefined);
    }
    function handleFormClose() {
        setIsopen(false);
        setIsSignUpOpen(false);
        // window.location.reload();
    }

    function change_header(user){
        setCurrentUser(user.username);
        setUsername({currentUser});
    }
    

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
                {currentUser === undefined ? (
                <>
                <li><NavLink onClick={() =>setIsopen(true)}><FaSignInAlt/>&nbsp;&nbsp;Sign in </NavLink></li>
                <li><NavLink onClick={() =>setIsSignUpOpen(true)}><BsPerson/>&nbsp;&nbsp;Registre </NavLink></li></>) : (
                    <>
                    <li><NavLink ><BsPerson/>&nbsp;&nbsp;{currentUser} </NavLink></li>
                    <li><NavLink onClick={()=>logOut()}><BiLogOut/>&nbsp;&nbsp;logOut </NavLink></li>
                    </> 
                )}
            </ul>
            
        </div>
        <SignIn open={isopen} onClose={handleFormClose} changeHeader={change_header}/>
        <SignUp open={isSignUpOpen} onClose={handleFormClose} changeHeader={change_header}/>
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