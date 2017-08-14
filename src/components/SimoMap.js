import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import SitterMarker from './SitterMarker'


export default class SimoMap extends Component {

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
    super(props);
  }


  render() {
    const sitters = this.props.results.sitters.map ((sitter, i)=>
      <SitterMarker lat={sitter.center[0]} lng={sitter.center[1]} text={`${i}.${sitter.name}`}/>)
    return (
       <GoogleMap
       // apiKey={'AIzaSyBGHYuzgpfOXiomCVvN8d9rZW2zNeiLd-Y'}
        
        center={this.props.center}
        zoom={this.props.zoom}
        options={{
          scrollwheel: false,
       }}>
       {sitters}
      </GoogleMap>
    );

  }
}