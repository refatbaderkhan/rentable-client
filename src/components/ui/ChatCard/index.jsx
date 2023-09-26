import React from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import { generateImageUrl } from '../../../core/config/generateImageUrl'

const ChatCard = ({chat, key}) => {

  const { user_id } = useCustomSelector()
  const user = chat.chat_users.find(user => user.id !== user_id)
  const last = chat.messages[chat.messages.length - 1]
  const lastMessage = last.message

  return (
    <div className='chat-card-container'>
      <div className='chat-card'>
        <div className='chat-card-avatar'>
          { user.profile_picture ?
            <img src={generateImageUrl(user.profile_picture)} alt='chat-card-picture' className='chat-card-picture' />
            :
            <div className='chat-card-letter'>
              {user.username[0]}
            </div>
          }
        </div>
        <div className='chat-card-text'>
          <div className='chat-card-username'>
            {user.username}
          </div>
          <div className='chat-card-last-message'>
            {lastMessage}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatCard