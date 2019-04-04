import React, { Component } from 'react';
import './Navbar.css'
export default function Navbar(){
return(
    <div className="toolbar">
        <div className="main">
        
            <div className="logo">
                <a  href="#">MOHIT</a>
            </div>
            <div className="color"></div>
            <span className="space"></span>
            <div className="list">
                <ul>
                    
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

