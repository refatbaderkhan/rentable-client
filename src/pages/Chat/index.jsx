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

  const joinHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: `/user/chat/${reciever}`,
      });

      setRoom_id(response._id);
      
      socket.emit('join_chat', {user_id, room_id});
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