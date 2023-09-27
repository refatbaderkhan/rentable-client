import React from 'react'
import ReviewCard from '../ReviewCard'

const DisplayReviews = ({reviews, type}) => {
  
  return (
    <div className='display-reviews'>
      {reviews.map(review => (
        <ReviewCard key={review._id} review={review} type={type} />
      ))}
    </div>
  )
}

export default DisplayReviews