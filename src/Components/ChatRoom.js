import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ChatRoom.js'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function ChatRoom() {
  const [friends, setFriends] = useState([])
  const [onlineuser, setOnlineuser] = useState([])
  const navigate = useNavigate()


  useEffect(() => {

    let currentId;

    const getfriends = async () => {
      const res = await axios.get('/chatuser/friends' + currentId)
      setFriends(res.data)
      navigate('/chat')
    }
    getfriends()

  }, [])




  const handleClick = async (userId) => {
    try {
      let currentId

      const rs = await axios.get(`/chatdata/find/${currentId}/${userId}`)
      setOnlineuser(rs.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='chat-online'>
        {onlineuser.map(() => {
          <p className='chatonlinefriends '  ></p>
        })}
      </div>
      <div className='chatonlineimgcontainer'>
        <img className='chatonlineimg' src='' alt=''></img>
      </div>                                                                                                                 
      <div className='chatonline-batch'>

      </div>
      <span className='chatonline'>No of contact list showing</span>
      <Button onClick={() => handleClick()}> Chatlist</Button>
    </div>
  )
}

export default ChatRoom