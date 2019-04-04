import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';
import Body from './Body'
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar></Navbar>
       
        <Body ></Body>
      
      </div>

    );
  }
}

export default App;
