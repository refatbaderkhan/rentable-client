import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../../components/ui/AuthenticationForms/LoginForm";

const Login = () => {

  return (
    <div className="login-page">
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
