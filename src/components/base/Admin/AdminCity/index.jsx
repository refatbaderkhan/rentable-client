import React from 'react'
import {useState} from 'react'
import "./style.css";
import Input from '../../Input';
import Button from '../../Button';
import { requestMethods } from '../../../../core/enums/requestMethods';
import { sendRequest } from '../../../../core/config/request';
import { useCustomDispatch } from '../../../../redux/customHooks/customDispatch';


const Area = ({area, city_id}) => {
  
  const {deleteArea} = useCustomDispatch()

  const deleteAreaHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.DELETE,
        route: `/admin/delete-area/${city_id}`,
        body: {area_name: area},
      });

      deleteArea(area, city_id)

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div>
    <div className="flex center space-between width-400" >
      {area}
      <Button
        style= {"Alternative"}
        text={"Delete"}
        onClick={() => deleteAreaHandler()}
      />
    </div>
    <div className="spacer-10"></div>
    </div>
  )
}


const AddArea = ({city_id}) => {

  const {addArea} = useCustomDispatch()

  const [newArea, setNewArea] = useState({
    area_name: "",
  });

  const addAreaHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: `/admin/create-area/${city_id}`,
        body: newArea,
      });

      addArea(newArea.area_name, city_id)

    } catch (error) {
      console.log(error)
    }
  }
      

  return (
    <div className='flex center space-between width-400'>
      <Input
        placeholder={"Type new sub-category name here..."}
        width={"225"}
        onChange={(area_name) =>
          setNewArea({
            ...newArea,
            area_name,
          })
        }
      />
      <Button
        style= {"Alternative"}
        text={"ADD"}
        onClick={() => addAreaHandler()}
      />
    </div>
  )
}


const AdminCity = ({city}) => {

  const {deleteCity} = useCustomDispatch()

  const deleteCityHandler = async () => {

    try {

      const response = await sendRequest({
        method: requestMethods.DELETE,
        route: `/admin/delete-city/${city._id}`,
      });

      deleteCity(city._id)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={city._id} className="form-container">
      <div className="display-city">
      <div className="spacer-20"></div>
      <h1>{city.city_name}</h1>
      <h3>
        {city.areas.length > 0 && (
          <div>
          <h4 className='width-400 text-left'>Areas:</h4>
          {city.areas.map((area) => (
            <Area area={area} city_id={city._id}/>
          ))}
          </div>
        )}
      </h3>
      <AddArea city_id={city._id}/>
      <div className="spacer-30"></div>
      <Button
        text={"Delete City"}
        onClick={() => deleteCityHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
}

export default AdminCity