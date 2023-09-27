import React from 'react'
import  './style.css'
import AddReview from '../AddReview'
import DisplayReviews from '../DisplayReviews'

const Reviews = ({id, reviews, type}) => {


  return (
    <div className='reviews-container'>
      <div>
        <AddReview id={id} type={type} />
      </div>
      <div className='reviews-display-reviews'>
        {reviews !== 0 && (
        <DisplayReviews id={id} reviews={reviews} type={type}/>
        )}
      </div>
    </div>
  )
}

export default Reviews