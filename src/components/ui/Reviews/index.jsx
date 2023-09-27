import React from 'react'
import  './style.css'
import AddReview from '../AddReview'

const Reviews = ({id}) => {
  return (
    <div className='reviews-container'>
      <div>
        <AddReview id={id} />
      </div>
      <div className='reviews'>
      </div>
    </div>
  )
}

export default Reviews