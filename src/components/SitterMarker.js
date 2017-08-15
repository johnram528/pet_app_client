import React, { Component} from 'react'
import {sitterMarkerStyle, sitterMarkerStyleHover} from './SitterMarkerStyle'
export default class SitterMarker extends Component {


  static defaultProps = {};
  handleClick() {
    debugger
  }
  

  render() {
    const style = this.props.$hover ? sitterMarkerStyleHover : sitterMarkerStyle;
    const status = this.props.$hover ? 'sitter-marker-active' : 'sitter-marer'
    return (
       <div className={status} style={style} onClick={()=> this.handleClick()}>
          <i className="fa fa-paw" aria-hidden="true"></i>
       </div>
    );
  }
}