import React, { useState } from 'react'
import  './style.css'
import Input from '../../base/Input'
import Button from '../../base/Button'
import { sendRequest } from '../../../core/config/request'
import { requestMethods } from '../../../core/enums/requestMethods'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'

const AddReview = ({id}) => {
  
  const [reviewData, setReview] = useState({
    rating: "",
    review: "",
  });

  const {AddItemReview} = useCustomDispatch()
  

  const reviewHandler = async () => {
    
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

      
      AddItemReview(id, response.ratingObject)
      

      console.log(response.ratingObject);

    } catch (error) {
      console.log(error.response);
    }
  }


  return (
    <div className='add-review-container'>
      <div className='add-review-stars'>
        <div className='add-review-star'>
          <Input 
            type={'text'}
            width={'100'}
            value={reviewData.rating}
            onChange={(rating) =>
              setReview({...reviewData, rating})
            }
          />
        </div>
      </div>
      <div className='add-review-input'>
        <Input 
          type={'text'}
          width={'400'}
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