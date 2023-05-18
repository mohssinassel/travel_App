import React, { useEffect } from "react";
import "./Sign.css";
import ReactDom from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import SignUp from "./SignUp";

export default function SignIn({ open, onClose }) {
    

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
            <form className="signInForm">
            <input type="email" />
            <input type="password" />
            <input type="submit" className="submitSign" />
            </form>
        </div>
        
        </div>,
        document.getElementById("portal")
    );
}
