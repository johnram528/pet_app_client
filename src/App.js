import React, { Component } from 'react';
import './App.css';
// import HomePage from './containers/HomePage'
import Routes from './Routes.js'



class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes/>
        </div>
    );
  }
}

export default App;
