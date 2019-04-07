import React, { Component } from 'react';
import Navbar from './Navbar'
import './Resume.css'
export default function(){
    return(
        <div>
            <Navbar/>

            <div className="resume">
                <a href="https://drive.google.com/file/d/1zufN9KPXDSe7bwII7D0gZLtAEwR8aw9G/view?usp=sharing" target="blank">My Resume</a>
            </div>
        </div>
    )
}