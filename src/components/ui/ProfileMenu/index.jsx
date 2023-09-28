import React from 'react'
import './style.css'
import Button from '../../base/Button'

const ProfileMenu = ({handleLogout, setProfileToggle}) => {
  

  return (
    <div className='menu'>
    <Button
    text = {"logout"}
    onClick = {() => handleLogout()}
    />
    </div>
  )
}

export default ProfileMenu