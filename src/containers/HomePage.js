/*global google*/ 
import React, { Component } from 'react'
import NavBar from '../NavBar.js'
// import HomeSearchForm from '../components/HomeSearchForm'
import BottomContent from '../components/BottomContent'
import Footer from '../components/Footer'


import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es.js';
import Geosuggest from 'react-geosuggest';
import StayTypeButtons from '../components/SearchForm/StayTypeButtons'
// import SearchButton from './SearchForm/SearchButton'
import TopContent from '../components/TopContent'
import { withRouter, Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

class HomePage extends Component {
    constructor(props){
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      focusedInput: '',
      location: [], 
      locationLabel: '',
    }
  }
  handleOnSearchClick() {
    this.state.location.length != 0 ? this.props.history.push('/search', { location: this.state.location, locationLabel: this.state.locationLabel}) :
      this.props.history.push('/search')
  }

  handleOnSuggestionSelect(location) {
    this.setState({
      location: [location.location.lat, location.location.lng],
      locationLabel: location.label,
    })

  }

  render() {
    console.log(this.state.location)
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
                        <StayTypeButtons/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12 col-lg-12 dates-content'> 
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
                        />
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
