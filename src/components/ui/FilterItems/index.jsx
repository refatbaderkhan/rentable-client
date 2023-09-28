import React, {useState} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import Button from '../../base/Button'


const FilterItems = ({filters, setFilters, setFilterToggle}) => {

  const {categories, cities} = useCustomSelector()

  
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [locationToggle, setLocationToggle] = useState(false);

  const categoryToggleHandler = () => {
    setCategoryToggle(true)
    setLocationToggle(false)
  }

  const locationToggleHandler = () => {
    setLocationToggle(true)
    setCategoryToggle(false)
  }

  const updateFilters = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    })
  }


  return (
    <div>
    <div className='filter-container'>
      <div
      className='filter-close'
      onClick={() => setFilterToggle(false)}
      >
          x
      </div>
      <div className='filter-buttons'>
        <div>
          <Button
            text="Category"
            style={"Alternative"}
            onClick={ () => categoryToggleHandler()}
          />
        </div>
        <div>
          <Button
            text="Location"
            style={"Alternative"}
            onClick={() => locationToggleHandler()}
          />
        </div>
      </div>
    {categoryToggle && (
    <div className='filter-content'>
        {categories.map((category) => (
          <div class='filter'>          
          <span
            onClick={() => updateFilters('item_category_name', category.category_name)}
            className='filter-title pointer'>
            {category.category_name}
          </span>
          <div className='filter-line'></div>
          <div>
            {category.subCategorySchema.map((subcategory) => (
              <div className = 'filter-entries'>
              <span
              onClick={() => updateFilters('item_subcategory_name', subcategory.subCategory_name)}
              className='pointer'>
                <div className='filter-entry'>
                  {subcategory.subCategory_name}
                </div>
              </span>
              </div>
            ))}
          </div>
          </div>
        ))}
    </div>
    )}
    { locationToggle && (
    <div className='filter-content'>
        {cities.map((city) => (
          <div class='filter'>          
            <span
              onClick={() => updateFilters('city_name', city.city_name)}
              className='filter-title pointer'>
            {city.city_name}
            </span>
            <div className='filter-line'></div>

            <div>
              {city.areas.map((area) => (
              <div className = 'filter-entries'>
              <span
              onClick={() => updateFilters('area', area)}
              className='pointer'>
                <div className='filter-entry'>
                  {area}
                </div>
              </span>
              </div>
              ))}
            </div>
          </div>
        ))}
    </div>
    )}
    <div className='filter-clear'>
    <div>
      <Button
        text="Clear Filters"
        style={"Alternative"}
        onClick={() => setFilters({
          item_category_name: null,
          item_subcategory_name: null,
          city_name: null,
          area: null,
        })}
      />
    </div>
    </div>
    </div>
    </div>
  )
}

export default FilterItems