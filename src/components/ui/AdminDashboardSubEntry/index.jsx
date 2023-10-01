import React,{useState, useEffect} from 'react'
import './style.css'
import Button from '../../base/Button'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'
import { requestMethods } from '../../../core/enums/requestMethods'
import { sendRequest } from '../../../core/config/request'

const AdminDashboardSubEntry = ({map, mapId, behavior}) => {

  const [subEntryName, setSubEntryName] = useState('')

  const {deleteSubCategory, deleteArea} = useCustomDispatch()


  const setNames = () => {
    if (behavior === 'category') {
      setSubEntryName(map.subCategory_name)
    }

    if (behavior === 'location') {
      setSubEntryName(map)
    }
  }

  const handleSubDelete = async() => {  
    if (behavior === 'category') {
      try {
        const response = await sendRequest({
          method: requestMethods.DELETE,
          route: `/admin/delete-subcategory/${map._id}`,
        });
      
        deleteSubCategory(map._id, map.category_id)
      
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    if (behavior === 'location') {
      try {
        const response = await sendRequest({
          method: requestMethods.DELETE,
          route: `/admin/delete-area/${mapId}`,
          body: {area_name: map},
        });
  
        deleteArea(map, mapId)
  
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  }
  

  useEffect(() => {
    setNames()
  }, [map, behavior, mapId])


  return (
    <div className='admin-dashboard-content-table-entry-sub'>
    <div className='admin-dashboard-content-table-entry-subcounter'>
  
    </div>
    <div className='admin-dashboard-content-table-entry-subname'>
      {subEntryName}
    </div>
    <div className='admin-dashboard-content-table-entry-subdelete'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="pointer"  onClick={() => handleSubDelete()}>
        <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" fill="#363738"></path>
      </svg>
    </div>
    </div>
  )
}

export default AdminDashboardSubEntry