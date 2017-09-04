import React, { Component } from 'react'
import '../SitterProfile.css'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer.js'
import SitterSlider from '../components/SitterSlider.js'
import SitterSummary from '../components/SitterSummary.js'
import SitterInfo from '../components/SitterInfo.js'
import { DayPicker} from 'react-dates';
import GoogleMap from 'google-map-react';
import ProfileMarker from '../components/ProfileMarker.js'
import SitterReviews from '../components/SitterReviews.js'
import SitterPreferences from '../components/SitterPreferences.js'

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
      profile_pic: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024',
      gallery: ['https://images.unsplash.com/photo-1425678013935-cafcfb4272c7?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1500165974561-f16bc21927a3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1456534231849-7d5fcd82d77b?dpr=1&auto=format&fit=crop&w=1500&h=846&q=80&cs=tinysrgb&crop=' ],
      bio: 'Amo a los animales, sé cómo cuidarlos y amarlos. La verdad nunca he cuidado mascotas ajenas, pero tengo 5 perros y todos ellos bien cuidados. Puedo bañarlos, sacarlos a pasear, cortarles el cabello, que tengan su siesta, etc. Estarán bien alimentamos y muy hidratados. Los puedo llevar a la veterinaria más cercana, o a la de su preferencia. Los cuídare como si fueran míos, porque en realidad sé cuánto son importantes para cada persona. Cuando sacó a pasear a mi mascota, hay muchos perros ladrando, pero no me asusta, sé cómo controlar a un perro sin asustarlo o maltratandolo. Mi novio y yo sabremos cómo cuidar a su mascota, haremos todo lo que sea necesario para que se sienta en casa. Si usted quiere, puedo bañarlos cada 15 días o cada mes, como prefiera. Los puedo alimentar con croquetas, comida enlatada, depende la edad de su mascota. También puedo entrenar a su cachorro. Puedo cuidar también en casas ajenas. Mascotas = vida feliz.',
      reviews: [{reviewer: 'test 1', date: '9-3-2017', body: 'Excelente persona con mucha calidad humana y gran cariño por las mascotas que le dejamos a su cuidado, siempre en contacto conmigo de como estaba Cushufleta, fotos y videos de mi perrhija y yo siempre feliz de no verla descuidada. Encantada con el servicio y profesionalismo, definitivamente la mejor opcion. Muy agradecida con Kariam.', rating: '5', profile_pic:'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024' }, {reviewer: 'test 2', date: '9-3-2017', body: 'Excelente persona con mucha calidad humana y gran cariño por las mascotas que le dejamos a su cuidado, siempre en contacto conmigo de como estaba Cushufleta, fotos y videos de mi perrhija y yo siempre feliz de no verla descuidada. Encantada con el servicio y profesionalismo, definitivamente la mejor opcion. Muy agradecida con Kariam.', rating: '4', profile_pic: 'https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024'}],
      review_info: {total:2, average:4.5}
    }
    return (
      <div className='sitterWrap'>
        <section className='sitter-profile-header'>
          <NavBar/>
        </section>
        <section className='siter-profile-content'>
           <div className='sitter-main-wrap container'> 
            <div className='sitter-main row'>
              <div className='sitter-photos col-xs-12 col-md-8'>
                <SitterSlider
                  photos={sitter.gallery}/>
              </div>
              <div className='sitter-summary col-xs-12 col-md-4'>
                <SitterSummary
                  first_name={sitter.first_name}
                  last_name={sitter.last_name}
                  header={sitter.header}
                  city={sitter.city}
                  rating={sitter.review_info.average}
                  profile_pic={sitter.profile_pic}
                  favorited={this.state.favorited}
                  handleOnFavClick={this.handleOnFavClick.bind(this)}
                  />
              </div>  
            </div>
          </div>
          <div className='sitter-info-wrap container'>
            <div className='sitter-services row'>
              <div className='sitter-info col-xs-12 col-md-8'><SitterInfo/></div>
              <div className='sitter-calendar col-xs-12 col-md-4'>
                <DayPicker 
                numberOfMonths='1'
                hideKeyboardShortcutsPanel={true}
                daySize={48}
                />

              </div>
            </div>
            <div className='sitter-about row'>
              <div className='sitter-profile-bio col-xs-12 col-md-8'>
                <div className='bio-title'>Sobre {sitter.first_name}</div>
                <div className='bio-body'>{sitter.bio}</div>
              </div>
              <div className='sitter-pref col-xs-12 col-md-4'><SitterPreferences/></div>
            </div>
            <div className='sitter-feedback row'>
              <div className='sitter-reviews col-xs-12 col-md-8'><SitterReviews reviews={sitter.reviews} review_info={sitter.review_info}/></div>
              <div className='sitter-profile-map col-xs-12 col-md-4'>
                <GoogleMap
                center={[18.4596542, -69.9312117]}
                zoom={14}
                options={{
                  scrollwheel: false,
                  clickableIcons: false,
                  fullscreenControl: false,
                  maxZoom: 15,
                  minZoom: 7,
                }}

                >
                <ProfileMarker lat={18.4596542} lng={-69.9312117}/>
                </GoogleMap>
              </div>
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