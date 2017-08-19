import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
// import SimoMap from '../components/SimoMap' 
import '../Search.css'
import SearchResults from '../components/SearchResults.js'


class SearchPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        location: this.props.location.state.location,
        activeId: null,
        stayType: 'Alojamiento',
        startDate: '',
        endDate: '',

      }
    }
  componentDidMount() {
 
  }

  handleBoardingClick(e) {
    e.preventDefault()
    console.log('in here')
    this.setState({
      stayType: 'Alojamiento'
    })
  }

  handleDaycareClick(e) {
    e.preventDefault()
    console.log('in here')
    this.setState({
      stayType: 'Diurna'
    })
  }

  handleWalkingClick(e) {
    e.preventDefault()
    console.log('in here')
    this.setState({
      stayType: 'Paseo'
    })
  }

  handleOnDatesChange(startDate, endDate){
    this.setState({ startDate, endDate})
  }

  handleOnFocusChange(focusedInput) {
    this.setState({focusedInput})
  }

  handleOnSuggestionSelect(location) {
    this.setState({ location })
  }

  render() {
    console.log(this.props.location.state)
    // const center = [this.props.location.state.lat, this.props.location.state.lng] 
    const results = {
      sitters: [
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test1', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4560947, -69.92432550000001]}, 
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test2', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4697098, -69.9391392]},
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test3', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4534115, -69.94182009999997]}]}
        console.log(this.state.location)
    return (
        <div className='search-page-wrap'>
          <section className='search-page-header'>
            <NavBar/>
          </section>
          <section className='search-page-content'>


                  <SearchResults
                  results = {results}
                  center={this.state.location}
                  handleBoardingClick={this.handleBoardingClick.bind(this)}
                  handleDaycareClick={this.handleDaycareClick.bind(this)}
                  handleWalkingClick={this.handleWalkingClick.bind(this)}
                  stayType = {this.state.stayType}
                  startDate = {this.state.startDate}
                  endDate = {this.state.endDate}
                  focusedInput = {this.state.focusedInput}
                  handleOnDatesChange = {this.handleOnDatesChange.bind(this)}
                  handleOnFocusChange = {this.handleOnFocusChange.bind(this)}
                  location = { this.state.location }
                  handleOnSuggestionSelect = {this.handleOnSuggestionSelect.bind(this)}
                  locationLabel = {this.props.location.state.locationLabel}
                  />
     
          </section>
          <section className='search-page-footer' onClick={(e)=> this.handleBoardingClick(e)}>
            <Footer />
          </section>
        </div>
    );
  }
}

export default SearchPage;

            