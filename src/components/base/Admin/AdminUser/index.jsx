import React from 'react'
import { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { sendRequest } from '../../../../core/config/request';
import { requestMethods } from '../../../../core/enums/requestMethods';
import { useCustomDispatch } from '../../../../redux/customHooks/customDispatch';

//{
//  "_id": "650c1d6cca36e31e84831579",
//  "username": "userfordelete",
//  "first_name": "User",
//  "last_name": "Delete",
//  "email": "user.delete@example.com",
//  "profile_picture": "userfordelete_2023-09-21T10-39-39.jpg",
//  "password": "$2b$10$OSr4Rd7jMCaD6TDEgbXKs.hcKC/UdD0LpRV5mraPZ0XgDV17gL4MO",
//  "user_type": 1,
//  "user_items": [],
//  "user_favorites": [],
//  "user_bookings": [],
//  "user_ratings": [],
//  "createdAt": "2023-09-21T10:39:40.341Z",
//  "updatedAt": "2023-09-21T10:39:40.341Z",
//  "__v": 0
//}
const AdminUser = ({user}) => {

  const [admin_password, setAdminPassword] = useState({
    admin_password: "",
  });

  const {deleteFromUsers} = useCustomDispatch()

  const deleteUserHandler = async () => {
      
      try {
        const response = await sendRequest({
          method: requestMethods.DELETE,
          route: `/admin/delete-account/${user._id}`,
          body: admin_password,
        });
        console.log( `/admin/delete-account/${user._id}`)
        console.log(response.user_id)

        deleteFromUsers(user._id)

      } catch (error) {
        console.log(error.response.data.message);
      }
    }

  return (
    <div key={user._id} className="form-container">
    <div className="display-user">
    <div className="spacer-20"></div>
    <div>
        <div className="profile-avatar pointer white-text green-bg">
          { user.profile_picture ? (
            <img src={`http://127.0.0.1:8000/uploads/${user.profile_picture}`} alt="profile" className='profilepicture'/>
          ) : (
            <span className="profile-letter">
              {user.first_name[0]}
            </span>
          )}
        </div>
    </div>
    <h1>{user.username}</h1>
    <h3>
      {user.first_name} {user.last_name}
    </h3>
    <div className="spacer-30"></div>
    <Input 
      type="password"
      placeholder="Admin Password"
      value={admin_password}
      onChange={(admin_password) => setAdminPassword({
        ...admin_password,
        admin_password,
      })}
    />
    <Button
      text={"Delete User"}
      onClick={() => deleteUserHandler()}
    />
    <div className="spacer-10"></div>
    <div className="spacer-15"></div>
    <div className="spacer-30"></div>

    </div>
  </div>
  )
}


export default AdminUser