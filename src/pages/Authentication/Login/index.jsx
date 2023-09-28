import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../../components/ui/AuthenticationForms/LoginForm";
import background from "../../../assets/background.png";

const Login = () => {

  return (
    <div className="login-page">
      <div className="wallpaper" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "calc(100vh - 75px)", zIndex: -1}}>
        <img src={background} alt="Wallpaper" style={{width: "100%", height: "100%", objectFit: "cover"}} />
      </div>
      <div className="login-page-container">
        <div className="login-page-header">
          Weclome Back!
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
