import React, { useState } from "react";
import Input from "../../../base/Input";
import Button from "../../../base/Button";
import { sendRequest } from "../../../../core/config/request";
import { requestMethods } from "../../../../core/enums/requestMethods";
import { localStorageAction } from "../../../../core/config/localstorage";
import "./style.css";
import { useCustomDispatch } from "../../../../redux/customHooks/customDispatch";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();
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

      setUser({user: response.user});
      console.log(response.user);
      localStorageAction("access_token", response.token);
      if (response.user.user_type === 0) {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
      
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };



  return (
    <div className="">
      <div className="log-in">
      <div className="login-in-button">
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
      </div>
      <div className="login-in-button">
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
      </div>
      {error && <p>{error}</p>}
      <div className="login-in-button">
      <Button
        textColor={"white-text"}
        text={"Login"}
        onClick={() => loginHandler()}
      />
      </div>
      <div className="login-line"></div>
      <div className="spacer-20"></div>
      <p className="black-text">
        Don't have an account?{" "}
        <span className="pointer green-text" onClick={() => navigate("/register")}>
             Sign up now
        </span>
      </p>
      <div className="spacer-30"></div>

      </div>
    </div>
  );
};

export default LoginForm;
