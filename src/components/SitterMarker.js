import React, { Component} from 'react'
import {sitterMarkerStyle, sitterMarkerStyleHover} from './SitterMarkerStyle'
export default class SitterMarker extends Component {


  static defaultProps = {};

  

  render() {
    const style = this.props.$hover ? sitterMarkerStyleHover : sitterMarkerStyle;
    return (
       <div style={style}>
          <i className="fa fa-paw" aria-hidden="true"></i>
       </div>
    );
  }
}