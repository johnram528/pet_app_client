import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import SimoMap from '../components/SimoMap' 

class SearchPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        location: []
      }
    }
  

  render() {
    const center = [this.props.location.state.lat, this.props.location.state.lng]
    return (
        <div className='search-page-wrap'>
          <NavBar/>
          <div className='mapWrapper'>
            <SimoMap 
            center={center}
            />
          </div>
          
        </div>
    );
  }
}

export default SearchPage;
