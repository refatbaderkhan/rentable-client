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

const socket = io.connect("http://127.0.0.1:4000");

const NavBar = () => {

  const navigate = useNavigate();

  const [isLoggedIn , setIsLoggedIn] = useState(null);

  const {setCategories, setSocket} = useCustomDispatch();
  setSocket({socket: socket});

  const {user_type} = useCustomSelector();
  console.log('user_type', user_type)


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
    setIsLoggedIn(null);
  }

  useEffect(() => {
    category();
    setIsLoggedIn(localStorageAction("access_token"));
  }, [isLoggedIn])
  

  return (
    <div className="navbar">
      { !isLoggedIn && (
      <Button
        color = {"primary-bg"}
        textColor = {"white-text"}
        text = {"login"}
        onClick = {() => navigate("/login")}
      />)}
      { user_type === 0 && (
        <div> admin  </div>
      )}
      { isLoggedIn && (
      <Button
        color = {"primary-bg"}
        textColor = {"white-text"}
        text = {"logout"}
        onClick = {() => handleLogout()}
      />)}
    </div>
  )
}

export default NavBar