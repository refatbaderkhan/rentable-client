import React from 'react'
import { useEffect, useState} from 'react'
import './style.css'
import {sendRequest} from '../../../core/config/request'
import {requestMethods} from '../../../core/enums/requestMethods'
import io from "socket.io-client";
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../../redux/customHooks/customSelector';
import Button from '../../base/Button';
import { useNavigate } from 'react-router-dom'
import { localStorageAction } from '../../../core/config/localstorage'
import AdminProfileMenu from '../ProfileMenu/AdminProfileMenu'
import UserProfileMenu from '../ProfileMenu/UserProfileMenu'


const socket = io.connect("http://127.0.0.1:4000");

const NavBar = () => {

  const navigate = useNavigate();

  const [isLoggedIn , setIsLoggedIn] = useState(localStorageAction("access_token"));
  const [profileToggle, setProfileToggle] = useState(false);

  const {setCategories, setSocket} = useCustomDispatch();

  setSocket({socket: socket});

  const user_type = localStorageAction("user_type");
  console.log(user_type);

  const category = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/categories",
      });
      setCategories({categories: response});
      
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_type");
    setIsLoggedIn(null);
    setProfileToggle(false);
  }

  const toggleProfile = () => {
    setProfileToggle((prevProfileToggle) => !prevProfileToggle); // Toggle the profileToggle state
  }

  useEffect(() => {
    category();
    setIsLoggedIn(localStorageAction("access_token"));
  }, [localStorageAction("access_token")])
  

  return (
    <div>
    <div className="navbar">
      { !isLoggedIn && (
      <Button
        color = {"primary-bg"}
        textColor = {"white-text"}
        text = {"login"}
        onClick = {() => navigate("/login")}
      />)}
      { isLoggedIn && (
        <Button
        color = {"primary-bg"}
        textColor = {"white-text"}
        text = {"Profile"}
        onClick = {toggleProfile}
        />
      )}
    </div>
    { isLoggedIn && profileToggle && user_type == 0 && (
      < AdminProfileMenu handleLogout={handleLogout}/>
      )}
    { isLoggedIn && profileToggle && user_type == 1 && (
      < UserProfileMenu handleLogout={handleLogout}/>
      )}
    </div>
  )
}

export default NavBar