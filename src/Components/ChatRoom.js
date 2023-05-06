import React, { useState } from 'react'
import axios from 'axios'
import './ChatRoom.js'

function ChatRoom() {
    const [friends,setFriends]=useState([])
    const [onlineuser,setOnlineuser]=useState([])

 const handleClick = async ()=>{
    try{
        
        const rs =   await axios.get('')
    }catch(error){
        console.log(error);
    }
 }

  return (
    <div>
   <div className='chat-online'>
    {onlineuser.map(()=>{
<p className='chatonlinefriends '  onClick={()=>handleClick()}></p>
 })}
   </div>
   <div className='chatonlineimgcontainer'>
    <img className='chatonlineimg' src='' alt=''></img>
   </div>
   <div className='chatonline-batch'>

   </div>
   <span className='chatonline'></span>
    </div>
  )
}

export default ChatRoom