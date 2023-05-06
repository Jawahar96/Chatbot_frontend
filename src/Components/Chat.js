import React, { useState } from 'react'

function Chat() {
  

  const [user,setUser]=useState([])
  const [username,setUsername]=useState()

  

  return (
    <div>
   <div className='container'>
   <li className='rightbarfriend'>
    <div className='rightbar-profilecontainer'>
      <img className='rightprofileimg' src='' alt=''/>
      <span className='rightbaronline'></span>
    </div>
   </li>
   </div>
   <span className='rightbarusername'>{user.username}</span>
    </div>
  )
}

export default Chat