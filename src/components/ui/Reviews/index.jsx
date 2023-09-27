import React from 'react'
import  './style.css'
import AddReview from '../AddReview'
import DisplayReviews from '../DisplayReviews'

const Reviews = ({id, reviews}) => {

  return (
    <div className='reviews-container'>
      <div>
        <AddReview id={id} />
      </div>
      <div className='reviews-display-reviews'>
        <DisplayReviews id={id} reviews={reviews}/>
      </div>
    </div>
  )
}

export default Reviews