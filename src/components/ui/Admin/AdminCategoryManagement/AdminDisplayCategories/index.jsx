import React from 'react'
import {useCustomSelector} from '../../../../../redux/customHooks/customSelector'
import AdminCategory from '../../../../base/Admin/AdminCategory'


const AdminDisplayCategories = () => {

  const {categories} = useCustomSelector()

  return (
    categories.map((category) => (
      <AdminCategory category={category} />
    ))
  )
}

export default AdminDisplayCategories