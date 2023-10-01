import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../../components/ui/AuthenticationForms/LoginForm";

const Login = () => {

  return (
    <div className="login-page">
      <div className="login-page-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
