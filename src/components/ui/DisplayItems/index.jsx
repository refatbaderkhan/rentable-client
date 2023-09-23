import React, {useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import ItemCard from '../../base/ItemCard'
import Input from '../../base/Input'
import Button from '../../base/Button'


const DisplayItems = () => {

  const { items, search} = useCustomSelector();

  const [searchTerm, setSearchTerm] = useState(search);

  const searchedItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [filterToggle, setFilterToggle] = useState(false);

  useEffect(() => {
    setSearchTerm(search);
  }, [search])
  
  return (
    <div>
      <Button
        text="Filter"
        style={"Alternative"}
        onClick={() => setFilterToggle((prevFilterToggle) => !prevFilterToggle)}
        />
    <div className='flex'>
    {searchedItems.map((item) => (
      <ItemCard item={item} />
    ))}
    </div>
    {filterToggle && (
      <div className='filter-modal'>
      </div>
    )}
    </div>
  )
}

export default DisplayItems