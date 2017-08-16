import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import SitterMarker from './SitterMarker'
import '../SitterCard.css'
import {Link} from 'react-router-dom'
import SearchPageForm from './SearchForm/SearchPageForm'

export default class SearchResult extends Component {
    static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };


  static defaultProps = {

    center: [18.4596542, -68.95741729999997],
    zoom: 13,
    greatPlaceCoords: {lat: 18.4596542, lng: 69.95741729999997}

  };

  constructor(props) {
    super(props)

  }

  handleClick() {
    debugger
  }

  render() {

    const cards = this.props.results.sitters.map ((sitter, i) =>
      <div className='search-sitter-card' ref={sitter.name} id={i} onClick={()=> this.handleClick()} >
      <div className='top-card-row'>
        <div className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
          <div className='card-pic'>
            <img src={sitter.picture}/>
          </div>
        </div>
        <div className='col-xs-6 col-sm-7 col-md-5 col-lg-6'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='card-name'><Link to='/'><strong>{sitter.name}</strong></Link></div>
              <div className='card-badges'></div>
            </div>
          </div>
          <div className='profile-header hidden-xs'>{sitter.header}</div>
          <div className='card-location'>{sitter.location}</div>
          <div className='card-review'>{sitter.rating}</div>
        </div>
        <div className='col-xs-3 col-md-4 min-price-div'>
          <div className='money-corner'>
            <span className='rate'>{'$' + sitter.rate}</span>
            <br className='hidden-sm hidden-md hidden-lg'/>
            <span className='card-frequency'>{'/' +sitter.frequency}</span>
          </div>
        </div>
      </div>
      <div className='bottom-card-row'>
        <div className='col-xs-12'>
          <div className='service-list hidden-xs'>{sitter.service_list}</div>
          <div className='sitter-bio hidden-xs'>{sitter.bio}</div>
        </div>
        <div className='col-xs-12 data-row'></div>
      </div>
    </div>
    )

    const sittersMarkers = this.props.results.sitters.map ((sitter, i)=>
      <SitterMarker lat={sitter.center[0]} lng={sitter.center[1]} text={`${i}.${sitter.name}`}/>)


  return(
             <div className='search-page-content-wrap'>
              <div  className='search-left-wrap'>
                <div  className='search-page-form-wrap'>
                  <SearchPageForm
                    handleBoardingClick={this.props.handleBoardingClick.bind(this)}
                    handleDaycareClick={this.props.handleDaycareClick.bind(this)}
                    handleWalkingClick={this.props.handleWalkingClick.bind(this)}
                    stayType = {this.props.stayType}
                    />
                </div>
                <div className='search-page-results-wrap'>
                  <div className='search-results'>
                    {cards}
                  </div>
                </div>
              </div>
              <div  className='map-wrap'>
                <GoogleMap
         // apiKey={'AIzaSyBGHYuzgpfOXiomCVvN8d9rZW2zNeiLd-Y'}
          
                center={this.props.center}
                zoom={this.props.zoom}
                options={{
                  scrollwheel: false,
                  clickableIcons: false,


                }}
                ref='map'>
               {sittersMarkers}

                </GoogleMap>
              </div>
            </div>

  )
  }

}