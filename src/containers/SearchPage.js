import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import SimoMap from '../components/SimoMap' 
import '../Search.css'

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
          <section className='search-page-header'>
            <NavBar/>
          </section>
          <section className='search-page-content'>
            <div  className='search-left-wrap'>
              <div  className='search-page-form-wrap'>
                <h1>Search Form</h1>
              </div>
              <div className='search-page-results-wrap'>
                <h1>Search Results</h1>
              </div>
            </div>
            <div  className='map-wrap'>
              <SimoMap center={center}/>
            </div>
          </section>
          <section className='search-page-footer'>
            <Footer/>
          </section>
        </div>
    );
  }
}

export default SearchPage;


           