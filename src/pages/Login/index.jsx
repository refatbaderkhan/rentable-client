import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/ui/AuthenticationForms/Login";

const Login = () => {

  return (
    <div className="flex center page">
      <LoginForm />
    </div>
  );
};

export default Login;
