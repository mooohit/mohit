import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'
import Skills from './Skills'
import App from './App'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import {Link,BrowserRouter as Router} from 'react-router-dom';


export default function Navbar(){
    const skills = ()=>{
        ReactDOM.render(<Skills />, document.getElementById('root'));
    }
    const app = ()=>{
        ReactDOM.render(<App />, document.getElementById('root'));

    }
    const projects = ()=>{
        ReactDOM.render(<Projects />, document.getElementById('root'));

    }
    const contact = ()=>{
        ReactDOM.render(<Contact/>,document.getElementById('root'));
    }
    const resume = ()=>{
        ReactDOM.render(<Resume/>,document.getElementById('root'));
    }
return(
    <div className="toolbar">
        <div className="main">
        
            <div className="logo">
            <Router>
                <Link  to="/" onClick={app}>MOHIT SHARMA</Link>
                </Router>
            </div>
            <div className="color"></div>
            <span className="space"></span>
            <div className="list">
                <ul>
                    <Router>
                        <div>
                    <Link to="/skills" className="link" onClick={skills}>Skills</Link>
                    <Link to="/projects" className="link" onClick={projects}>Projects</Link>
                    <Link to="/resume" className="link" onClick={resume}>Resume</Link>
                    <Link to=".resume" className="link" onClick={contact}>Contact</Link>
                    </div>
                    </Router>
                </ul>
            </div>
        </div>
    </div>
    )
}

