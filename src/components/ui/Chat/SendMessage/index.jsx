import React from 'react'
import {useState} from 'react'


const SendMessage = ({socket, user_id, room_id}) => {
  const [message, setMessage] = useState('');
  
  const messageBody = {message: message}


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

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className="">
      <input
        className=""
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </div>
  )
}

export default SendMessage