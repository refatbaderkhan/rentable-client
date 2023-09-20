import React from 'react'
import Button from '../../../base/Button'


const UserProfileMenu = ({handleLogout}) => {
  return (
    <div>
    <p> this user is user </p>
    <Button
    color = {"primary-bg"}
    textColor = {"white-text"}
    text = {"logout"}
    onClick = {() => handleLogout()}
    />
    </div>
  )
}

export default UserProfileMenu