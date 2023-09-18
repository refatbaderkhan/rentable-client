import React from 'react'
import {useState} from 'react'


const SendMessage = ({socket, user_id, room_id}) => {
  const [message, setMessage] = useState('');
  
  const messageBody = {message: message}


  return (
    <div className="">
    </div>
  )
}

export default SendMessage