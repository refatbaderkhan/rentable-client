import React, { useState } from "react";
import "./style.css";
import RegisterForm from "../../../components/ui/AuthenticationForms/RegisterForm";
import background from "../../../assets/background.png";

const Register = () => {

  return (
    <div className="register-page">
      <div className="wallpaper" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "calc(100vh - 75px)", zIndex: -1}}>
        <img src={background} alt="Wallpaper" style={{width: "100%", height: "100%", objectFit: "cover"}} />
      </div>
      <div className="register-page-container">
        <RegisterForm />
      </div>
    </div>
  );
};


export default Register;
