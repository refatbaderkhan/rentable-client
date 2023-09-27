import React, {useState,useEffect} from 'react'
import './style.css'
import Button from '../../base/Button'
import {useCustomSelector} from '../../../redux/customHooks/customSelector'
import AdminDashboardEntry from '../AdminDashboardEntry'
import AdminDashboardCreateModal from '../AdminDashboardCreateModal'


const AdminDashboardContent = ({behavior}) => {
  
  const [contentName, setContentName] = useState('')
  const [contentMap, setContentMap] = useState([])
  const [createModal, setCreateModal] = useState(false)

  const {categories, cities, users} = useCustomSelector()

  
  const setNames = () => {
    if (behavior === 'category') {
      setContentMap(categories)
      setContentName('Category')
    }

    if (behavior === 'location') {
      setContentMap(cities)
      setContentName('Location')
    }

    if (behavior === 'user') {
      setContentMap(users)
      setContentName('User')
    }
  }



  useEffect(() => {
    setNames()
  }
  , [behavior, categories, cities, users])


  return (
    <div className='admin-dashboard-content-container'>
      <div className='admin-dashboard-content-header'>
        <div className='admin-dashboard-content-header-title'>
          {contentName}
        </div>
        <div className='admin-dashboard-content-header-button'>
          {behavior === 'category' || behavior === 'location' ?
          <Button
            text='Create'
            onClick={() => setCreateModal(true)}
          />
          : null}
          {createModal ?
            <AdminDashboardCreateModal behavior={behavior} setCreateModal={setCreateModal}/>
          : null}
        </div>
      </div>
      <div className='admin-dashboard-content-table'>
        {contentMap.map((content) => (
        <AdminDashboardEntry map={content} behavior={behavior}/>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboardContent