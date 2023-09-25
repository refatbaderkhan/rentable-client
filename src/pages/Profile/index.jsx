import React, { useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../redux/customHooks/customSelector'
import { generateImageUrl } from '../../core/config/generateImageUrl'
import Button from '../../components/base/Button'


const Profile = () => {
  
  const {getUser} = useCustomSelector()
  const [foundUser, setFoundUser] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser('650cc54362b557047c4ccbe7');
        console.log('our user', userData)
        setFoundUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);



  if (loading) {
    return <div>Loading...</div>; 
  }
  if (foundUser){
    return (
      <div className='profile-page-container'>
        <div className='profile-cover'>
        </div>
        <div className='profile-info'>
          <div className='profile-page-avatar'>
            <img src={generateImageUrl(foundUser.profile_picture)} alt='profile' className='profile-page-picture' />
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
                  5.0(7)
                </div>
              </div>
              <div className='user-button'>
                <Button
                  text='Message'
                  onClick={() => console.log('message')}
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
          <div className='items'>
            Items
          </div>
          <div className='reviews'>
            Reviews
          </div>
        </div>
        <div className='profile-line'>
        </div>
      </div>
    )
  }
}

export default Profile