import {useState, useEffect} from 'react'

const Messages = ({socket, room_id}) => {
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);


export default Messages;