import React, { Component } from 'react';
import './App.css';
// import HomePage from './containers/HomePage'
import Routes from './Routes.js'
import NavBar from './NavBar.js'


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="App">
          <Routes/>   
        </div>
    );
  }
}

export default App;
