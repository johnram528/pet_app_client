import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import HomeSearchForm from '../components/HomeSearchForm'
import BottomContent from '../components/BottomContent'
import Footer from '../components/Footer'

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
          <div className='footer-content-container'>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default HomePage;
