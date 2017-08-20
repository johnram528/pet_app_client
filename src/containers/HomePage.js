/*global google*/ 
import React, { Component } from 'react'
import NavBar from '../NavBar.js'
// import HomeSearchForm from '../components/HomeSearchForm'
import BottomContent from '../components/BottomContent'
import Footer from '../components/Footer'


import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'
import 'moment/locale/es.js';
import Geosuggest from 'react-geosuggest';
import StayTypeButtons from '../components/SearchForm/StayTypeButtons'
// import SearchButton from './SearchForm/SearchButton'
import TopContent from '../components/TopContent'
import { withRouter, Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import DaySelect from '../components/DaySelect.js'

class HomePage extends Component {
    constructor(props){
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      focusedInput: '',
      location: [], 
      locationLabel: '',
      stayType: 'Alojamiento',
      days: []
    }
  }
  handleOnSearchClick() {
    const mom = moment('Wed Aug 23 2017 12:00:00 GMT-0400 (EDT)')
    debugger
    this.state.location.length != 0 ? this.props.history.push('/search', { location: this.state.location, locationLabel: this.state.locationLabel, stayType: this.state.stayType, days: this.state.days, startDate: this.state.startDate.toObject(), endDate: this.state.endDate.toObject()}) :
      this.props.history.push('/search')
  }

  handleOnSuggestionSelect(location) {
    this.setState({
      location: [location.location.lat, location.location.lng],
      locationLabel: location.label,
    })
  }

  handleBoardingClick(e) {
    e.preventDefault()
    this.setState({
      stayType: 'Alojamiento'
    })
  }

  handleDaycareClick(e) {
    e.preventDefault()
    this.setState({
      stayType: 'Diurna'
    })
  }

  handleWalkingClick(e) {
    e.preventDefault()
    this.setState({
      stayType: 'Paseo'
    })
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
    return (
        <div className='main-content-wrap'>
          <NavBar/>
          <div className='top-content-container'>
            <div className='simo-content-wrap'>
              <div className='simo-content'>
                <TopContent/>
                <div className='search-container'>
                  <form className='search-form'>
                    <div className='row'>
                      <div className='col-xs-12 col-lg-12'>
                        <StayTypeButtons
                          handleWalkingClick = {this.handleWalkingClick.bind(this)}
                          handleDaycareClick = {this.handleDaycareClick.bind(this)}
                          handleBoardingClick = {this.handleBoardingClick.bind(this)}
                          stayType ={this.state.stayType}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12 col-lg-12 dates-content'> 
                        {this.state.stayType != 'Alojamiento' ? 
                        <DaySelect
                          days = {this.state.days}
                          handleWeekdaySelect = {this.handleWeekdaySelect.bind(this)}
                          /> : 
                        <DateRangePicker
                          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                          endDate={this.state.endDate}// momentPropTypes.momentObj or null,
                          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                          startDatePlaceholderText='Desde'
                          endDatePlaceholderText='Hasta'
                          showDefaultInputIcon={true}
                          required={true}
                          readOnly={true}
                          anchorDirection='left'
                          daySize={35}
                          hideKeyboardShortcutsPanel={true}
                        />}
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12 col-lg-12'>
                        <Geosuggest
                          ref={el=>this._geoSuggest=el}
                          placeholder="Dirección o Ubicación"
                          initialValue=""
                          country="do"
                          onSuggestSelect={location => this.handleOnSuggestionSelect(location)}
                          location={new google.maps.LatLng(18.4596542, -69.95741729999997)}
                          highlightMatch={true}
                          radius="20" />
                      </div>

                    </div>
                    <div className='row search-form-row'>
                      <div className='search-form-submit col-xs-4 col-lg-4' data-tip='Buscar Cuidadores'>
                          <i className="fa fa-paw fa-2x  " aria-hidden="true" onClick={()=> this.handleOnSearchClick()}></i>
                        <ReactTooltip place="bottom" type="light" effect="solid"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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

export default withRouter(HomePage);
