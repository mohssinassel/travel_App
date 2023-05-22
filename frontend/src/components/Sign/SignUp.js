
import React, { useEffect } from "react";
import "./Sign.css";
import ReactDom from "react-dom";
import {FaTimes} from 'react-icons/fa';
import { useState } from "react";
import axios from "axios";

export default function SignUp({ open, onClose }) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
        });
        const handleInputChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
                });
            };
            
            const handleSubmit = (event) => {
                event.preventDefault();
                
            
                axios.post('http://localhost:80/Travel/api/user.php', formData)
                    .then(response => {
                        localStorage.setItem(
                            process.env.REACT_APP_LOCALHOST_KEY,
                            JSON.stringify(response.data.user.username)
                        );
                        console.log(response.data.user.username);
                    })
                    .catch(error => {
                        // Handle any errors
                        console.error(error);
                    });
                    // window.location.reload();
                    // navigate("/");
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
        <div className="signUp">
            <div>
            <p>Sign Up</p>
            <FaTimes onClick={onClose} className="exitForm"/>
            </div>
            <form className="signInForm" onSubmit={handleSubmit}>
                <div className="nameForm">
                <input type="text" name="first_name"   value={formData.first_name} onChange={handleInputChange}/>
                <input type="text" name="last_name"    value={formData.last_name} onChange={handleInputChange}/>
                    
                </div>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                <input type="password" name="password"  value={formData.password} onChange={handleInputChange}/>
                <button type="submit"  className="submitSign" defaultValue="Submit">Sign Up</button>
            </form>
        </div>
        </div>,
        document.getElementById("portal2")
    );
    }
