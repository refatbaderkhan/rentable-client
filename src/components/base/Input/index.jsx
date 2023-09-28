import React from "react";
import "./style.css";

const Input = ({ onChange, label, placeholder, enabled, type = "text", width, value}) => {

  width = width ? `width-${width}` : "width-400";


  return (
    <div className="baseInput">
      <label className="baseInput-label">{label}</label>
      <input
        className= {`base-input`}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;