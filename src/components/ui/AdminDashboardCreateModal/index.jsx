import React, {useEffect, useState} from 'react'
import './style.css'
import Button from '../../base/Button'
import Input from '../../base/Input'
import { sendRequest } from '../../../core/config/request'
import { requestMethods } from '../../../core/enums/requestMethods'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'

const AdminDashboardCreateModal = ({behavior, setCreateModal, id}) => {

  const [name, setName] = useState('')

  const [category, setCategory] = useState({ category_name: '', })
  const [city, setCity] = useState({ city_name: "",});
  const [newSubCategory, setNewSubCategory] = useState({subCategory_name: "",});
  const [newArea, setNewArea] = useState({area_name: "",});
  const [error, setError] = useState(null)

  const {addCategory, addCity, addSubCategory, addArea} = useCustomDispatch()

  const createCategoryHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/admin/create-category",
        body: category,
      });

      addCategory({category: response.category});
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data);
    }
  }

  const addCityHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/admin/create-city",
        body: city,
      });

      addCity({city: response.city});

    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  }

  const createSubCategoryHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: `/admin/create-subcategory/${id}`,
        body: newSubCategory,
      });

      addSubCategory(response.subcategory, id)

    } catch (error) {
      console.log(error)
    }
  }

  const addAreaHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: `/admin/create-area/${id}`,
        body: newArea,
      });

      addArea(newArea.area_name, id)

    } catch (error) {
      console.log(error)
    }
  }

  const createHandler = () => {
    if (behavior === 'category') {
      createCategoryHandler()
    }

    if (behavior === 'location') {
      addCityHandler()
    }

    if (behavior === 'subCategory') {
      createSubCategoryHandler()
    }

    if (behavior === 'area') {
      addAreaHandler()
    }
  }

  const setNames = () => {
    if (behavior === 'category') {
      setName('Category')
    }

    if (behavior === 'location') {
      setName('City')
    }

    if (behavior === 'subCategory') {
      setName('Subcategory')
    }

    if (behavior === 'area') {
      setName('Area')
    }
  }

  useEffect(() => {
    setNames()
  }, [behavior])

  return (
    <div className='admin-dashboard-modal-container'>
      <div className='admin-dashboard-create-modal-content'>
        <div className="">
          <div className="close-create-modal" onClick={() => setCreateModal(false)}>x</div>
          <div className="create-category-modal">
          <div className="spacer-20"></div>
          <h2>Create {name}</h2>
          <div className="spacer-30"></div>
          {behavior === 'category' ? (
            <>
              <Input
                placeholder={"Type category name here..."}
                onChange={(category_name) =>
                  setCategory({
                    ...category,
                    category_name,
                  })
                }
              />
            </>
          ) : behavior === 'location' ? (
            <>
              <Input
                placeholder={"Type city name here..."}
                onChange={(city_name) =>
                  setCity({
                    ...city,
                    city_name,
                  })
                }
              />
            </>
          ) : behavior === 'subCategory' ? (
            <>
              <Input
                placeholder={"Type sub-category name here..."}
                onChange={(subCategory_name) =>
                  setNewSubCategory({
                    ...newSubCategory,
                    subCategory_name,
                  })
                }
              />
            </>
          ) : behavior === 'area' ? (
            <>
              <Input
                placeholder={"Type area name here..."}
                onChange={(area_name) =>
                  setNewArea({
                    ...newArea,
                    area_name,
                  })
                }
              />
            </>
          ) : null }
          {error && <p>{error}</p>}
          <div className="spacer-30"></div>
          <Button
            text={`Add ${name}`}
            onClick={() => createHandler()}
          />
          <div className="spacer-30"></div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AdminDashboardCreateModal