import React, {useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import ItemCard from '../../base/ItemCard'
import Button from '../../base/Button'
import FilterItems from '../FilterItems'


const DisplayItems = () => {

  const { items, search} = useCustomSelector();

  const [searchTerm, setSearchTerm] = useState(search);

  const searchedItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [filters, setFilters] = useState({
    item_category_name: null,
    item_subcategory_name: null,
    city_name: null,
    area: null,
  });


  const filteredItem = filters.item_category_name || filters.item_subcategory_name || filters.city_name || filters.area
  ? searchedItems.filter((item) => {
      for (const key in filters) {
        if (filters[key] !== null) {
          if (key === 'city_name' || key === 'area') {
            if (item.item_location[key] !== filters[key]) return false;
          } else {
            if (item[key] !== filters[key]) return false;
          }
        }
      }
      return true;
    })
  : searchedItems; 

  const [filterToggle, setFilterToggle] = useState(false);

  useEffect(() => {
    setSearchTerm(search);
  }, [search])
  
  return (
    <div className='items-page'>
      {filterToggle && (
        <FilterItems filters={filters} setFilters={setFilters} setFilterToggle={setFilterToggle}/>
      )}
      <div className='display-items'>
        <div>
        <Button
          text="Filter"
          style={"Alternative"}
          onClick={() => setFilterToggle((prevFilterToggle) => !prevFilterToggle)}
          />
        </div>
        <div className='flex'>
          {filteredItem.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayItems