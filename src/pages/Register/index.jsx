import React, { useState } from "react";
import "./style.css";
import RegisterForm from "../../components/ui/AuthenticationForms/Register";

const Register = () => {

  return (
    <div className="flex center page">
      <RegisterForm />
    </div>
  );
};

export default Register;
