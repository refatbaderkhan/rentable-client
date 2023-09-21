import React from 'react'
import Button from '../../../base/Button'
import './style.css'
import { useNavigate } from 'react-router-dom'

const AdminProfileMenu = ({handleLogout, setProfileToggle}) => {
  
  const navigate = useNavigate();

  const navigateAndToggle = (path) => {
    navigate(path);
    setProfileToggle(false);
  }

  return (
    <div className='menu'>
    <div className='pointer menu-entry' onClick={() => navigateAndToggle("/category-management")}>Users Management</div>
    <div className='pointer menu-entry' onClick={() => navigateAndToggle("/category-management")}>Categories Management</div>
    <div className='pointer menu-entry' onClick={() => navigateAndToggle("/location-management")}>Location Management</div>
    <div className='pointer menu-entry' onClick={() => handleLogout()}>Logout</div>
    </div>
  )
}

export default AdminProfileMenu