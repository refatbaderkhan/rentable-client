import React, {useState} from "react";
import SubDropdown from "../SubDropdown";
import "./style.css";


const Dropdown = ({ onChange, placeHolder, options, type }) => {
  
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const [option, setOption] = useState([]);
  
  const getDisplay = () => {
    if (selected) {
      return selected;
    }
    return placeHolder;
  };
  
  const onSelected = (value) => {
    if (type === "city") {
      setSelected(value.city_name);
      setShowMenu(false);
      setOption(value.areas);
      onChange(value);
      return;
    }
    if (type === "category") {
      setSelected(value.category_name);
      setShowMenu(false);
      setOption(value.subCategories_names);
      onChange(value);
      return;
    }
  }
  

  return (
    <div className="flex">
    <div className="dropdown-container">
      <div onClick={()=> setShowMenu((prev)=> !prev)}
      className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
          <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
          </div>
        </div>
      </div>
      {showMenu && 
      <div className="dropdown-menu">
        { type === 'city' && options.map((option) => {
          return (
            <div className="dropdown-item" onClick={()=> onSelected(option)}>{option.city_name}</div>
          );
        })}
        { type === 'category' && options.map((option) => {
          return (
            <div className="dropdown-item" onClick={()=> onSelected(option)}>{option.category_name}</div>
          );
        })}
      </div>
      }
    </div>
    <SubDropdown onChange={onChange} placeHolder={placeHolder} main={selected} options={option} />
    </div>
  );
};

export default Dropdown;