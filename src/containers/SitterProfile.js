import React, { Component } from 'react'
import '../SitterProfile.css'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer.js'
import SitterSlider from '../components/SitterSlider.js'

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
        <section className='siter-profile-content'>
           <div className='sitter-main-wrap container'> 
            <div className='sitter-main row'>
              <div className='sitter-photos col-xs-12 col-md-7'>
                <SitterSlider/>
              </div>
              <div className='sitter-summary col-xs-12 col-md-5'>SitterSummary</div>  
            </div>
            <div className='sitter-services row'>
              <div className='sitter-info col-xs-12 col-md-7'>SitterInfo</div>
              <div className='sitter-calendar col-xs-12 col-md-5'>SitterCalendar</div>
            </div>
            <div className='sitter-about row'>
              <div className='sitter-profile-bio col-xs-12 col-md-7'>SitterBio</div>
              <div className='sitter-pref col-xs-12 col-md-5'>SitterPref</div>
            </div>
            <div className='sitter-feedback row'>
              <div className='sitter-reviews col-xs-12 col-md-7'>SitterReviews</div>
              <div className='sitter-profile-map col-xs-12 col-md-5'>SitterMap</div>
            </div>
          </div>
        </section>
        <section className='sitter-profile-footer'>
          <Footer/>
        </section>
      </div>
      )
  }
}