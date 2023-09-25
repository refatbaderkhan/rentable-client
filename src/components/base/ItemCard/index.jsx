import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { generateImageUrl } from '../../../core/config/generateImageUrl'

const ItemCard = ({item}) => {

  const navigate = useNavigate()

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
            5.0(7)
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard