import React from 'react'
import Button from '../../../base/Button'

const AdminProfileMenu = ({handleLogout, setProfileToggle}) => {
  

  return (
    <div>
    <Button
    color = {"primary-bg"}
    textColor = {"white-text"}
    text = {"Categories Management"}
    />
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