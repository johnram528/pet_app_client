import React, { Component } from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import moment from 'moment'
// import SimoMap from '../components/SimoMap' 
import '../Search.css'
import SearchResults from '../components/SearchResults.js'


class SearchPage extends Component {
  constructor(props) {
    super(props)
      const location = this.props.location.state != undefined ? this.props.location.state.location : [18.4596542, -69.9312117];
      const startDate = this.props.location.state != undefined && this.props.location.state.startDate != '' ? moment(this.props.location.state.startDate) : null
      const endDate = this.props.location.state != undefined && this.props.location.state.startDate != '' ? moment(this.props.location.state.endDate) : null
      const stayType = this.props.location.state != undefined ? this.props.location.state.stayType : 'Alojamiento'
      const days = this.props.location.state != undefined ? this.props.location.state.days : []
      this.state = {
        location: location,
        activeId: null,
        stayType: stayType,
        startDate: startDate,
        endDate: endDate,
        days: days,

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

  handleWeekdaySelect(day) {
    this.state.days.includes(day) ? this.handleWeekdayRemove(day) : this.handleWeekdayAdd(day)
  }

  handleWeekdayAdd(day) {
    let days = this.state.days
    days.push(day)
    this.setState({
      days: days.sort()
    })
  }

  handleWeekdayRemove(day){
    let days = this.state.days
    let index = days.indexOf(day)
    days.splice(index,1)
    this.setState({
      days: days
    })
  }

  render() {
    console.log(this.state.days)
 
    const results = {
      sitters: [
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test1', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4560947, -69.92432550000001]}, 
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test2', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4697098, -69.9391392]},
        {picture: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024', name: 'test3', badges: null, header: 'La segunda casa de tu mascota', location: 'Santo Domingo', rating:4.8, rate: 300, frequency: 'noche', service_list: 'Alojamiento, Diurna, Paseo', bio: 'Buen día, Hablar del amor que les tengo a los perros, sería hablar de toda mi vida, En mi casa nunca me permitieron tener mascotas porque no les..', center: [18.4534115, -69.94182009999997]}]}
    const locationLabel = this.props.location.state != undefined ? this.props.location.state.locationLabel : "";
    return (
        <div className='search-page-wrap'>
          <section className='search-page-header'>
            <NavBar/>
          </section>
          <section className='search-page-content container-fluid'>


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
                  locationLabel = {locationLabel}
                  days = {this.state.days}
                  handleWeekdaySelect = {this.handleWeekdaySelect.bind(this)}
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

            