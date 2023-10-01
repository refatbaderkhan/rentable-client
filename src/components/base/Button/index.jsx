import React from "react";
import "./style.css";

const Button = ({ text, color, textColor, onClick, style, enabled = true, type }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }
  };

  const combinedClassName = `baseButton${style === "Alternative" ? "Alternative" :
                                        (style === "Alternative2" ?"Alternative2" :
                                        (style === "NavBar" ? "NavBar" :
                                        (style === "From" ? "From" :
                                        (style === "To" ? "To" :
                                        (style === "Login" ? "Login" :
                                        (style === "Book" ? "Book" :
                                        "" ))))))}`;

  return (
    <button
      type={`${type}`}
      className={` ${combinedClassName} green-bg white-text pointer ${color} `}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;
