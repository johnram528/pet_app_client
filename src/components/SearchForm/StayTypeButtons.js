import React from 'react' 

export default (props) => {
 return(         
        <ul className='buttons-tab col-xs-12 col-lg-12'>
          <li className='btn btn-primary btn-first'>
            <label>Alojamiento 
              <input hidden name='service' type='radio' value='overnight'></input>
            </label>
          </li>
            <li className='btn btn-primary btn-middle'>
              <label>  Diurna 
                <input hidden name='service' type='radio' value='daycare'></input>
              </label>
            </li>
            <li className='btn btn-default'>
              <label>  Paseo 
                <input hidden name='service' type='radio' value='walking'></input>
              </label>
            </li>
          </ul>)
}