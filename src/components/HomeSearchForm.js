/* eslint-disable no-undef */
import React, { Component } from 'react'
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es.js';
import Geosuggest from 'react-geosuggest';
import StayTypeButtons from './SearchForm/StayTypeButtons'
import SearchButton from './SearchForm/SearchButton'
import TopContent from './TopContent'


class HomeSearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      focusedInput: '',
    }
  }
  render () {
    return (
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
                          onSuggestSelect={this.onSuggestSelect}
                          location={new google.maps.LatLng(53.558572, 9.9278215)}
                          highlightMatch={true}
                          radius="20" />
                      </div>

                    </div>
                    <div className='row'>
                        <SearchButton/>
                    </div>
                  </form>
                </div>
              </div>
            </div>

    )
  }
}

export default HomeSearchForm