import React, { Component } from 'react' 


export default class SitterSummary extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div>
      <div className='provider-card row'>
        <div className='provider-card-pic col-xs-3'><img src={this.props.profile_pic}></img></div>
        <div className='provider-card-body col-xs-9'>
          <div className='pcard-name col-xs-12'>{this.props.name}</div>
          <div className='pcard-header col-xs-12'>{this.props.header}</div>
          <div className='pcard-location col-xs-12'>{this.props.city}</div>
          <div className='pcard-rating col-xs-12'>{this.props.rating}</div>
        </div>
      </div>
      <div className='services-wrap row'>
        <div className='rates-summary-wrap col-xs-12'>
          <div className='service-rate-summary'>
            <div className='title-row row'>
              <div className='col-xs-8'><h3>Alojamiento</h3></div>
              <div className='col-xs-4'><h3>$300</h3></div>
            </div>
            <div className='subtext-row row'>
              <div className='col-xs-8'>en casa del cuidador</div>
              <div className='col-xs-4'>por noche</div>
            </div>
          </div>
        </div>
        <div className='rates-summary-wrap col-xs-12'>
          <div className='service-rate-summary'>
            <div className='title-row row'>
              <div className='col-xs-8'><h3>Diurna</h3></div>
              <div className='col-xs-4'><h3>$200</h3></div>
            </div>
            <div className='subtext-row row'>
              <div className='col-xs-8'>en casa del cuidador</div>
              <div className='col-xs-4'>por dia</div>
            </div>
          </div>
        </div>
        <div className='rates-summary-wrap col-xs-12'>
          <div className='service-rate-summary'>
            <div className='title-row row'>
              <div className='col-xs-8'><h3>Paseo</h3></div>
              <div className='col-xs-4'><h3>$200</h3></div>
            </div>
            <div className='subtext-row row'>
              <div className='col-xs-8'>paseos de media hora</div>
              <div className='col-xs-4'>por paseo</div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-wrap row'>
        <div className='contact-favorite-wrap'>
          <div className='contact-btn col-xs-8'>contact</div>
          <div className='favorite-btn col-xs-2'>favorite</div>
        </div>
      </div>
      </div>
    
      )
  }
}







