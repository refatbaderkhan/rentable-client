import React, { useEffect, useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { generateImageUrl } from '../../../core/config/generateImageUrl'

const ItemCard = ({item}) => {

  const [averageRating, setAverageRating] = useState(0)

  const navigate = useNavigate()

  const calcluateAvergeRating = () => {
    let total = 0
    if (item.item_ratings.length > 0) {
      for (const rating of item.item_ratings) {
        total += rating.rating
      }
      const average = total / item.item_ratings.length
      setAverageRating(average.toFixed(1))
    } else {
      setAverageRating(0)
    }
  }

  useEffect(() => {
    calcluateAvergeRating()
  }
  , [item])

  return (
    <div key={item._id} className='card-container' onClick={()=>navigate(`/item/${item._id}`)}>
      <div className='display-item'>
        <div className= 'item-image'>
          { item.item_images ? (
            <img src={generateImageUrl(item.item_images[0])} alt="item" className='itemimage'/>
          ) : (
            <span className="item-letter">
              {item.item_name[0]}
            </span>
          )}
        </div>
        <div className='item-user'>
          <div className="profile-avatar white-text green-bg">
          {item.user_profile_picture ? (
            <img src={generateImageUrl(item.user_profile_picture)} alt="profile" className='profilepicture'/>
          ) : (
            <span className="profile-letter">
              {item.username[0]}
            </span>
          )}
          </div>
          <div className= 'item-username'>
            {item.username}
          </div>
        </div>
        <div className='item-name'>
          {item.item_name}
        </div>
        <div className='item-details'>
          <div className='item-price'>
            ${item.item_price}/day
          </div>
          <div className='item-rating'>
            <p>{averageRating}<span className='yellow-14'>&#9733;</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard