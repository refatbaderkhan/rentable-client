import React, {useEffect, useState} from 'react'
import { generateImageUrl } from '../../../core/config/generateImageUrl'
import  './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import StarRating from '../../base/StarRating'

const ReviewCard = ({review, type}) => {

  const {getUserById} = useCustomSelector()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    if (type === 'item') {
    const data = getUserById(review.user_id)
    setUser(data)
    setLoading(false)
    }

    if (type === 'user') {
      const data = getUserById(review.rater_user_id)
      setUser(data)
      setLoading(false)
    }
  }, [review]);
  
  if (loading) {
    return <div>Loading...</div>; 
  }
  if (user){
  return (
    <div className='review-card'>
      <div className='review-card-head'>
        <div className='review-card-head-user'>
          <div className="review-avatar">
            {user.profile_picture ? (
              <img src={generateImageUrl(user.profile_picture)} alt="profile" className='review-picture'/>
            ) : (
              <span className="profile-letter">
                {user.first_name[0]}
              </span>
            )}
          </div>
          <div className="review-username">
            {user.first_name} {user.last_name}
          </div>
        </div>
        <div className='review-card-head-rating'>
          <StarRating value={review.rating} />
        </div>
      </div>
      <div className='review-card-body'>
        {review.review}
      </div>
      <div className='review-card-footer'>
        02/02/2020
      </div>
    </div>
  )}
}

export default ReviewCard