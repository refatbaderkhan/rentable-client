import React from "react";
import "./style.css";

const Button = ({ text, color, textColor, onClick, style, enabled = true, type }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }
  };

  const combinedClassName = `baseButton${style === "Alternative" ? "Alternative" : (style === "Alternative2" ? "Alternative2" : "")}`;

  return (
    <button
      type = {`${type}`}
      className={` ${combinedClassName} pointer ${color} d-text`}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;
