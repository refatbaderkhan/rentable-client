import React, { useEffect, useState }  from 'react'
import './style.css'
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useCustomDispatch } from '../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../redux/customHooks/customSelector';
import Input from "../../components/base/Input"
import ChatCard from '../../components/ui/ChatCard';
import Button from '../../components/base/Button';
import { useParams } from 'react-router-dom';
import { generateImageUrl } from '../../core/config/generateImageUrl';
import ChatMenu from '../../components/ui/ChatMenu';
import ChatMessages from '../../components/ui/ChatMessages';
import ChatSend from '../../components/ui/ChatSend';


const Chat = () => {
  
  const {id} = useParams();
  const [room_id, setRoomId] = useState('');
  const {user_id , socket} = useCustomSelector();

  const joinHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: `/user/chat/${id}`,
      });

      setRoomId(response._id);
      
      socket.emit('join_chat', {user_id, room_id});
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    joinHandler();
  }, []);

  return (
    <div className="chat-page-container">
      <ChatMenu/>
      <div className='chat-messaging'>
        <div className='chat-messaging-header'>
          <div className='chat-messaging-name'>
            Refat Baderkhan
          </div>
        </div>
        <div className='chat-messaging-messages'>
          <ChatMessages room_id={room_id}/>
        </div>
        <div>
        <ChatSend room_id={room_id}/>
        </div>
      </div>
    </div>
  )
};

export default Chat