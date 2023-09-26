import React from 'react'
import './style.css'
import Input from '../../base/Input'
import ChatCard from '../ChatCard'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'


const ChatMenu = () => {

  const {chats} = useCustomSelector()

  return (
    <div className='chat-menu'>
    <div className='chat-menu-search'>
      <div className='chat-menu-search-input'>
      <Input
      width={'300'}
      onChange={(value) => console.log(value)}
      />
      </div>
    </div>
    <div className='chat-menu-list'>
      { (chats.length > 0) ? (
        chats.map((chat, i) => (
          <ChatCard
          key={i}
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
    <div className='chat-menu-button'>
    </div>
  </div>
  )
}

export default ChatMenu