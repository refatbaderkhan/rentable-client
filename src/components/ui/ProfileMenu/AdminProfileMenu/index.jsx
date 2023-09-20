import React from 'react'
import Button from '../../../base/Button'
import { useNavigate } from 'react-router-dom'

const AdminProfileMenu = ({handleLogout, setProfileToggle}) => {
  
  const navigate = useNavigate();

  const navigateAndToggle = (path) => {
    navigate(path);
    setProfileToggle(false);
  }

  return (
    <div>
    <Button
    color = {"primary-bg"}
    textColor = {"white-text"}
    text = {"Categories Management"}
    onClick = {() => navigateAndToggle("/category-management")}
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