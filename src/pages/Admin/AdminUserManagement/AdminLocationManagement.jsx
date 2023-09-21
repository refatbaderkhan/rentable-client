import React from 'react'
import "./style.css";
import AdminCreateCity from '../../../components/ui/Admin/AdminLocationManagement/AdminCreateCity';
import AdminDisplayCities from '../../../components/ui/Admin/AdminLocationManagement/AdminDisplayCities';

const AdminLocationManagement = () => {
  return (
    <div>
      <AdminCreateCity />
      <AdminDisplayCities />
    </div>
  )
}

export default AdminLocationManagement