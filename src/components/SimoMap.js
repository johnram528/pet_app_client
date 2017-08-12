import React, {PropTypes, Component} from 'react';


import GoogleMap from 'google-map-react';


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
    return (
       <GoogleMap
       // apiKey={'AIzaSyBGHYuzgpfOXiomCVvN8d9rZW2zNeiLd-Y'}
        
        center={this.props.center}
        zoom={this.props.zoom}
        options={{
          scrollwheel: false,
       }}>

  </GoogleMap>
    );

  }
}