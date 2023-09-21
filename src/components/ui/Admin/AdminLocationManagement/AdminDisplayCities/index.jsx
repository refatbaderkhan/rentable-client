import React from 'react'
import {useCustomSelector} from '../../../../../redux/customHooks/customSelector'
import AdminCity from '../../../../base/Admin/AdminCity'


const AdminDisplayCities = () => {

  const {cities} = useCustomSelector()

  return (
    cities.map((city) => (
      <AdminCity city={city} />
    ))
  )
}

export default AdminDisplayCities