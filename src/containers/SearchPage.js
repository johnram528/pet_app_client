import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import SimoMap from '../components/SimoMap' 
import '../Search.css'
import SearchResults from '../components/SearchResults.js'

class SearchPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        location: []
      }
    }
  

  render() {
    const center = [this.props.location.state.lat, this.props.location.state.lng] 
    const results = {sitters: [{picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: '21 Savage', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..'}]}
    return (
        <div className='search-page-wrap'>
          <section className='search-page-header'>
            <NavBar/>
          </section>
          <section className='search-page-content'>
            <div className='search-page-content-wrap'>
              <div  className='search-left-wrap'>
                <div  className='search-page-form-wrap'>
                  <h1>Search Form</h1>
                </div>
                <div className='search-page-results-wrap'>
                  <SearchResults
                  results = {results}
                  />
                </div>
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


           