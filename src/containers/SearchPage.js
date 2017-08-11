import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'

class SearchPage extends Component {
  render() {
    return (
        <div className='search-page-wrap'>
          <NavBar/>
          <SimoMap/>
        </div>
    );
  }
}

export default SearchPage;
