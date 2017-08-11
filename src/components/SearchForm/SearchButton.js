import React from 'react'
import ReactTooltip from 'react-tooltip'

export default (props) => {
  return (
                      <div className='search-form-submit col-xs-4 col-lg-4' data-tip='Buscar Cuidadores'>
                          <i className="fa fa-paw fa-2x  " aria-hidden="true"></i>
                        <ReactTooltip place="bottom" type="light" effect="solid"/>
                      </div>)
}