import React, { useEffect, useState }  from 'react'
import './style.css'
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import { useCustomDispatch } from '../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../redux/customHooks/customSelector';
import { useParams } from 'react-router-dom';
import ChatMenu from '../../components/ui/ChatMenu';
import ChatMessages from '../../components/ui/ChatMessages';
import ChatSend from '../../components/ui/ChatSend';


const Chat = () => {
  
  const {id} = useParams();
  const [room_id, setRoomId] = useState('');
  const {user_id , socket, users, chats, getUserById} = useCustomSelector();
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  const joinHandler = async () => {

    if (!socket) return;

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: `/user/chat/${id}`,
      });
      const user = getUserById(id);
       setContact(user);
      setRoomId(response._id);
      
      socket.emit('join_chat', {user_id, room_id});
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    joinHandler();
  }, [socket, users]);

  useEffect(() => {
    setLoading(true);
    joinHandler();
  }, [id, chats]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (contact) {
  return (
    <div className="chat-page-container">
      <ChatMenu/>
      <div className='chat-messaging'>
        <div className='chat-messaging-header'>
          <div className='chat-messaging-name'>
            {contact.first_name} {contact.last_name}
          </div>
        </div>
        <div className='chat-messaging-messages'>
          <ChatMessages room_id={room_id} socket={socket}/>
        </div>
        <div>
        <ChatSend room_id={room_id}/>
        </div>
      </div>
    </div>
  )
  }
};

export default Chat