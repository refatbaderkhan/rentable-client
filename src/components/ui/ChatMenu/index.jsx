import React, { useEffect } from 'react'
import './style.css'
import Input from '../../base/Input'
import ChatCard from '../ChatCard'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'


const ChatMenu = () => {

  const {chats, chatId} = useCustomSelector()
  

  useEffect(() => {
  }, [chatId, chats])
  

  return (
    <div className='chat-menu'>
    <div className='chat-menu-list'>
      { (chats.length > 0) ? (
        chats.map((chat) => (
          <ChatCard
          chat={chat}
          />
        ))
      ) : (
        <div className='chat-menu-list-empty'>
          No Chats
        </div>
      )
      }
    </div>
  </div>
  )
}

export default ChatMenu