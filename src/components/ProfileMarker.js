import React, { Component} from 'react'
import {profileMarkerStyle} from './ProfileMarkerStyle'
import ReactTooltip from 'react-tooltip'

export default class ProfileMarker extends Component {
  

  render() {

    return (
       <div className='sitter-marker' style={profileMarkerStyle} onClick={()=> this.handleClick()} data-tip={this.props.name}>
          <i className="fa fa-2x fa-paw" aria-hidden="true"></i>
          <ReactTooltip place="bottom" type="light" effect="solid"/>
       </div>
    );
  }
}