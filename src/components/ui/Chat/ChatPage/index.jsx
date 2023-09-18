import React from 'react'
import Messages from '../Messages'
import SendMessage from '../SendMessage'

const ChatPage = ({user_id, socket, room_id}) => {

  return (
    <div>
      <Messages
        socket = {socket}
        room_id = {room_id}
      />
      <SendMessage
        socket = {socket}
        user_id = {user_id}
        room_id = {room_id}
      />
    </div>
  )
}

export default ChatPage