import React, {useState, useEffect} from 'react'
import './style.css'
import { useCustomSelector } from '../../../redux/customHooks/customSelector'
import { generateImageUrl } from '../../../core/config/generateImageUrl'
import { useNavigate } from 'react-router-dom'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch'

const ChatCard = ({chat}) => {

  const navigate = useNavigate()
  
  const { user_id, chatId} = useCustomSelector()
  const {setChat} = useCustomDispatch()
  const user = chat.chat_users.find(user => user._id !== user_id)
  const [last, setLast] = useState("")
  const [active, setActive] = useState('chat-card')
  const [loading, setLoading] = useState(true)

  const handleChatNav = () => {
    navigate(`/chat/${user._id}`)
    setChat({room_id: user._id})
  }

  useEffect(() => {
    setLast(chat.messages[chat.messages.length - 1])
    if (chatId === user._id) {
      setActive('chat-card-active')
    } else {
      setActive('chat-card')
    }
    setLoading(false)
  }
  , [chatId, chat])

  if (loading) return (<div>Loading</div>)
  if (last) {
  return (
    <div className='chat-card-container' onClick={() => handleChatNav()}>
      <div className={active}>
        <div className='chat-card-avatar'>
          { user.profile_picture ?
            <img src={generateImageUrl(user.profile_picture)} alt='chat-card-picture' className='chat-card-picture' />
            :
            <div className='chat-card-letter'>
              {user.username[0].toUpperCase()}
            </div>
          }
        </div>
        <div className='chat-card-text'>
          <div className='chat-card-username'>
            {user.username}
          </div>
          <div className='chat-card-last-message'>
            {last.message}
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default ChatCard