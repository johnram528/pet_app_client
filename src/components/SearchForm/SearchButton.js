import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Route, Redirect } from 'react-router'

function onSearchClick() {
      <Redirect to={`/search/?lat=${this.state.location.lat}&lng=${this.state.location.lng}`}/>
    }
export default (props) => {

  debugger
  return (
                      <div className='search-form-submit col-xs-4 col-lg-4' data-tip='Buscar Cuidadores'>
                          <i className="fa fa-paw fa-2x  " aria-hidden="true" onClick={()=> this.onSearchClick()}></i>
                        <ReactTooltip place="bottom" type="light" effect="solid"/>
                      </div>)
}

