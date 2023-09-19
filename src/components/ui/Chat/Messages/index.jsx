import {useState, useEffect} from 'react'
import { sendRequest } from '../../../../core/config/request';
import { requestMethods } from '../../../../core/enums/requestMethods';
import { useCustomSelector } from '../../../../redux/customHooks/customSelector';


const Messages = () => {
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);
  const {room_id, socket} = useCustomSelector();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.GET,
          route: `/user/messages/${room_id}`,
        });
        setMessagesHistory(response);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getMessages();
  }, []);

  // Runs whenever a socket event is recieved from the server
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
    });

	// Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket]);

  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div>
    <div className=''>
    {messagesHistory.map((msg, i) => (
      <div className='' key={i}>
        <div>
          <span className=''>{msg.sender}</span>
        </div>
        <p className=''>{msg.message}</p>
        <br />
      </div>
    ))}
   </div>

    <div className=''>
      {messagesRecieved.map((msg, i) => (
        <div className='' key={i}>
          <div>
            <span className=''>{msg.user_id}</span>
            <span className=''>
              {formatDateFromTimestamp(msg.message_time)}
            </span>
          </div>
          <p className=''>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Messages;