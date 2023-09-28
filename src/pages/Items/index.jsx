import React from 'react'
import './style.css'
import DisplayItems from '../../components/ui/DisplayItems'

const Items = () => {
  return (
    <div className='items-page-container'>
      <div className='items-page'>
      <DisplayItems />
      </div>
    </div>
  )
}

export default Items