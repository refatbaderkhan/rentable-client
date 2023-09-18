import React, {useState} from 'react'
import "./style.css";
import Button from '../../base/Button';
import Input from '../../base/Input';
import Map from "../../base/Map"; 
//import { requestMethods } from '../../../core/enums/requestMethods';
//import { sendMultipartRequest } from '../../../core/config/sendMultipartRequest';
import { localStorageAction } from '../../../core/config/localstorage'; 
import axios from 'axios';


  const CreateItemForm  = () => {

    const [item, setItem] = useState({
      item_name: "",
      item_description: "",
      item_price: "",
      item_category: "",
      item_subcategory: "",
      item_city: "",
      item_area: "",
      item_latitude: "",
      item_longitude: "",
    });
  
    const [itemImages, setItemImages] = useState([]);
    const [error, setError] = useState(null);
    const [created, setCreated] = useState(null);


    const itemHandler = async (e) => {
      e.preventDefault();

      const formData = new FormData();




      try {
        const response = await axios.post(
          "http://localhost:8000/user/create-item",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorageAction("access_token")}`,
            },
          }
        );
        setCreated(true);
        setError(null);
      } catch (error) {
        console.log(error)
      }
    };

   ///const isFormValid = () => {
   ///  return (
   ///    item.item_name.trim() !== "" &&
   ///    item.item_description.trim() !== "" &&
   ///    item.item_price.trim() !== "" &&
   ///    item.item_category.trim() !== "" &&
   ///    item.item_subcategory.trim() !== "" &&
   ///    item.item_location.city.trim() !== "" &&
   ///    item.item_location.area.trim() !== "" &&
   ///    item.item_location.latitude.trim() !== "" &&
   ///    item.item_location.longitude.trim() !== ""
   ///  );
   ///};
  

    return (
      <div className="form-container">
        <div className="register">
          <form encType="multipart/form-data" onSubmit={itemHandler}>
            <div className="spacer-15"></div>
            <h1>Create Item</h1>
            <div className="space-15"></div>
            <Input
              label={"Item Name"}
              placeholder={"Enter Item Name..."}
              onChange={(item_name) => {
                setItem({
                  ...item,
                  item_name,
                });
              }}
            />
            <Input
              label={"Item Description"}
              placeholder={"Enter Item Description..."}
              onChange={(item_description) =>
                setItem({
                  ...item,
                  item_description,
                })
              }
            />
            <Input
              label={"Item Price"}
              placeholder={"Enter Item Price..."}
              onChange={(item_price) =>
                setItem({
                  ...item,
                  item_price,
                })
              }
            />
            <Input
              label={"Item Category"}
              placeholder={"Enter Item Category..."}
              onChange={(item_category) =>
                setItem({
                  ...item,
                  item_category,
                })
              }
            />
            <Input
              label={"Item Subcategory"}
              placeholder={"Enter Item subCategory..."}
              onChange={(item_subcategory) =>
                setItem({
                  ...item,
                  item_subcategory,
                })
              }
            />
            <Input
              label={"Item Latitude"}
              placeholder={"Enter Item Area..."}
              onChange={(latitude) =>
                setItem({
                  ...item,
                  item_location: {
                    ...item.item_location,
                    latitude,
                  },
                })
              }
            />
            <Input
              label={"Item Longitude"}
              placeholder={"Enter Item Longitude..."}
              onChange={(longitude) =>
                setItem({
                  ...item,
                  item_location: {
                    ...item.item_location,
                    longitude,
                  },
                })
              }
            />
            <div className="label">Upload a item pictures</div>
            <input
            className="upload"
            type="file"
            multiple
            onChange={(e) => {
              if (e.target && e.target.files) {
                setItemImages(e.target.files);
              }
            }}
          />
            {error && <p>{error}</p>}
            {created && (
              <p>
                Item Created Successfully.
              </p>
            )}
            <div className="spacer-25"></div>
            <Button
              color={"primary-bg"}
              textColor={"white-text"}
              text={"Submit"}
            //onClick={() => {
            ////if (isFormValid()) {
            ////itemHandler();
            ////} else {
            ////  setError("Please fill in all the fields.");
            ////}
            //}}
            />
            <button
              type = "submit"
              className="baseButtonAlternative pointer"
            >
              submit form
            </button>

            <div className="spacer-10"></div>
            <div className="spacer-15"></div>

          </form>
        </div>
      </div>
    );
  };

  export default CreateItemForm