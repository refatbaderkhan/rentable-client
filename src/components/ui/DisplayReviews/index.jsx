import React from 'react'
import ReviewCard from '../ReviewCard'

const DisplayReviews = ({reviews}) => {
  return (
    <div className='display-reviews'>
      {reviews.map(review => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  )
}

export default DisplayReviews