import React, { useState } from "react";
import "./style.css";
import RegisterForm from "../../../components/ui/AuthenticationForms/RegisterForm";

const Register = () => {

  return (
    <div className="register-page">
      <div className="register-page-container">
        <div className="register-page-header">
          You're one step away!
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
