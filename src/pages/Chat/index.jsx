import React, { useState }  from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom'
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { localStorageAction } from '../../core/config/localstorage';
import { useCustomDispatch } from '../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../redux/customHooks/customSelector';
import Input from "../../components/base/Input"
import ChatCard from '../../components/ui/ChatCard';

const Chat = () => {

  const navigate = useNavigate();
  const [reciever, setReciever] = useState('');
  const {user_id , socket} = useCustomSelector();
  const {setChat} = useCustomDispatch();

  const joinHandler = async () => {
    console.log('user_id_chat', user_id)

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: `/user/chat/${reciever}`,
      });

      const room_id = response._id;
      setChat({
        room_id: response._id
      });
      
      socket.emit('join_chat', {user_id, room_id});
      navigate('/chat-page', { replace: true });
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className="chat-page-container">
      <div className='chat-menu'>
        <div className='chat-menu-search'>
          <div className='chat-menu-search-input'>
          <Input
          width={'300'}
          onChange={(value) => console.log(value)}
          />
          </div>
        </div>
        <div className='chat-menu-list'>
          <ChatCard/>
        </div>
        <div className='chat-menu-button'>
        </div>
      </div>
    </div>
  )


//return (
//  <div className="">
//    <div className="">
//      <h1>{`<>DevRooms</>`}</h1>
//      
//
//      <input
//        className=""
//        onChange={(e) => setReciever(e.target.value)}
//      />
//
//      <button
//        className=""
//        onClick={joinHandler}
//      >
//        Join Room
//      </button>
//    </div>
//  </div>
//);
};

export default Chat