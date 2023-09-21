import React from 'react'
import { useEffect, useState} from 'react'
import './style.css'
import logo from '../../../assets/logo.svg'
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

  const {setCategories, setSocket, setUser, deleteUser, setCities} = useCustomDispatch();

  setSocket({socket: socket});



  const account = async () => {

    if (!localStorageAction("access_token")) {
      return;
    }

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/user/account",
      });
    
      setUser({user: response});
     
      return response.data;
    }
    catch (error) {
      console.log(error);
    }

  }


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

  const cities = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/cities",
      });

      setCities({cities: response});

      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  const {user} = useCustomSelector();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    deleteUser();
    setIsLoggedIn(null);
    setProfileToggle(false);
  }

  const toggleProfile = () => {
    setProfileToggle((prevProfileToggle) => !prevProfileToggle);
  }

  const navigateAndToggle = (path) => {
    navigate(path);
    setProfileToggle(false);
  }

  useEffect(() => {
    account();
    category();
    cities();
    setIsLoggedIn(localStorageAction("access_token"));
  }, [localStorageAction("access_token")])
  

  return (
    <div>
    <div className="navbar flex">
    <div className ="navbar-container flex">
    <div className = "logo pointer">
      <span
      className = "logo-text"
      onClick={() => navigateAndToggle("/")}
      >
        <img src={logo} alt="logo" className="logo-img"/>
      </span>
    </div>
    <div>
      { !isLoggedIn && (
      <Button
        text = {"LOG IN"}
        textColor = {"white-text"}
        onClick = {() => navigate("/login")}
      />)}
      { isLoggedIn && (
        <div>
        <div className="profile-avatar pointer white-text green-bg" onClick={toggleProfile}>
          { user.profile_picture ? (
            <img src={`http://127.0.0.1:8000/uploads/${user.profile_picture}`} alt="profile" className='profilepicture'/>
          ) : (
            <span className="profile-letter">
              {user.first_name[0]}
            </span>
          )}
        </div>
        </div>
      )}
    </div>
    </div>
    </div>
    { isLoggedIn && profileToggle && user.user_type == 0 && (
      <div className="navbar-menu ">
      < AdminProfileMenu handleLogout={handleLogout} setProfileToggle={setProfileToggle}/>
      </div>
      )}
    { isLoggedIn && profileToggle && user.user_type == 1 && (
      <div className="navbar-menu ">
      < UserProfileMenu handleLogout={handleLogout} setProfileToggle={setProfileToggle}/>
      </div>
      )}
    </div>
  )
}

export default NavBar