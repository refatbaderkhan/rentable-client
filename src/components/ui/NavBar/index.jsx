import React from 'react'
import { useEffect } from 'react'
import './style.css'
import {sendRequest} from '../../../core/config/request'
import {requestMethods} from '../../../core/enums/requestMethods'
import io from "socket.io-client";
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';


const socket = io.connect("http://127.0.0.1:4000");

const NavBar = () => {

  const {setCategories, setSocket} = useCustomDispatch();
  setSocket({socket: socket});

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