import React, { Component} from 'react'
import {sitterMarkerStyle} from './SitterMarkerStyle'
export default class SitterMarker extends Component {


  static defaultProps = {};

  

  render() {
    return (
       <div style={sitterMarkerStyle}>
          {this.props.text}
       </div>
    );
  }
}