import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import HomeSearchForm from './components/HomeSearchForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='main-content-wrap'>
          <NavBar/>
          <div className='top-content-container'>
            <HomeSearchForm/>
          </div>
          <div className='bottom-content-container'>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
