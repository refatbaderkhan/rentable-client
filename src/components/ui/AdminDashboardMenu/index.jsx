import React from 'react'
import './style.css'

const AdminDashboardMenu = ({dashboardToggle, setDashboardToggle}) => {

  return (
    <div className='admin-dashboard-menu'>
      <div className={dashboardToggle === 'category' ? 'admin-dashboard-menu-item pointer green-text bold ' : 'admin-dashboard-menu-item white-text pointer '} onClick={() => setDashboardToggle('category')}>
        <span>Categories</span>
      </div>

      <div className={dashboardToggle === 'location' ? 'admin-dashboard-menu-item pointer green-text bold ' : 'admin-dashboard-menu-item white-text pointer '} onClick={() => setDashboardToggle('location')}>
        <span>Locations</span>
      </div>
      <div className={dashboardToggle === 'user' ? 'admin-dashboard-menu-item pointer green-text bold ' : 'admin-dashboard-menu-item white-text pointer '} onClick={() => setDashboardToggle('user')}>
        <span>Users</span>
      </div>
    </div>
  )
}

export default AdminDashboardMenu