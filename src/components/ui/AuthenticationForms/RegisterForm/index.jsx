import React, { useState } from "react";
import Button from "../../../base/Button";
import Input from "../../../base/Input";
import "./style.css";
import { requestMethods } from "../../../../core/enums/requestMethods";
import { sendMultipartRequest } from "../../../../core/config/sendMultipartRequest";
import {useCustomSelector} from "../../../../redux/customHooks/customSelector";
import Dropdown from "../../../base/Dropdown";

const RegisterForm = () => {

  const {cities} = useCustomSelector();

  
  const [registeration, setRegisteration] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    area: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);
  const [created, setCreated] = useState(null);

  const setLocation = (city, area) => {
    setRegisteration({
      ...registeration,
      city,
      area,
    });
  };

  const registerHandler = async () => {

    const registerationForm = {
      username: registeration.username,
      first_name: registeration.first_name,
      last_name: registeration.last_name,
      email: registeration.email,
      password: registeration.password,
      profile_picture: profilePicture,
      city: registeration.city,
      area: registeration.area,
    };


    try {
      const response = await sendMultipartRequest({
        method: requestMethods.POST,
        route: "/auth/register",
        body: registerationForm,
      }); 

      console.log('regform', registerationForm)

      console.log(response);

      setCreated(true);
      setError(null);

    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
      setCreated(false);
    }
  };

  const isFormValid = () => {
    return (
      registeration.username.trim() !== "" &&
      registeration.first_name.trim() !== "" &&
      registeration.last_name.trim() !== "" &&
      registeration.email.trim() !== "" &&
      registeration.password.trim() !== ""
    );
  };

  return (
    <div className="">
      <div className="register">
        <form encType="multipart/form-data">
          <div className="register-button">
          <Input
            label={"Username"}
            placeholder={"Enter you Username..."}
            onChange={(username) =>
              setRegisteration({
                ...registeration,
                username,
              })
            }
          />
          </div>
          <div className="register-button">
          <Input
            label={"First Name"}
            width={'200'}
            placeholder={"Enter you First Name..."}
            onChange={(first_name) =>
              setRegisteration({
                ...registeration,
                first_name,
              })
            }
          />
          <Input
            label={"Last Name"}
            width={'200'}
            placeholder={"Enter you Last Name..."}
            onChange={(last_name) =>
              setRegisteration({
                ...registeration,
                last_name,
              })
            }
          />
          </div>
          <Dropdown
            placeHolder={"Select your city..."}
            options={cities}
            onChange={(value) => setLocation(value[0], value[1])}
           />
          <Input
            label={"Email"}
            placeholder={"Enter you Email..."}
            onChange={(email) =>
              setRegisteration({
                ...registeration,
                email,
              })
            }
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password..."}
            onChange={(password) =>
              setRegisteration({
                ...registeration,
                password,
              })
            }
          />
          <div className="label">Upload a profile picture</div>
          <input
            className="upload"
            type="file"
            onChange={(e) => {
              if (e.target && e.target.files && e.target.files[0]) {
                setProfilePicture(e.target.files[0]);
              }
            }}
          />
          {error && <p>{error}</p>}
          {created && (
            <p>
              Account Created Successfully.
              <br />
              <span className="pointer primary-text">
                Click here to login.
              </span>
            </p>
          )}
          <Button
            color={"primary-bg"}
            textColor={"white-text"}
            text={"Submit"}
            onClick={() => {
              if (isFormValid()) {
                registerHandler();
              } else {
                setError("Please fill in all the fields.");
              }
            }}
          />
          <div className="spacer-10"></div>
          <p className="black-text">
            Already have an account?{" "}
            <span className="pointer primary-text">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;


