import React, { useState } from 'react'
import  './style.css'
import Input from '../../base/Input'
import Textarea from '../../base/Textarea'
import Button from '../../base/Button'
import { sendRequest } from '../../../core/config/request'
import { requestMethods } from '../../../core/enums/requestMethods'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'
import StarRating from '../../base/StarRating'

const AddReview = ({id, type}) => {
  
  const [reviewData, setReview] = useState({
    rating: "",
    review: "",
  });

  const {addItemReview, addUserReview} = useCustomDispatch()
  

  const reviewHandler = async () => {
    if (type === 'item') {
      try {
        const response = await sendRequest({
          method: requestMethods.POST,
          route: `/user/rate/${id}`,
          body: reviewData,
        });

        setReview({
          rating: "",
          review: "",
        });


        addItemReview(id, response.ratingObject)

      } catch (error) {
        console.log(error.response);
      }
    }

    if (type === 'user') {
      try {
        const response = await sendRequest({
          method: requestMethods.POST,
          route: `/user/rate-user/${id}`,
          body: reviewData,
        });
  
        setReview({
          rating: "",
          review: "",
        });

        addUserReview(id, response.ratingObject)
  
  
      } catch (error) {
        console.log(error.response);
      }  
    }
  }


  return (
    <div className='add-review-container'>
      <div className='add-review-stars'>
        <div className='add-review-star'>
          <StarRating
            value={reviewData.rating}
            onChange={(rating) => setReview({...reviewData, rating})}
          />
        </div>
      </div>
      <div className='add-review-input'>
        <Textarea
          alternative={true}
          value={reviewData.review} 
          onChange={(review) =>
            setReview({...reviewData, review})
          }
        />
      </div>
      <div className='add-review-button'>
        <Button
          text={'Add Review'}
          onClick={() => reviewHandler()}
        />
      </div>
    </div>
  )
}

export default AddReview