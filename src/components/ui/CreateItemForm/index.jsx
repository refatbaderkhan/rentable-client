import React, {useState} from 'react'
import axios from 'axios';

import "./style.css";
import Input from '../../base/Input';
import Map from "../../base/Map"; 
import { localStorageAction } from '../../../core/config/localstorage'; 
import { useCustomSelector } from '../../../redux/customHooks/customSelector';
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';
import Dropdown from '../../base/Dropdown';
import Textarea from '../../base/Textarea';

  const CreateItemForm  = () => {
    
    const {addAlert} = useCustomDispatch()
    
    const [item, setItem] = useState({
      item_name: "",
      item_description: "",
      item_price: "",
      item_category: "",
      item_subcategory: "",
      item_city: "",
      item_area: "",
    });

    const {coordinates, cities, categories} = useCustomSelector();
    const {item_latitude, item_longitude} = coordinates;
  
    const [itemImages, setItemImages] = useState([]);

    const setLocation = (item_city, item_area) => {
      setItem({
        ...item,
        item_city,
        item_area,
      });
    };

    const setCategory = (item_category, item_subcategory) => {
      setItem({
        ...item,
        item_category,
        item_subcategory,
      });
    };

    
    const itemHandler = async (e) => {
      e.preventDefault();

      if (!isFormValid()) {
        addAlert({alert: 'Please fill all the fields.'})
        return;
      }

      const formData = new FormData();

      for (const key in item) {
        formData.append(key, item[key]);
      }

      formData.append("item_latitude", item_latitude);
      formData.append("item_longitude", item_longitude);
      
      let imageCounter = 0;
      for (let i=0; i < itemImages.length; i++) {
        const image = itemImages[i];
        const fileName = `${item.item_name}_${imageCounter}.${image.name.split('.').pop()}`;
        formData.append("item_images", image, fileName);
        imageCounter++;
      }

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
        addAlert({alert: 'Item Added Successfully.'})
      } catch (error) {
        console.log(error)
        addAlert({alert: 'Error occured while creating Item'})
      }
    };

    const isFormValid = () => {
      return (
        item.item_name.trim() !== "" &&
        item.item_description.trim() !== "" &&
        item.item_price.trim() !== "" &&
        item.item_category.trim() !== "" &&
        item.item_subcategory.trim() !== "" &&
        item.item_city.trim() !== "" &&
        item.item_area.trim() !== "" &&
        itemImages.length > 0
        
      );
    };
  

    return (
      <div className="form-container">
        <div className="create-item">
          <form encType="multipart/form-data" onSubmit={itemHandler}>
            <div className="create-item-title">
            Share your item with us!
            </div>
            <div className='create-item-form'>
            <div className='create-item-form-1'>
            <div className='spacer-10'></div>
            <div className='create-item-input'>
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
            </div>
            <div className='spacer-20'></div>
            <div className='create-item-input'>
            <Input
              label={"Item Price/Day"}
              placeholder={"Enter Item Price (USD)..."}
              onChange={(item_price) =>
                setItem({
                  ...item,
                  item_price,
                })
              }
            />
            </div>
            <div className='spacer-20'></div>
            <div className='create-item-input'>
            <Dropdown
              placeHolder={"Select Item Category"}
              options={categories}
              type={"category"}
              onChange={(value) => setCategory(value[0], value[1])}
            />
            </div>
            <div className='spacer-20'></div>
            <div className='create-item-input'>
            <Dropdown
              placeHolder={"Select Item Location"}
              type={"city"}
              options={cities}
              onChange={(value) => setLocation(value[0], value[1])}
            />
            </div>
            <div className='spacer-30'></div>
            <div className='create-item-input'>
            <div className="label">Upload item pictures (up to 6)</div>
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
            </div>
            </div>
            <div className='create-item-form-2'>
            <div className='create-item-textarea'>
            <Textarea
              label={"Item Description"}
              placeholder={"Enter Item Description..."}
              onChange={(item_description) =>
                setItem({
                  ...item,
                  item_description,
                })
              }
            />
            </div>
            <div className='create-item-input'>
            Set your item location on the map
            <div className="spacer-10"></div>
            <Map />
            </div>
            </div>
            </div>
            <div className="spacer-30"></div>
            <button
              type = "submit"
              className="create-button"
            >
              Submit
            </button>

            <div className="spacer-10"></div>
            <div className="spacer-15"></div>
            <div>
          </div>
          </form>
        </div>
      </div>
    );
  };

  export default CreateItemForm