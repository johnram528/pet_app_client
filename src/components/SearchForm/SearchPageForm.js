/*global google*/ 
import React, { Component } from 'react'
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es.js';
import Geosuggest from 'react-geosuggest';
import StayTypeButtons from './StayTypeButtons'
import ReactTooltip from 'react-tooltip'
import './SearchForm.css'
import DaySelect from '../DaySelect.js'

export default class SearchPageForm extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    const stayButtonActiveStyle = {
      backgroundColor:'red',
    }

    const stayButtonStyle = {
      backgroundColor:'yellow',
    }

    return (
          <div className='search-page-form-wrap container-fluid'>
            <div className='search-button-wrap row'>
              <div className='search-page-buttons col-xs-12'> 
                <div className={this.props.stayType == "Alojamiento" ? 'stay-button-active col-xs-4' : 'stay-button col-xs-4 col-xs-4'} onClick={(e)=> this.props.handleBoardingClick(e)}>
                  Alojamiento
                </div>
                <div className={this.props.stayType == "Diurna" ? 'stay-button-active col-xs-4' : 'stay-button col-xs-4'} onClick={(e)=> this.props.handleDaycareClick(e)}>
                  Diurna
                </div>
                <div className={this.props.stayType == "Paseo" ? 'stay-button-active col-xs-4' : 'stay-button col-xs-4'} onClick={(e)=> this.props.handleWalkingClick(e)}>
                  Paseo
                </div>
              </div>
            </div>
            <div className='dates-location-wrap row'> 
              <div className='dates-location col-xs-12'> 
                <div className='search-page-location col-md-6 col-xs-12'>
                  <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Dirección o Ubicación"
                    initialValue={this.props.locationLabel}
                    country="do"
                    onSuggestSelect={location => this.props.handleOnSuggestionSelect( location.location )}
                    location={new google.maps.LatLng(18.4596542, -69.95741729999997)}
                    highlightMatch={true}
                    radius="20" />
                </div>

                <div className='search-page-dates col-md-6 col-xs-12'>
                  {this.props.stayType != 'Alojamiento' ? 
                    <DaySelect 
                      days={this.props.days}
                      handleWeekdaySelect = {this.props.handleWeekdaySelect.bind(this)}/> : 
                    <DateRangePicker
                        startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.props.endDate}// momentPropTypes.momentObj or null,
                        onDatesChange={({ startDate, endDate }) => this.props.handleOnDatesChange(startDate, endDate )} // PropTypes.func.isRequired,
                        focusedInput={this.props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.props.handleOnFocusChange(focusedInput)} // PropTypes.func.isRequired,
                        startDatePlaceholderText='Desde'
                        endDatePlaceholderText='Hasta'
                        showDefaultInputIcon={true}
                        required={true}
                        readOnly={true}
                        anchorDirection='right'
                        daySize={35}
                        hideKeyboardShortcutsPanel={true}
                      />}
                </div>
              </div>
             
            </div>
            <div className='row'>
              <div className='search-bottom-filters col-xs-12'>
                  
                  <div className='pet-size-buttons col-md-6 col-xs-12'>
                    Pet Size
                  </div>
                  <div className='pet-qty-buttons col-md-6 col-xs-12'>
                    Pet Qty
                  </div>
              </div>
            </div>
          </div>
           
      )
  }

}
