import React, { Component } from 'react' 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SitterSlider extends Component {
  constructor(props){
    super(props)

  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      fade: true,
      speed: 2000
    };

    const sitterGallery = 
      this.props.photos.map((pic)=>
        <div><img src={pic}></img></div>
        )
    
    return (
            <Slider {...settings}>
              {sitterGallery}
            </Slider>
      )
  }
}