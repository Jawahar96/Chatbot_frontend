import { Button } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import Message from '../Components/Messages/Message'
import './ChatMessanger.css'
import ChatRoom from '../Components/ChatRoom'
import { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'
import { Prev } from 'react-bootstrap/esm/PageItem'
import axios from 'axios'


function ChatMessanger() {
    const [user, setUser] = useState([])
    const [message, setMessage] = useState(["messages"])
    const [chat, setChat] = useState([])
    const [useronline, setUserOnline] = useState([])
  const [arrivalmessage,setArrivalmessage]=useState([])
  const [newMessage,setNewmessage]=useState([])
    // const [users] = useContext(ChatUsers)
  


    useEffect(()=>{
            Socket.current =io('ws : //localhost:3001')
            Socket.current.on("getmessageId",(data)=>{
                setArrivalmessage({
                    sender : data.senderId,
                    text : data.text,
                    created_At : Date.now()
                })

            })
    },[])
    useEffect(() => {
        Socket.current.emit('user')


        if(arrivalmessage === user.chat?.includes(arrivalmessage.sender) && setArrivalmessage((Prev)=>[...Prev,arrivalmessage]))

      
        setChat(chat.data)
        console.log(chat);
    },[arrivalmessage,user])



    useEffect(()=>{
        const getmessage =()=>{
            try{

                const result = axios.get('/message' +user?._id)
                setMessage(result.data)
            }catch(error){

            }
            getmessage()
        }
    },[user]);


    useEffect(()=>{

    })

    const hanldesubmit = (event) => {

        if (chat === "User can view " ? "messages" : "not send the messages")
        event.preventDefault()
        const message = {
            sender : user._id,
            text : newMessage,
            chatdataId : user._id
        }
            setUser(chat)
        if (chat!== "")
            setChat(user)

    }




    return (
        <div>
            <div className='chat-messenger'>
                <div className='chat-menu'>
                    <div className='Menu-Wrapper'>Menu
                        <input placeholder='Search for Users' className='Menu-Input'></input>
                        {chat.map((c) => {

                            return <div  onClick={() => {setChat(c) }} />


                        })}
                    </div>
                    <div className='chat-box'>
                        <div className='Box-wrapper'>Box
                        {chat}
                            <div className='chatboxtop'>

                                {message.map((m) => {
                                    return <Message messages={m}

                                    />
                                }

                                )

                                }
                            </div>  




                        </div>

                        <div className='chatbox-bottom'>
                            <textarea className='message-input' onChange={(e) => setMessage(e.target.value)} placeholder='Write something here ' />

                        </div>
                    </div>
                    <Button onClick={(e) => { hanldesubmit(e) }} >SEND</Button>
                </div>
                <span className='conversation-text'>Open the chat and start the chating process</span>
                <div className='online-chat'>online
                    <div className='onlinechat-wrapper'>
                        <ChatRoom useronline={useronline} setChat={setChat} />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessanger