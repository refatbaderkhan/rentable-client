import React, { useState } from 'react'
import './style.css'
import Button from '../../base/Button'
import Input from '../../base/Input'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'
import { sendRequest } from '../../../core/config/request'
import { requestMethods } from '../../../core/enums/requestMethods'

const AdminDashboardUserModal = ({id , setUserModal}) => {

  const [admin_password, setAdminPassword] = useState({admin_password: "",});
  const [error, setError] = useState(null)
  const {deleteFromUsers} = useCustomDispatch()

  const deleteUserHandler = async () => {
      
    try {
      const response = await sendRequest({
        method: requestMethods.DELETE,
        route: `/admin/delete-account/${id}`,
        body: admin_password,
      });
      console.log( `/admin/delete-account/${id}`)
      console.log(response.user_id)

      deleteFromUsers(id)

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className='admin-dashboard-modal-container'>
      <div className='admin-dashboard-modal-content'>
        <div className="">
        <div className="close-create-modal" onClick={() => setUserModal(false)}>x</div>

          <div className="create-category-modal">
          <div className="spacer-30"></div>
          <h2>Delete User</h2>
          <div className="spacer-30"></div>
            <Input
              placeholder={"Type your password here to confirm..."}
              onChange={(admin_password) => setAdminPassword({
                ...admin_password,
                admin_password,
              })}
            />
          {error && <p>{error}</p>}
          <div className="spacer-30"></div>
          <Button
            text={"Delte"}
            onClick={() => deleteUserHandler()}
          />
          <div className="spacer-10"></div>  
          <div className="spacer-20"></div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AdminDashboardUserModal