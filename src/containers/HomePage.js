import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import HomeSearchForm from '../components/HomeSearchForm'
import BottomContent from '../components/BottomContent'


class HomePage extends Component {
  render() {
    return (
        <div className='main-content-wrap'>
          <NavBar/>
          <div className='top-content-container'>
            <HomeSearchForm/>
          </div>
          <div className='bottom-content-container'>
            <BottomContent/>
          </div>
        </div>
    );
  }
}

export default HomePage;
