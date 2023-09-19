import React from 'react'
import "./style.css";


const SubCategory = (subCategorySchema) => {

  return (
    <div key={subCategorySchema._id}>
      {subCategorySchema.subCategory_name}
      <button onClick={() => console.log(subCategorySchema._id)}>
        x
      </button>
    </div>
  )
}


const AdminCategory = () => {

   const categoryObj = {
    "_id": "64fdc3641f1098002b1ca27f",
    "category_name": "Electronics",
    "subCategories_names": [
        "TVs",
        "khara",
        "zeft",
        "shkhakh"
    ],
    "subCategorySchema": [
        {
            "subCategory_name": "TVs",
            "category_id": "64fdc3641f1098002b1ca27f",
            "_id": "64fdc39b1f1098002b1ca283"
        },
        {
            "subCategory_name": "Mobiles",
            "category_id": "64fdc3641f1098002b1ca27f",
            "_id": "6509c5ac03a0d28bd07a2f7b"
        },
        {
            "subCategory_name": "Washing Machines",
            "category_id": "64fdc3641f1098002b1ca27f",
            "_id": "6509c5b403a0d28bd07a2f82"
        },
        {
            "subCategory_name": "ACs",
            "category_id": "64fdc3641f1098002b1ca27f",
            "_id": "6509c5bb03a0d28bd07a2f8a"
        }
    ],
    "__v": 4
  }

  return (
    <div className="form-container">
      <div className="log-in">
      <div className="spacer-30"></div>
      <h1>{categoryObj.category_name}</h1>
      <div className="spacer-30"></div>
      <h3>
      {categoryObj.subCategorySchema.map(SubCategory)}
      </h3>
      <div className="spacer-20"></div>
      <button onClick={() => console.log(categoryObj._id)}>
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