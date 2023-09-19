import React from 'react'
import {useState} from 'react'
import "./style.css";
import Input from '../../base/Input';
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
    <div key={subCategorySchema._id}>
      {subCategorySchema.subCategory_name}
      <button onClick={deleteSubCategoryHandler}>
        x
      </button>
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
    <div>
      <Input
        label={"New SubCategory"}
        placeholder={"Type new sub category here..."}
        onChange={(subCategory_name) =>
          setNewSubCategory({
            ...newSubCategory,
            subCategory_name,
          })
        }
      />
      <button onClick={addSubCategoryHandler}>
        add subcategory
      </button>
    </div>
  )
}


const AdminCategory = ({category}) => {

  return (
    <div key={category._id} className="form-container">
      <div className="log-in">
      <div className="spacer-30"></div>
      <h1>{category.category_name}</h1>
      <div className="spacer-30"></div>
      <h3>
          {category.subCategorySchema.length > 0 ? (
            category.subCategorySchema.map(SubCategory)
          ) : (
            <p>No subcategories available</p>
          )}
      </h3>
      <AddSubCategory category_id={category._id} />
      <div className="spacer-20"></div>
      <button onClick={() => console.log(category._id)}>
        delete category
      </button>
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default AdminCategory