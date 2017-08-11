import React from 'react'

export default (props) => {
  return (
    <div className='search-form-submit-col col-xs-12 col-lg-6'>
                        <div className='js-anonymous-user js-select-dog-size form-group'>
                          <label className='control-label'> Tamaño </label>
                          <ul className='buttons-tab col-xs-12 col-lg-12'>
                            <li className='btn btn-primary btn-first'>
                            <label className='simo-btn simo-btn-default btn-block'>
                              <input hidden name='size' type='radio' value='small'></input>
                              <div>
                                <strong>Pequeño</strong>
                              </div>
                              <div>0-15lbs</div>
                            </label>
                            </li>
                            <li className='btn btn-primary btn-first'>
                            <label className='simo-btn simo-btn-default btn-block'>
                              <input hidden name='size' type='radio' value='medium'></input>
                              <div>
                                <strong>Mediano</strong>
                              </div>
                              <div>16-40lbs</div>
                            </label>
                            </li>
                            <li className='btn btn-primary btn-first'>
                            <label className='simo-btn simo-btn-default btn-block'>
                              <input hidden name='size' type='radio' value='large'></input>
                              <div>
                                <strong>Grande</strong>
                              </div>
                              <div>41-100lbs</div>
                            </label>
                            </li>
                            <li className='btn btn-primary btn-first'>
                            <label className='simo-btn simo-btn-default btn-block'>
                              <input hidden name='size' type='radio' value='giant'></input>
                              <div>
                                <strong>Gigante</strong>
                              </div>
                              <div>100+lbs</div>
                            </label>
                            </li>
                            </ul>
                          </div>
                        </div>)
}