import React from 'react'
import Button from '../../../base/Button'


const AdminProfileMenu = ({handleLogout}) => {
  return (
    <div>
    <p> this user is admin </p>
    <Button
    color = {"primary-bg"}
    textColor = {"white-text"}
    text = {"logout"}
    onClick = {() => handleLogout()}
    />
    </div>
  )
}

export default AdminProfileMenu