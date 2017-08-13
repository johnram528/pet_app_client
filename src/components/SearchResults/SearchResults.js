import React from 'react'

export default (props) => (
  <div className='search-results'>
    <div className='search-sitter-card'>
      <div className='top-card-row'>
        <div className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
          <div className='card-pic'>
            PIC
          </div>
        </div>
        <div className='col-xs-6 col-sm-7 col-md-5 col-lg-6'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='card-name'>NAME</div>
              <div className='card-badges'></div>
            </div>
          </div>
          <div className='profile-header hidden-xs'>HEADER</div>
          <div className='card-location'>LOCATION</div>
          <div className='card-review'>RATING</div>
        </div>
        <div className='col-xs-3 col-md-4 min-price-div'>
          <div>
            <span className='rate'>RATE</span>
            <br className='hidden-sm hidden-md hidden-lg'/>
            <span className='card-frequency'>FREQUENCY</span>
          </div>
        </div>
      </div>
      <div className='bottom-card-row'>
        <div className='col-xs-12'>
          <div className='service-list hidden-xs'>SERVICE LIST</div>
          <div className='sitter-bio hidden-xs'>BIO</div>
        </div>
        <div className='col-xs-12 data-row'>DATA</div>
      </div>
    </div>
  </div>
  )

