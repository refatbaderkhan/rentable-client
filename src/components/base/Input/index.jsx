import React from "react";
import "./style.css";

const Input = ({ onChange, label, placeholder, type = "text", width  }) => {

  width = width ? `width-${width}` : "width-400";

  return (
    <div className="flex column baseInput">
      <label>{label}</label>
      <input
        className= {width}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
