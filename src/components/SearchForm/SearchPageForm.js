/*global google*/ 
import React, { Component } from 'react'
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es.js';
import Geosuggest from 'react-geosuggest';
import StayTypeButtons from './StayTypeButtons'
import ReactTooltip from 'react-tooltip'
import './SearchForm.css'

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
          <div>
            <div className='search-button-wrap col-lg-12 col-xs-12'>
              <div className='search-page-buttons-row row'> 
                <div className={this.props.stayType == "Alojamiento" ? 'stay-button-active col-lg-4 col-lg-4' : 'stay-button col-lg-4 col-lg-4'} onClick={(e)=> this.props.handleBoardingClick(e)}>
                  Alojamiento
                </div>
                <div className={this.props.stayType == "Diurna" ? 'stay-button-active col-lg-4' : 'stay-button col-lg-4'} onClick={(e)=> this.props.handleDaycareClick(e)}>
                  Diurna
                </div>
                <div className={this.props.stayType == "Paseo" ? 'stay-button-active col-lg-4' : 'stay-button col-lg-4'} onClick={(e)=> this.props.handleWalkingClick(e)}>
                  Paseo
                </div>
              </div>
            </div>
            <div className='dates-location-wrap col-xs-12 col-lg-12'> 
              
                <div className='search-page-location col-lg-5 col-sm-12'>
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
                <div className='search-page-dates col-lg-5 col-sm-12'>
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
                        />
                </div>
             
            </div>
            <div className='search-bottom-filters col col-xs-12 col-lg-12'>
                
                <div className='pet-size-buttons col-lg-5'>
                  Pet Size
                </div>
                <div className='pet-qty-buttons col-lg-5'>
                  Pet Qty
                </div>


            </div>
          </div>
           
      )
  }

}