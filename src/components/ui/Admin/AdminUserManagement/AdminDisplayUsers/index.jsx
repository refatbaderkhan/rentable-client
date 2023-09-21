import React from 'react'
import AdminUser from '../../../../base/Admin/AdminUser'
import { useCustomSelector } from '../../../../../redux/customHooks/customSelector'

const AdminDisplayUsers = () => {

  const {users} = useCustomSelector()
  console.log('adminDisplayUsersConsole', users)  

  return (
    users.map((user) => (
      <AdminUser user={user} />
    ))
  )
}

export default AdminDisplayUsers