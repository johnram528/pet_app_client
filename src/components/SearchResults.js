import React, { Component } from 'react'
import '../SitterCard.css'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cards = this.props.results.sitters.map ((sitter) =>
      <div className='search-sitter-card'>
      <div className='top-card-row'>
        <div className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
          <div className='card-pic'>
            <img src={sitter.picture}/>
          </div>
        </div>
        <div className='col-xs-6 col-sm-7 col-md-5 col-lg-6'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='card-name'>{sitter.name}</div>
              <div className='card-badges'></div>
            </div>
          </div>
          <div className='profile-header hidden-xs'>{sitter.header}</div>
          <div className='card-location'>{sitter.location}</div>
          <div className='card-review'>{sitter.rating}</div>
        </div>
        <div className='col-xs-3 col-md-4 min-price-div'>
          <div>
            <span className='rate'>{'$' + sitter.rate}</span>
            <br className='hidden-sm hidden-md hidden-lg'/>
            <span className='card-frequency'>{'/' +sitter.frequency}</span>
          </div>
        </div>
      </div>
      <div className='bottom-card-row'>
        <div className='col-xs-12'>
          <div className='service-list hidden-xs'>{sitter.service_list}</div>
          <div className='sitter-bio hidden-xs'>{sitter.bio}</div>
        </div>
        <div className='col-xs-12 data-row'></div>
      </div>
    </div>
    )


  return(
  <div className='search-results'>
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
  </div>
  )
  }

}