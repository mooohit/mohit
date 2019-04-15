import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faJava, faJs, faHtml5, faCss3, faCuttlefish, faPython, faJsSquare, faNodeJs, faNode } from '@fortawesome/free-brands-svg-icons' 
import { faCode,faSearch,faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
import Navbar from './Navbar'
library.add(faReact,faJava,faJsSquare,faHtml5,faCss3,faCuttlefish,faPython,faCode,faNode,faSearch,faChartLine);
    

export default function Skills(){
    return(
    <div className="s">
        <Navbar/>
        <div className="skills">  
                <div className="align">
                    <div className="one">
                        <div className="one1">
                           
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="Javacript" target="blank" className="" >
                            <FontAwesomeIcon icon={['fab', 'js-square']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'html5']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                        </div>
                        <div className="one2">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'css3']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            <a href="https://www.python.org/about/" title="Python" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'python']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                        </div>
                    </div>
                    <div className="two">  
                        <div className="two1"> 
                            <a href="https://moz.com/learn/seo/what-is-seo" title="SEO" target="blank" className="" >
                            <FontAwesomeIcon icon={['fas', 'search']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Search_engine_marketing" title="SEM"  target="blank" className="" >
                            <FontAwesomeIcon icon={['fas', 'chart-line']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            {/* <a href="https://www.geeksforgeeks.org/c-language-set-1-introduction/" target="blank" className="" >
                            <FontAwesomeIcon icon={['fas', 'code']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            <a href="https://www.geeksforgeeks.org/java/" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'java']}  size='5x' color="#49494b"   className="w"/> 
                            </a> */}
                        </div>
                        <div className="two1">
                            <a href="https://reactjs.org/" title="React" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'react']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                            <a href="https://nodejs.org/" title="NodeJS" className="" target="blank">
                            <FontAwesomeIcon icon={['fab', 'node']}  size='5x' color="#49494b"   className="w"/> 
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}