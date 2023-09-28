import React from 'react'
import CreateItemForm from '../../components/ui/CreateItemForm'
import background from "../../assets/background.png";

const CreateItem = () => {
  return (
    <div className="flex center ">
      <div className="wallpaper" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "calc(100vh - 75px)", zIndex: -1}}>
        <img src={background} alt="Wallpaper" style={{width: "100%", height: "100%", objectFit: "cover"}} />
      </div>
      <CreateItemForm />
    </div>
  );
};

export default CreateItem