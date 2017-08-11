import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import SimoMap from '../components/SimoMap' 

class SearchPage extends Component {
  render() {
    return (
        <div className='search-page-wrap'>
          <NavBar/>
          <div className='mapWrapper'><SimoMap/></div>
          
        </div>
    );
  }
}

export default SearchPage;
