import React, {Component} from 'react' 

export default class StayTypeButtons extends Component {
  constructor(props){
    super(props)
  }
  render () {
   return(         
          <ul className='buttons-tab col-xs-12 col-lg-12'>
            <li className={this.props.stayType == "Alojamiento" ? 'stay-button-active col-lg-4 col-lg-4' : 'stay-button col-lg-4 col-lg-4'} onClick={(e)=> this.props.handleBoardingClick(e)}>
              <label>Alojamiento 
                <input hidden name='service' type='radio' value='overnight'></input>
              </label>
            </li>
              <li className={this.props.stayType == "Diurna" ? 'stay-button-active col-lg-4' : 'stay-button col-lg-4'} onClick={(e)=> this.props.handleDaycareClick(e)}>
                <label>  Diurna 
                  <input hidden name='service' type='radio' value='daycare'></input>
                </label>
              </li>
              <li className={this.props.stayType == "Paseo" ? 'stay-button-active col-lg-4' : 'stay-button col-lg-4'} onClick={(e)=> this.props.handleWalkingClick(e)}>
                <label>  Paseo 
                  <input hidden name='service' type='radio' value='walking'></input>
                </label>
              </li>
            </ul>)
  }
}