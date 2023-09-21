import React, {useState} from 'react'
import "./style.css";
import Button from '../../../../base/Button';
import Input from '../../../../base/Input';
import { sendRequest } from '../../../../../core/config/request';
import { requestMethods } from '../../../../../core/enums/requestMethods';
import { useCustomDispatch } from '../../../../../redux/customHooks/customDispatch';

const AdminCreateCity = () => {
  
  const [city, setCity] = useState({
    city_name: "",
  });
  const [error, setError] = useState(null);

  const {addCity} = useCustomDispatch();

  const addCityHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/admin/create-city",
        body: city,
      });

      addCity({city: response.city});

    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  }
    
  return (
    <div className="form-container">
      <div className="create-city">
      <div className="spacer-30"></div>
      <h2>Add City</h2>
      <div className="spacer-30"></div>
      <Input
        placeholder={"Type category name here..."}
        onChange={(city_name) =>
          setCity({
            ...city,
            city_name: city_name
          })
        }
      />
      {error && <p>{error}</p>}
      <div className="spacer-30"></div>
      <Button
        text={"Add City"}
        onClick={() => addCityHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default AdminCreateCity