import React, {useState} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'

const AdminDashboardMenu = ({setDashboardToggle}) => {

  return (
    <div className='admin-dashboard-menu'>
      <div className='admin-dashboard-menu-item pointer' onClick={() => setDashboardToggle('category')}>
        <span>Categories</span>
      </div>
      <div className='admin-dashboard-menu-item pointer' onClick={() => setDashboardToggle('location')}>
        <span>Locations</span>
      </div>
      <div className='admin-dashboard-menu-item pointer' onClick={() => setDashboardToggle('user')}>
        <span>Users</span>
      </div>
    </div>
  )
}

export default AdminDashboardMenu