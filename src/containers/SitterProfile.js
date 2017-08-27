import React, { Component } from 'react'
import '../SitterProfile.css'
import NavBar from '../NavBar.js'

export default class SitterProfile extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className='sitterWrap'>
        <section className='sitter-profile-header'>
          <NavBar/>
        </section>
        <section className='siter-profile-conten container-fluid'></section>
        <section className='sitter-profile-footer'></section>
      </div>
      )
  }
}