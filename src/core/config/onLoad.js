import React, { useEffect } from "react";
import io from "socket.io-client";
import {useCustomDispatch} from '../../redux/customHooks/customDispatch'
import { localStorageAction } from "./localstorage";
import { sendRequest } from "./request";
import { requestMethods } from "../enums/requestMethods";

export const OnLoad = () => {

  const socket = io.connect("http://127.0.0.1:4000");

  const {setCategories, setSocket, setUser, setCities, setUsers} = useCustomDispatch();

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


  const users = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/account",
      });

      setUsers({users: response});

      return response;
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

  useEffect(() => {
    setSocket({ socket: socket });
    account();
    users();
    category();
    cities();
  }, []);

}
