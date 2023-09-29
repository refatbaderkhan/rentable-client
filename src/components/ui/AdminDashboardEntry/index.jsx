import React, {useEffect, useState} from 'react'
import './style.css'
import Button from '../../base/Button'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'
import { requestMethods } from '../../../core/enums/requestMethods'
import { sendRequest } from '../../../core/config/request'
import AdminDashboardSubEntry from '../AdminDashboardSubEntry/'
import AdminDashboardCreateModal from '../AdminDashboardCreateModal'
import AdminDashboardUserModal from '../AdminDashboardUserModal'

const AdminDashboardEntry = ({behavior, map}) => {
  
  const [entryName, setEntryName] = useState('')
  const [subEntryMap, setSubEntryMap] = useState([])
  const [notUser, setNotUser] = useState(false)
  const [ChangePassword, setChangePassword] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const [userModal, setUserModal] = useState(false)
  const [subBehavior, setSubBehavior] = useState('')

  const {deleteCategory, deleteCity} = useCustomDispatch()

  const setNames = () => {
    if (behavior === 'category') {
      setSubEntryMap(map.subCategorySchema)
      setEntryName(map.category_name)
      setNotUser(true)
      setChangePassword(false)
      setSubBehavior('subCategory')
    }

    if (behavior === 'location') {
      setSubEntryMap(map.areas)
      setEntryName(map.city_name)
      setNotUser(true)
      setChangePassword(false)
      setSubBehavior('area')
    }

    if (behavior === 'user') {
      setEntryName(map.username, map.first_name, map.last_name, map.email)
      setChangePassword(true)
      setNotUser(false)
    }
  }

  const handleMainDelete = async() => {
    if (behavior === 'category') {
      try {
        const response = await sendRequest({
          method: requestMethods.DELETE,
          route: `/admin/delete-category/${map._id}`,
        });
  
        deleteCategory(map._id)
        
      } catch (error) {
        console.log(error);
      }
    }

    if (behavior === 'location') {
      try {
        const response = await sendRequest({
          method: requestMethods.DELETE,
          route: `/admin/delete-city/${map._id}`,
        });
  
        deleteCity(map._id)
        
      } catch (error) {
        console.log(error);
      }
    }

    if (behavior === 'user') {
      setUserModal(true)
    }
  }


  useEffect(() => {
    setNames()
    setDropdown(false)
  }, [behavior, map])


  return (
    <div className='admin-dashboard-content-table-entry'>
      <div className='admin-dashboard-content-table-entry-main'>
        <div className='admin-dashboard-content-table-entry-name'>
          {entryName}
        </div>
        <div className='admin-dashboard-content-table-entry-delete'>
          <Button
            text='Delete'
            style={'Alternative'}
            onClick={() => handleMainDelete()}
          />
        </div>
        {
        //ChangePassword && (
        //<div className='admin-dashboard-content-table-entry-password'>
        //  <Button
        //    text='Change Password'
        //    style={'Alternative'}
        //    onClick={() => console.log('change password')}
        //  />
        //</div>
        //)
        }
        {notUser && (
        <div className='flex'>
        <div className='admin-dashboard-content-table-entry-subcreate'>
          <Button
            text='Create Sub'
            style={'Alternative'} 
            onClick={() => setCreateModal(true)}
          />
          {createModal ?
            <AdminDashboardCreateModal behavior={subBehavior} id={map._id} setCreateModal={setCreateModal}/>  
          : null}
        </div>
        <div className='admin-dashboard-content-table-entry-dropdown pointer'>
          <svg onClick={() => setDropdown((prev) => !prev)} height="" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" fill="#1EDC98"></path>
          </svg>
        </div>
        </div>
        )}
      </div>
      {dropdown && (
        subEntryMap.map((subEntry) => (
          <AdminDashboardSubEntry map={subEntry} mapId ={map._id} behavior={behavior} />
        ))
      )}
      {userModal && (
        <AdminDashboardUserModal id={map._id} setUserModal={setUserModal} />
      )}
    </div>
  )
}

export default AdminDashboardEntry