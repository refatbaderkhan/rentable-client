import React from 'react'
import {useState} from 'react'
import "./style.css";
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


const AddSubCategory = () => {

  const [newSubCategory, setNewSubCategory] = useState("")

  return (
    <div>
      <input type="text" placeholder="add subcategory" onChange={(e) => setNewSubCategory(e.target.value)} />
      <button onClick={() => console.log(newSubCategory)}>
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
      <AddSubCategory />
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