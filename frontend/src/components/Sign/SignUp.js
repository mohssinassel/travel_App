
import React, { useEffect } from "react";
import "./Sign.css";
import ReactDom from "react-dom";
import {FaTimes} from 'react-icons/fa'

export default function SignUp({ open, onClose }) {
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
            <form className="signInForm">
                <div className="nameForm">
                    <input type="text"></input>
                    <input type="text"></input>
                </div>
                <input type="email"/>
                <input type="password"/>
                <input type="submit" className="submitSign"></input>
            </form>
        </div>
        </div>,
        document.getElementById("portal2")
    );
    }
