import React from 'react'
import {useNavigate} from 'react-router-dom'
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useState } from 'react';
import { localStorageAction } from '../../core/config/localstorage';
import {useSelector} from "react-redux"
import { useCustomDispatch } from '../../redux/customHooks/customDispatch';


const Chat = () => {

  const navigate = useNavigate();
  const [reciever, setReciever] = useState('');
  const user_id = useSelector(state => state.user.user._id);
  const socket = useSelector(state => state.socket.socket);
  const {setChat} = useCustomDispatch();

  //setUser_id(localStorageAction('user_id'));

  const joinHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: `/user/chat/${reciever}`,
      });

      const room = response._id;
      //setRoom_id(response._id);
      setChat({
        room_id: response._id
      });
      
      socket.emit('join_chat', {user_id, room});
      navigate('/chat-page', { replace: true });
    } catch (error) {
      console.log(error.response.data.message);
    }
  }




  return (
    <div className="">
      <div className="">
        <h1>{`<>DevRooms</>`}</h1>
        

        <input
          className=""
          onChange={(e) => setReciever(e.target.value)}
        />

        <button
          className=""
          onClick={joinHandler}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Chat