  import React, {useEffect, useState} from 'react'
  import './style.css'
  import Map from '../../components/base/Map'
  import { useCustomSelector } from '../../redux/customHooks/customSelector'
  import ItemImages from '../../components/ui/ItemImages'
  import { generateImageUrl } from '../../core/config/generateImageUrl'
  import ItemBooking from '../../components/ui/ItemBooking'
  import { useNavigate, useParams } from 'react-router-dom'
import Reviews from '../../components/ui/Reviews'

  const Item = () => {
  
    const {id} = useParams()
    const navigate = useNavigate()
    
    const {items, item} = useCustomSelector()
    const [foundItem, setFoundItem] = useState({})
    const [foundItemImages, setFoundItemImages] = useState([])
    const [foundItemBookings, setFoundItemBookings] = useState([])
    const [foundItemReviews, setFoundItemReviews] = useState([])
    const [loading, setLoading] = useState(true);



    useEffect(() => {
      if (items.length === 0) return
      const fetchItem = async () => {
        try {
          const itemData = await item(id);
          setFoundItem(itemData);
          setFoundItemImages(itemData.item_images);
          setFoundItemBookings(itemData.item_bookings);
          setFoundItemReviews(itemData.item_ratings);

          setLoading(false);
        } catch (error) {
          console.error('Error fetching item data:', error);
          setLoading(false);
        }
      };
  
      fetchItem();
    }, [items]);

    
    if (loading) {
      return <div>Loading...</div>; 
    }
    if (foundItem) {
    return (
      <div className='item-page-container'>
        <div className='item-section'>
          <div className='item-filter'>
            All items _ Category _ subCategory
          </div>
          <div className='item-pictures'>
            <ItemImages foundItemImages={foundItemImages} />
          </div>
          <div className='user-main'>
          <div className='item-main-user pointer' onClick={()=>navigate(`/profile/${foundItem.user_id}`)}>
            <div className='item-user-avatar'>
              {foundItem.user_profile_picture ? (
                <img src={generateImageUrl(foundItem.user_profile_picture)} alt='profile' className='item-user-picture' />
              ) : (
                <span className='item-user-letter'>
                  {foundItem.username[0]}
                </span>
              )}
            </div>
            <div className='item-user-name'>
              <div>{foundItem.username}</div> 
            </div>
          </div>
            <div className='item-user-rating'>
              5.0
            </div>
          </div>
          <div className='line'></div>
          <div className='description'>
            <div className='description-title'>
              Item Description
            </div>
            <div className='description-text'>
              {foundItem.item_description}
            </div>
          </div>
          <div className='line'></div>
          <div className='location'>
            <div className='location-title'>
              Location
            </div>
            <div className='location-text'>
              {foundItem.item_location.area}, {foundItem.item_location.city_name}
            </div>
            <div className='location-map'>
              <Map item_latitude={foundItem.item_location.latitude} item_longitude={foundItem.item_location.longitude} alternative={true} />
            </div>
          </div>
          <div className='review'>
            <div className='review-title'>
              Reviews
            </div>
            <div className='review-element'>
              <Reviews id={foundItem._id} reviews={foundItemReviews} type={'item'} />
            </div>
          </div>
        </div>
        <div className='booking-section'>
          <div className='item-title'>
            {foundItem.item_name}
          </div>
          <div>
            <ItemBooking foundItem={foundItem} foundItemBookings={foundItemBookings} />
          </div>
        </div>
      </div>
    )
  }
}

  export default Item