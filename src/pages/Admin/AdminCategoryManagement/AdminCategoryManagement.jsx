import React from 'react'
import "./style.css";
import AdminCreateCategory from '../../../components/ui/AdminCategoryManagement/AdminCreateCategory';
import AdminDisplayCategories from '../../../components/ui/AdminCategoryManagement/AdminDisplayCategories';

const AdminCategoryManagement = () => {
  return (
    <div>
      <AdminCreateCategory />
      <AdminDisplayCategories />
    </div>
  )
}

export default AdminCategoryManagement