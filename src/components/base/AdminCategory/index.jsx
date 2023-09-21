import React from 'react'
import {useState} from 'react'
import "./style.css";
import Input from '../../base/Input';
import Button from '../../base/Button';
import { requestMethods } from '../../../core/enums/requestMethods';
import { sendRequest } from '../../../core/config/request';
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';

const SubCategory = (subCategorySchema) => {
  
  const {deleteSubCategory} = useCustomDispatch()

  const deleteSubCategoryHandler = async () => {
  
    try {
      const response = await sendRequest({
        method: requestMethods.DELETE,
        route: `/admin/delete-subcategory/${subCategorySchema._id}`,
      });

      deleteSubCategory(subCategorySchema._id, subCategorySchema.category_id)

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div>
    <div className="flex center space-between width-400" key={subCategorySchema._id}>
      {subCategorySchema.subCategory_name}
      <Button
        style= {"Alternative"}
        text={"Delete"}
        onClick={() => deleteSubCategoryHandler()}
      />
    </div>
    <div className="spacer-10"></div>
    </div>
  )
}


const AddSubCategory = ({category_id}) => {

  const [newSubCategory, setNewSubCategory] = useState({
    subCategory_name: "",
  });

  const {addSubCategory} = useCustomDispatch()

  const addSubCategoryHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: `/admin/create-subcategory/${category_id}`,
        body: newSubCategory,
      });

      addSubCategory(response.subcategory, category_id)

    } catch (error) {
      console.log(error)
    }
  }
      

  return (
    <div className='flex center space-between width-400'>
      <Input
        placeholder={"Type new sub-category name here..."}
        width={"225"}
        onChange={(subCategory_name) =>
          setNewSubCategory({
            ...newSubCategory,
            subCategory_name,
          })
        }
      />
      <Button
        style= {"Alternative"}
        text={"ADD"}
        onClick={() => addSubCategoryHandler()}
      />
    </div>
  )
}


const AdminCategory = ({category}) => {

  const {deleteCategory} = useCustomDispatch()

  const deleteCategoryHandler = async () => {

    try {

      const response = await sendRequest({
        method: requestMethods.DELETE,
        route: `/admin/delete-category/${category._id}`,
      });

      deleteCategory(category._id)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={category._id} className="form-container">
      <div className="display-category">
      <div className="spacer-20"></div>
      <h1>{category.category_name}</h1>
      <h3>
        {category.subCategorySchema.length > 0 && (
          <div>
          <h4 className='width-400 text-left'>Sub-Categories:</h4>
          {category.subCategorySchema.map(SubCategory)}
          </div>
        )}
      </h3>
      <AddSubCategory category_id={category._id} />
      <div className="spacer-30"></div>
      <Button
        text={"Delete Category"}
        onClick={() => deleteCategoryHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default AdminCategory