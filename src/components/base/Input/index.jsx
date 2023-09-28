import React from "react";
import "./style.css";

const Input = ({ onChange, label, placeholder, enabled, type = "text", width, onEnter, value}) => {

  width = width ? `width-${width}` : "width-400";

  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      onEnter(e.target.value);
    }
  }


  return (
    <div className="baseInput">
      <label className="baseInput-label">{label}</label>
      <input
        className= {`base-input`}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handlekeyPress}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;