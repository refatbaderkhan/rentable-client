import React from 'react'
import "./style.css";
import AdminCreateCategory from '../../../components/ui/Admin/AdminCategoryManagement/AdminCreateCategory';
import AdminDisplayCategories from '../../../components/ui/Admin/AdminCategoryManagement/AdminDisplayCategories';

const AdminCategoryManagement = () => {
  return (
    <div>
      <AdminCreateCategory />
      <AdminDisplayCategories />
    </div>
  )
}

export default AdminCategoryManagement