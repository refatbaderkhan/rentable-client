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
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="pointer"  onClick={() => handleMainDelete()}>
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" fill="#1EDC98"></path>
          </svg>
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
          <svg onClick={()=> setCreateModal(true)} xmlns="http://www.w3.org/2000/svg"  className='pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48">
              <path fill="none" stroke="#1EDC98" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M35.4,38.8c-3.2,2.4-7.1,3.9-11.4,3.9C13.7,42.7,5.3,34.3,5.3,24c0-2.6,0.6-5.2,1.5-7.4"></path><path fill="none" stroke="#1EDC98" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M12.1,9.6C15.3,7,19.5,5.3,24,5.3c10.3,0,18.7,8.4,18.7,18.7c0,2.3-0.4,4.5-1.2,6.6"></path><line x1="24" x2="24" y1="14" y2="34" fill="none" stroke="#1EDC98" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line><line x1="34" x2="14" y1="24" y2="24" fill="none" stroke="#1EDC98" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
          </svg>
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