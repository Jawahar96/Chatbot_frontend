import React, { useEffect, useRef, useState } from 'react'

function useChat(roomId) {
    const [message,setMessage]=useState([])
  const socketref=useRef()
    useEffect(()=>{
        socketref.current =socketIOClient(SOCKET_SERVER_URL),{
            query :{roomId}
        }
    });

    socketref.current.on(NEW_CHAT_MESSAGE),(message)=>{
       
        const incomingMessage = {
            ...message,
            ownedByCurrentUser: message.senderId === socketref.current.id,
          };
          setMessage((messages) => [...messages, incomingMessage]);
        };
    
        return()=>{
          socketref.current.disconnect()
          
        };
      
 
}

export default useChat
