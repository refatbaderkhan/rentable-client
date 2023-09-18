import React from 'react'
import {useNavigate} from 'react-router-dom'
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useState } from 'react';
import { localStorageAction } from '../../core/config/localstorage';


const Chat = ({user_id, setUser_id, socket, room_id, setRoom_id}) => {

  const navigate = useNavigate();
  const [reciever, setReciever] = useState('');

  setUser_id(localStorageAction('user_id'));


export default Chat