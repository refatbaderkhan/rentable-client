import React from 'react'
import './style.css'
import {sendRequest} from '../../../core/config/request'
import {requestMethods} from '../../../core/enums/requestMethods'
import { setSocket } from '../../../redux/socket/socketSlice';
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { useEffect } from 'react'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';


const socket = io.connect("http://127.0.0.1:4000");

const NavBar = () => {
  const dispatch = useDispatch();
  dispatch(setSocket({socket: socket}));

  const {setCategories} = useCustomDispatch();

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

  useEffect(() => {
    category();
  }, [])
  

  return (
    <div className="navbar">
      NavBar
    </div>
  )
}

export default NavBar