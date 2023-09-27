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
      1
    </div>
    <div className='admin-dashboard-content-table-entry-subname'>
      {subEntryName}
    </div>
    <div className='admin-dashboard-content-table-entry-subdelete'>
      <Button
        text='Delete'
        style={'Alternative'}
        onClick={() => handleSubDelete()}
      />
    </div>
    </div>
  )
}

export default AdminDashboardSubEntry