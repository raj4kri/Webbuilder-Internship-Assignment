import React, { Component } from 'react'
import '../Rating/rating.scss'
export default class Rating extends Component {
  render() {
    return (
      <div>

<h1 className='ratinghead'>9.5</h1>
<p className='pararating'>Exceptional</p>
<form className="star-rating">
  <input
    className="radio-input"
    type="radio"
    id="star5"
    name="star-input"
    defaultValue={5}
  />
  <label className="radio-label" htmlFor="star5" title="5 stars">
    5 stars
  </label>
  <input
    className="radio-input"
    type="radio"
    id="star4"
    name="star-input"
    defaultValue={4}
  />
  <label className="radio-label" htmlFor="star4" title="4 stars">
    4 stars
  </label>
  <input
    className="radio-input"
    type="radio"
    id="star3"
    name="star-input"
    defaultValue={3}
  />
  <label className="radio-label" htmlFor="star3" title="3 stars">
    3 stars
  </label>
  <input
    className="radio-input"
    type="radio"
    id="star2"
    name="star-input"
    defaultValue={2}
  />
  <label className="radio-label" htmlFor="star2" title="2 stars">
    2 stars
  </label>
  <input
    className="radio-input"
    type="radio"
    id="star1"
    name="star-input"
    defaultValue={1}
  />
  <label className="radio-label" htmlFor="star1" title="1 star">
    1 star
  </label>
</form>



        
      </div>
    )
  }
}
