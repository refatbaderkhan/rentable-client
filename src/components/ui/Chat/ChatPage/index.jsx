import React from 'react'
import Messages from '../Messages'

const ChatPage = ({user_id, socket, room_id}) => {

  return (
    <div>
      <Messages
        socket = {socket}
        room_id = {room_id}
      />
    </div>
  )
}

export default ChatPage