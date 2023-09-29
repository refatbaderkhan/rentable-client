import React, {useState, useEffect} from 'react'
import './style.css'
import { sendRequest } from '../../../core/config/request';
import { requestMethods } from '../../../core/enums/requestMethods';
import { generateImageUrl } from '../../../core/config/generateImageUrl';
import { useCustomSelector } from '../../../redux/customHooks/customSelector';

const ChatMessages = ({room_id}) => {
  const {socket, user_id, getUserById} = useCustomSelector();
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);



  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.GET,
          route: `/user/messages/${room_id}`,
        });
        
        setMessagesHistory(response);

        const chatMessagingMessages = document.querySelector('.chat-messaging-messages');
        chatMessagingMessages.scrollTop = chatMessagingMessages.scrollHeight;
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    
    getMessages();
  }, [room_id]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          user_id: data.user_id,
          message_time: data.message_time,
        },
      ]);
      //scroll down chat-messaging-messages div to bottom//
      const chatMessagingMessages = document.querySelector('.chat-messaging-messages');
      chatMessagingMessages.scrollTop = chatMessagingMessages.scrollHeight;

    });
    return () => socket.off('receive_message');
  }, [socket]);
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
        //change this out put 9/28/2023, 11:38:13 AM to "11:38 AM   9/28/2023"//

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        let strDate = month + '/' + day + '/' + year;
        return `${strTime}    ${strDate}`;        
      }

  return (
    <div className='chat-messaging-messages'>
          <div className='conversation'>
            {messagesHistory.map((msg, i) => (
              (msg.sender === user_id) ? (
                <div className='conversation-message-brown' key={i}>
                  {i === 0 || messagesHistory[i-1].sender !== msg.sender ? (
                    <div className='sender-avatar'>
                      {getUserById(msg.sender).profile_picture ? (
                        <img className='sender-image' src={generateImageUrl(getUserById(msg.sender).profile_picture)} alt="profile"/>
                      ) : (
                        <span className="sender-letter">
                          {getUserById(msg.sender).username[0]}
                        </span>
                      )}
                    </div>
                  ) : 
                  <div className='sender-avatar-blank'>
                  </div>
                  }
                  <div className='message-body-brown'>
                  <div className='chat-messaging-messages-history-message-text'>{msg.message}</div>
                  <div className='chat-messaging-messages-history-message-sender-time-brown'>{formatDateFromTimestamp(msg.message_time)}</div>

                  </div>
                </div>
              ) : (
                <div className='conversation-message' key={i}>
                  {i === 0 || messagesHistory[i-1].sender !== msg.sender ? (
                    <div className='sender-avatar'>
                      {getUserById(msg.sender).profile_picture ? (
                        <img className='sender-image' src={generateImageUrl(getUserById(msg.sender).profile_picture)} alt="profile"/>
                      ) : (
                        <span className="sender-letter">
                          {getUserById(msg.sender).username[0]}
                        </span>
                      )}
                    </div>
                  ) : 
                  <div className='sender-avatar-blank'>
                  </div>
                  }
                  <div className='message-body'>
                  <div className='chat-messaging-messages-history-message-text'>{msg.message}</div>
                  <div className='chat-messaging-messages-history-message-sender-time'>{formatDateFromTimestamp(msg.message_time)}</div>
                  </div>
                </div>
              )
            ))}
          </div>
          <div className='conversation'>
            {messagesRecieved.map((msg, i) => (
              (msg.user_id === user_id) ? (
                <div className='conversation-message-brown' key={i}>
                  { (i === 0 || messagesHistory[messagesHistory.length-1].sender !== msg.user_id || messagesRecieved[i-1].user_id !== msg.user_id) ? (
                    <div className='sender-avatar'>
                      {getUserById(msg.user_id).profile_picture ? (
                        <img className='sender-image' src={generateImageUrl(getUserById(msg.user_id).profile_picture)} alt="profile"/>
                      ) : (
                        <span className="sender-letter">
                          {getUserById(msg.user_id).username[0]}
                        </span>
                      )}
                    </div>
                  ) : 
                  <div className='sender-avatar-blank'>
                  </div>
                  }
                  <div className='message-body-brown'>
                  <div className='chat-messaging-messages-history-message-text'>{msg.message}</div>
                  <div className='chat-messaging-messages-history-message-sender-time-brown'>{formatDateFromTimestamp(msg.message_time)}</div>

                  </div>
                </div>
              ) : (
                <div className='conversation-message' key={i}>
                  {i === 0 || messagesRecieved[i-1].user_id !== msg.user_id ? (
                    <div className='sender-avatar'>
                      {getUserById(msg.user_id).profile_picture ? (
                        <img className='sender-image' src={generateImageUrl(getUserById(msg.user_id).profile_picture)} alt="profile"/>
                      ) : (
                        <span className="sender-letter">
                          {getUserById(msg.user_id).username[0]}
                        </span>
                      )}
                    </div>
                  ) : 
                  <div className='sender-avatar-blank'>
                  </div>
                  }
                  <div className='message-body'>
                  <div className='chat-messaging-messages-history-message-text'>{msg.message}</div>
                  <div className='chat-messaging-messages-history-message-sender-time'>{formatDateFromTimestamp(msg.message_time)}</div>
                  </div>
                </div>
              )
            ))}
          </div>
    </div>
  )
}

export default ChatMessages