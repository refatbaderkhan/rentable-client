import React, { useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../redux/customHooks/customSelector'
import { generateImageUrl } from '../../core/config/generateImageUrl'
import Button from '../../components/base/Button'
import DisplayItems from '../../components/ui/DisplayItems'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Reviews from '../../components/ui/Reviews'
import cover from '../../assets/cover.jpg'


const Profile = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  const {users, getUser, getUserItems} = useCustomSelector()
  const [foundUser, setFoundUser] = useState({})
  const [foundUserItems, setFoundUserItems] = useState({})
  const [foundUserReviews, setFoundUserReviews] = useState({})
  const [foundUserRating, setFoundUserRating] = useState(0)
  const [loading, setLoading] = useState(true);
  const [itemsReviewsToggle, setItemsReviewsToggle] = useState(true);


  const calculateUserRating = (reviews) => {
    let totalRating = 0;
    let averageRating = 0;
    if (reviews.length > 0) {
      reviews.forEach(review => {
        totalRating += review.rating;
      });
      averageRating = totalRating / reviews.length;
    }
    setFoundUserRating(averageRating);
  }


  useEffect(() => {
    const fetchUser = async () => {
      try {

        const userData = await getUser(id);
        const userItems = await getUserItems(id);   
        
        setFoundUser(userData);
        setFoundUserItems(userItems);
        setFoundUserReviews(userData.user_ratings);
        calculateUserRating(userData.user_ratings);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    }
    fetchUser();
  }, [users]);



  if (loading) {
    return <div>Loading...</div>; 
  }
  if (foundUser && foundUserItems){
    return (
      <div className='profile-page-container'>
        <div className='profile-cover'>
          <img src={cover} alt='cover' className='profile-cover-image' />
        </div>
        <div className='profile-info'>
          <div className='profile-page-avatar'>
            { foundUser.profile_picture ? (
            <img src={generateImageUrl(foundUser.profile_picture)} alt='profile' className='profile-page-picture' />
            ) : (
              <div className='profile-page-letter'>
              {foundUser.first_name[0]}
              </div>
            )}
          </div>
          <div className='profile-page-user-info'>
            <div className='profile-page-user-info-upper'>
            </div>
            <div className='profile-page-user-info-lower'>
              <div className='username-rating'>
                <div className='profile-username'>
                  {foundUser.username}
                </div>
                <div className='profile-rating'>
                  {foundUserRating.toFixed(1)}
                </div>
              </div>
              <div className='user-button'>
                <Button
                  text='Message'
                  onClick={() => navigate(`/chat/${foundUser._id}`)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='fullname-location'>
          <div className='profile-fullname'>
            {foundUser.first_name} {foundUser.last_name}
          </div>
          <div className='profile-location'>
            Badaro, Beirut
          </div>
        </div>
        <div className='items-reviews'>
          <div className='items pointer' onClick={()=> setItemsReviewsToggle((prevItemsReviewsToggle) => !prevItemsReviewsToggle)}>
            Items
          </div>
          <div className='reviews pointer' onClick={()=> setItemsReviewsToggle((prevItemsReviewsToggle) => !prevItemsReviewsToggle)}>
            Reviews
          </div>
        </div>
        <div className='profile-line'>
        </div>
        {itemsReviewsToggle && (
        <div className='profile-items'>
          <div>
          <DisplayItems userItems={foundUserItems} />
          </div>
        </div>
        )}
        {itemsReviewsToggle === false && (
        <div className='profile-reviews'>
          <Reviews id={id} reviews={foundUserReviews} type={'user'}/>
        </div>
        )}
      </div>
    )
  }
}

export default Profile