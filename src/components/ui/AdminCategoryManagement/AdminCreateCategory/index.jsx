import React, {useState} from 'react'
import "./style.css";
import Button from '../../../base/Button';
import Input from '../../../base/Input';
import { sendRequest } from '../../../../core/config/request';
import { requestMethods } from '../../../../core/enums/requestMethods';
import { useCustomDispatch } from '../../../../redux/customHooks/customDispatch';

const AdminCreateCategory = () => {
  
  const [category, setCategory] = useState({
    category_name: "",
  });
  const [error, setError] = useState(null);

  const {addCategory} = useCustomDispatch();

  const CategoryHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/admin/create-category",
        body: category,
      });

      addCategory({category: response.category});
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  }
    
  return (
    <div className="form-container">
      <div className="create-category">
      <div className="spacer-30"></div>
      <h2>Create Category</h2>
      <div className="spacer-30"></div>
      <Input
        placeholder={"Type category name here..."}
        onChange={(category_name) =>
          setCategory({
            ...category,
            category_name,
          })
        }
      />
      {error && <p>{error}</p>}
      <div className="spacer-30"></div>
      <Button
        text={"Add Category"}
        onClick={() => CategoryHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default AdminCreateCategory