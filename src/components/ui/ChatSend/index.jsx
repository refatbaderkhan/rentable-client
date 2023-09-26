import React, {useState} from 'react'
import './style.css'
import Input from '../../base/Input'
import Button from '../../base/Button'
import { requestMethods } from '../../../core/enums/requestMethods'
import { sendRequest } from '../../../core/config/request'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'

const ChatSend = ({room_id}) => {
  const [message, setMessage] = useState('');
  const messageBody = {message: message}
  const {user_id , socket} = useCustomSelector();
  //const {addMessage} = useCustomDispatch()


  const sendMessage = () => {
    if (message !== '') {
      const message_time = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      socket.emit('send_message', { user_id, message });
      setMessage('');
    }
  };

  const sendMessageHandler = async () => {

    try {

      const response = await sendRequest({
        method: requestMethods.POST,
        route: `/user/message/${room_id}`,
        body: messageBody,
      });

      sendMessage();
    
      const chat_id = response.chat._id;
      const message = response.chat.messages[response.chat.messages.length-1];
      const newMessage = {chat_id, message};
      //addMessage(chat_id, message);


    } catch (error) {
      console.log(error.response.data.message);
    }
  }



  return (
    <div className='chat-messaging-send'>
    <div className='chat-messaging-send-input'>
      <Input
      width={'400'}
      placeholder={'Type a message...'}
      onChange={(value) => setMessage(value)}
      />
    </div>
    <div className='chat-messaging-send-button'>
      <Button
      text={'Send'}
      onClick={() => sendMessageHandler()}
      />
    </div>
    </div>
  )
}

export default ChatSend