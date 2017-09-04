import React, { Component } from 'react'
import ReactStars from 'react-stars'

export default class SitterReviews extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const reviews = this.props.reviews.map( (review)=> 
      (          <div className='profile-review col-xs-12'>
            <div className='review-header row'>
              <div className='review-header-pic col-xs-3 col-sm-2 col-lg-1'>
                <img src={review.profile_pic}></img>
              </div>
              <div className='review-header-body col-xs-5'>
                <div className='header-name'>{review.reviewer}</div>
                <div className='header-date'>{review.date}</div>
                <div className='header-rating'>
                  <ReactStars
                  count={5}
                  value={review.rating}
                  size={15}
                  edit={false}
                  color2={'#ffd700'} />
                </div>
              </div>
            </div>
            <div className='review-body row'>{review.body}</div>
          </div>)
      )
    return(
        <div className='reviews-wrap col-xs-12'>
          <div className='reviews-data row'>
           <div className='reviews-rating-amt col-xs-4 col-lg-3'>{this.props.review_info.total + ' Reseñas' } </div>
           <div className='reviews-rating-avg col-xs-5 col-lg-4'>
            <ReactStars
              count={5}
              value={this.props.review_info.average}
              size={24}
              edit={false}
              color2={'#ffd700'} />
          </div>
          </div>
          {reviews}
        </div>
      )
  }
}