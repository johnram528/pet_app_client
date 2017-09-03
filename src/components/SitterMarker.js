import React, { Component} from 'react'
import {sitterMarkerStyle, sitterMarkerStyleHover} from './SitterMarkerStyle'
import ReactTooltip from 'react-tooltip'

export default class SitterMarker extends Component {


  static defaultProps = {};
  handleClick() {
    debugger
  }
  

  render() {
    const style = this.props.$hover ? sitterMarkerStyleHover : sitterMarkerStyle;
    const status = this.props.$hover ? 'sitter-marker-active' : 'sitter-marker'
    return (
       <div className={status} style={style} onClick={()=> this.handleClick()} data-tip={this.props.name}>
          <i className="fa fa-paw" aria-hidden="true"></i>
          <ReactTooltip place="bottom" type="light" effect="solid"/>
       </div>
    );
  }
}