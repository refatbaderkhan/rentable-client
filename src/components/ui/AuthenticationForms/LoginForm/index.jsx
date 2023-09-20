import React, { useState } from "react";
import Input from "../../../base/Input";
import Button from "../../../base/Button";
import { sendRequest } from "../../../../core/config/request";
import { requestMethods } from "../../../../core/enums/requestMethods";
import { localStorageAction } from "../../../../core/config/localstorage";
import "./style.css";
import { useCustomDispatch } from "../../../../redux/customHooks/customDispatch";
import { NavigateTo } from "../../../../core/config/navigation";


const LoginForm = () => {

  const {setUser} = useCustomDispatch(); 

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const loginHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/auth/login",
        body: credentials,
      });

      setUser({
        token: response.token,
        user: response.user,
      }); 

      localStorageAction("access_token", response.token);
      NavigateTo("/chat");
      
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };


  return (
    <div className="form-container">
      <div className="log-in">
      <div className="spacer-30"></div>
      <h1>Login</h1>
      <div className="spacer-30"></div>
      <Input
        label={"Email"}
        placeholder={"Type your email here..."}
        onChange={(email) =>
          setCredentials({
            ...credentials,
            email,
          })
        }
      />
      <div className="spacer-20"></div>
      <Input
        label={"Password"}
        placeholder={"Type your password here..."}
        type={"password"}
        onChange={(password) =>
          setCredentials({
            ...credentials,
            password,
          })
        }
      />
      {error && <p>{error}</p>}
      <div className="spacer-25"></div>
      <Button
        color={"primary-bg"}
        textColor={"white-text"}
        text={"Login"}
        onClick={() => loginHandler()}
      />
      <div className="spacer-10"></div>
      <div className="spacer-15"></div>

      <p className="black-text">
        Don't have an account?{" "}
        <span className="pointer primary-text" onClick={NavigateTo("/register")}>
          Register
        </span>
      </p>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
};

export default LoginForm;