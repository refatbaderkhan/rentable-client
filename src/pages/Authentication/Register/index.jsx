import React, { useState } from "react";
import "./style.css";
import RegisterForm from "../../../components/ui/AuthenticationForms/RegisterForm";

const Register = () => {

  return (
    <div className="register-page">
      <div className="register-page-container">
        <RegisterForm />
      </div>
    </div>
  );
};


export default Register;
