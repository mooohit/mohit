import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Resume from './Resume'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

<Router>
  <div>
    <Route path="/" component={App}></Route>
  | <Route path="skills" component={Skills}></Route>
    <Route path="projects" component={Projects}></Route>
    </div>
    
</Router>
 , document.getElementById('root'));

 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
