import React, { useEffect } from "react";
import "./Sign.css";
import ReactDom from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import SignUp from "./SignUp";
import axios from "axios";

export default function SignIn({ open, onClose, changeHeader }) {
    const [userInfo,setUserInfo] = useState({
        username : '',
        password: ''
    })
    const handleInputChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
            });
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            // JSON.stringify(userInfo);
        
            axios.post('http://localhost:80/Travel/api/signIn.php', userInfo)
                .then(response => {
                    localStorage.setItem(
                        process.env.REACT_APP_LOCALHOST_KEY,
                        JSON.stringify(response.data.user.username)
                    );
                    console.log(response.data.user.username);
                    changeHeader(response.data.user);
                })
                .catch(error => {
                    // Handle any errors
                    console.log(error.error);
                });
                // window.location.reload();
                // window.location.replace(window.location.href);
                onClose();
                
            };
    

    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (event.target.classList.contains("mainsignIn")) {
            onClose();
        }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
        document.removeEventListener("click", handleOutsideClick);
        };
    }, [onClose]);

    if (!open) return null;


    return ReactDom.createPortal(
        <div className="mainsignIn">
        <div className="signIn">
            <div>
            <p>Sign In</p>
            <FaTimes onClick={onClose} className="exitForm" />
            </div>
            <form className="signInForm" onSubmit={handleSubmit}>
                <input type="text" name="username" value={userInfo.username}onChange={handleInputChange} placeholder="username"/>
                <input type="password" name="password" value={userInfo.password} onChange={handleInputChange} placeholder="password"/>
                <input type="submit" className="submitSign" defaultValue="submit"/>
            </form>
        </div>
        
        </div>,
        document.getElementById("portal")
    );
}
