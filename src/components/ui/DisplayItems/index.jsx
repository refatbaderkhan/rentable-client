import React, {useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'
import ItemCard from '../../base/ItemCard'
import Button from '../../base/Button'
import Input from '../../base/Input'
import FilterItems from '../FilterItems'


const DisplayItems = ({userItems}) => {

  const { items, search} = useCustomSelector();
  const {setSearch} = useCustomDispatch();


  const [searchTerm, setSearchTerm] = useState(search);

  const searchedItems = userItems ? userItems : items.filter((item) =>
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

  const [filterToggle, setFilterToggle] = useState(true);

  useEffect(() => {
    setSearchTerm(search);
    if (userItems) {
      setFilterToggle(false);
    }
  }, [search])
  
  return (
    <div className='items-page'>
      { !userItems && (
        <div className='items-page-filter'>
          <div className='items-page-filter-title'>
            Search results
          </div>
          {filterToggle && (
            <FilterItems filters={filters} setFilters={setFilters} setFilterToggle={setFilterToggle}/>
          )}
        </div>
      )}
        <div className='display-items-items'>
        {userItems ? (
            <div className='profile-display'>
              <div className='profile-display-items'>
              {filteredItem.map((item) => (
                <ItemCard item={item} />
              ))}
              </div>
            </div>
          ) : (
            <>
            <div className='all-display-page'>
              <div className='all-display-filter'>
                <div>
                </div>
                <div className='search-bar'>
                  <div className='search-bar-search'>
                    <Input
                      placeholder = {"Enter your search"}
                      onChange={(value) => setSearch({search: value})}
                    />
                  </div>
                  <div className='search-bar-button'>
                  <Button
                    style={"NavBar"}
                    text = {"Search"}
                  />
                  </div>
                </div>
            </div>
            <div className='all-display'>
              {filteredItem.map((item) => (
                <ItemCard item={item} />
              ))}
            </div>
          </div>
          </>
        )}
      </div>
      </div>
  );
};

export default DisplayItems