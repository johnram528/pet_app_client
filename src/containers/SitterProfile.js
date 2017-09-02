import React, { Component } from 'react'
import '../SitterProfile.css'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer.js'
import SitterSlider from '../components/SitterSlider.js'
import SitterSummary from '../components/SitterSummary.js'

export default class SitterProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      favorited: false
    }


  }

  handleOnFavClick() {
    this.setState({
      favorited:!this.state.favorited
    })
    
  }
  render() {
    const sitter = {
      first_name: 'First',
      last_name: 'Last',
      header: 'La segunda casa de tu mascota',
      city: 'Santo Domingo',
      rating: '4.8',
      profile_pic: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024',
      gallery: ['https://images.unsplash.com/photo-1425678013935-cafcfb4272c7?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1500165974561-f16bc21927a3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1456534231849-7d5fcd82d77b?dpr=1&auto=format&fit=crop&w=1500&h=846&q=80&cs=tinysrgb&crop=' ]
    }
    return (
      <div className='sitterWrap'>
        <section className='sitter-profile-header'>
          <NavBar/>
        </section>
        <section className='siter-profile-content'>
           <div className='sitter-main-wrap container'> 
            <div className='sitter-main row'>
              <div className='sitter-photos col-xs-12 col-md-7'>
                <SitterSlider
                  photos={sitter.gallery}/>
              </div>
              <div className='sitter-summary col-xs-12 col-md-5'>
                <SitterSummary
                  first_name={sitter.first_name}
                  last_name={sitter.last_name}
                  header={sitter.header}
                  city={sitter.city}
                  rating={sitter.rating}
                  profile_pic={sitter.profile_pic}
                  favorited={this.state.favorited}
                  handleOnFavClick={this.handleOnFavClick.bind(this)}
                  />
              </div>  
            </div>
            <div className='sitter-services row'>
              <div className='sitter-info col-xs-12 col-md-7'>SitterInfo</div>
              <div className='sitter-calendar col-xs-12 col-md-5'>
                SitterCalendar
              </div>
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