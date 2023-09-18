import React from 'react'
import './style.css'
import { setSocket } from '../../../redux/socket/socketSlice';
import { useDispatch } from "react-redux";
import io from "socket.io-client";


const socket = io.connect("http://127.0.0.1:4000");

const NavBar = () => {

  const dispatch = useDispatch();
  dispatch(setSocket({socket: socket}));

  return (
    <div className="navbar">
      NavBar
    </div>
  )
}

export default NavBar