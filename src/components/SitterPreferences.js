import React, { Component } from 'react'


export default class SitterPreferences extends Component {
  constructor(props){
    super(props)

  }
  render(){
    const petXsClass = this.props.preferences.sizes.includes(0) ? 'pet-size-xs col-xs-3' : 'pet-size-xs reject col-xs-3';
    const petSmClass = this.props.preferences.sizes.includes(1) ? 'pet-size-sm col-xs-3' : 'pet-size-sm reject col-xs-3';
    const petMdClass = this.props.preferences.sizes.includes(2) ? 'pet-size-md col-xs-3' : 'pet-size-md reject col-xs-3';
    const petLgClass = this.props.preferences.sizes.includes(3) ? 'pet-size-lg col-xs-3' : 'pet-size-lg reject col-xs-3';
    return(
        <div className='sitter-pref col-xs-12 col-md-4'>
          <div className='sitter-pref-headline'>Preferencias</div>
          <div className='sitter-pref-body row'>
            <div className='pref-pet-sizes'>
              <div className={petXsClass}>
                <i className="fa fa-paw" aria-hidden="true"></i>
                <div>0-15</div>
                <div>Libras</div>
              </div>
              <div className={petSmClass}>
                <i className="fa fa-paw" aria-hidden="true"></i>
                <div>16-40</div>
                <div>Libras</div>
              </div>
              <div className={petMdClass}>
                <i className="fa fa-paw" aria-hidden="true"></i>
                <div>41-100</div>
                <div>Libras</div>
              </div>
              <div className={petLgClass}>
                <i className="fa fa-paw" aria-hidden="true"></i>
                <div>101+</div>
                <div>Libras</div>
              </div>
            </div>
          </div>
          <div className='pref-pet-qty'>{this.props.name + ' solo puede cuidar ' + this.props.preferences.quantity + ' mascotas por noche.'}</div>
        </div>
      )
  }
}