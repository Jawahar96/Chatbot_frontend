import React, { useState } from 'react'
import './Message.css'
import { Button } from '@mui/material'

function Message() {
  const [messages,setMessages]=useState([])

  const handlemessage =()=>{
    setMessages(!messages)
    
  }
  return (
    <div>
       <div className='container'>
        <div className='message-container'>
        <p>{messages ?  "Sending..." : "messages"}</p>
          <div className='message-top'>
          <img className='messsage-img' src='data:image/png;base64,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 ' alt=''>
          </img>
         
       <p className='textmessage'>{messages.text}</p>
          </div>

        </div>
        <p className='textatbottom'>{messages.createdAt}</p>
       </div>
       <input type='text'  placeholder='Enter value' ></input>
       <Button className='btn-btn-sm-primary' onClick={()=>{handlemessage()}}>Send</Button>
    </div>
    
  )
}

export default Message