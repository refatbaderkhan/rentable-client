import React, {useEffect, useState} from 'react'
import './style.css'
import AdminDashboardMenu from '../../components/ui/AdminDashboardMenu'
import AdminDashboardContent from '../../components/ui/AdminDashboardContent';

const AdminDashboard = () => {

  const [dashboardToggle, setDashboardToggle] = useState('category');

  return (
    <div className='admin-dashboard-container'>
      <div className='admin-dashboard-menu-section'>
        <AdminDashboardMenu setDashboardToggle={setDashboardToggle}/>
      </div>
      <div className='admin-dashboard-content'>
        <AdminDashboardContent behavior={dashboardToggle} />
      </div>
    </div>
  )
}

export default AdminDashboard