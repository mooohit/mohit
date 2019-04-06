import React, { Component } from 'react';       
import './Contact.css'
import Navbar from './Navbar'
import { faFacebookF,faWhatsapp,faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faPhone, faEnvelope,faAt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faFacebookF,faWhatsapp,faGithub,faLinkedin,faInstagram);
library.add(faEnvelope,faPhone,faAt);



export default function Contact(){

    return(
        <div className="top">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="contact">
                <div className="upar">
                
                    <div className="flex1">
                        <ul>
                            <li style={{textDecoration:'underline'}}>
                                Mobile
                            </li>
                        
                            <li>
                                +919687010235
                            </li>
                        </ul>

                    </div>
                    <div className="flex2">
                        <ul>
                            <li style={{textDecoration:'underline'}}>
                                Email
                            </li>
                            <li>
                                bestmohit.99@gmail.com
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="btn">
                    <ul>
                    <li>
                        <a href="https://www.facebook.com/MooooohitSharma" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']}  color="#49494b" size='2x'   className="w"/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohit-sharma-9a7562159/" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']}  size='2x'   color="#49494b" className="w"/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mooohit" target="_blank" >
                            <FontAwesomeIcon icon={['fab', 'github']}  size='2x' color="#49494b"   className="w"/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mooohit" target="_blank">
                           <FontAwesomeIcon icon={['fab', 'instagram']}  size='2x' color="#49494b"   className="w"/>    
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
                
            
        </div>
    )
}