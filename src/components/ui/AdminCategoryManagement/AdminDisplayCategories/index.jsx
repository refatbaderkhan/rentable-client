import React from 'react'
import {useCustomSelector} from '../../../../redux/customHooks/customSelector'

const AdminDisplayCategories = () => {

  const {categories} = useCustomSelector()

  console.log(categories)
  return (
    <div>AdminDisplayCategories</div>
  )
}

export default AdminDisplayCategories