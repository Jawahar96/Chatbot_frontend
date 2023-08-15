import React, { useState } from 'react'
import './Message.css'
import { Button } from '@mui/material'

function Message({ self }) {
  const [messages, setMessages] = useState([])

  const handlemessage = () => {
    setMessages(messages)

  }
  return (
    <div>
      <div className='container'>
        <div className='message-container'>

          <p>{messages ? "Sending..." : "messages"}</p>
          <div className={self ? "message-self " : "message" } >
            <div className='message-top'>
              <img className='message-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGKvdoUGFGwxUoFxrHWVn-NF_UODJAWkK-jc9II2MFA&s' alt='' />

              <p className='message-text'>Hi eveyone .This message from user 1
              </p>
            </div>
          </div>
        </div>
        <div className='message-bottom'>20mins ago</div>
      </div>
      <input type='text' placeholder='Enter value' ></input>
      <Button className='btn-btn-sm-primary' onClick={() => { handlemessage() }}>Send</Button>
    </div>

  )
}

export default Message