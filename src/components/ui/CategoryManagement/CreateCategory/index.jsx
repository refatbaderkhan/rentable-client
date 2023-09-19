import React, {useState} from 'react'
import "./style.css";
import Button from '../../base/Button';
import Input from '../../base/Input';
import { sendRequest } from '../../../core/config/request';
import { requestMethods } from '../../../core/enums/requestMethods';


const CreateCategory = () => {
  
  const [category, setCategory] = useState({
    category_name: "",
  });
  const [error, setError] = useState(null);

  const CategoryHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/admin/create-category",
        body: category,
      });
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  }
    
  return (
    <div className="form-container">
      <div className="log-in">
      <div className="spacer-30"></div>
      <h1>Create Category</h1>
      <div className="spacer-30"></div>
      <Input
        label={"Category Name"}
        placeholder={"Type category here..."}
        onChange={(category_name) =>
          setCategory({
            ...category,
            category_name,
          })
        }
      />
      {error && <p>{error}</p>}
      <div className="spacer-20"></div>
      <Button
        color={"primary-bg"}
        textColor={"white-text"}
        text={"submit"}
        onClick={() => CategoryHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default CreateCategory