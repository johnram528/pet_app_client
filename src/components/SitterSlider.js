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
    };

    return (
            <Slider {...settings}>
              <div><img src='https://roneindyhiphop.files.wordpress.com/2017/02/148777547253231-e1487775574321.jpeg?quality=100&strip=all&w=1024'></img></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
              <div><h3>5</h3></div>
              <div><h3>6</h3></div>
            </Slider>
      )
  }
}