import React from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import ItemCard from '../../base/ItemCard'

const DisplayItems = () => {

  const {items} = useCustomSelector()
  
  return (
    items.map((item) => (
      <ItemCard item={item} />
    ))
  )
}

export default DisplayItems