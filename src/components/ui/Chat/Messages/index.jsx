import {useState, useEffect} from 'react'
import { sendRequest } from '../../../../core/config/request';
import { requestMethods } from '../../../../core/enums/requestMethods';

const Messages = ({socket, room_id}) => {
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
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getMessages();
  }, []);


export default Messages;