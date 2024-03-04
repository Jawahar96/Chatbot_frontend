import { Button } from '@mui/material';
import React, { useState, useEffect, useContext, useRef } from 'react';
import Message from '../Components/Messages/Message';
import './ChatMessanger.css';
import ChatRoom from '../Components/ChatRoom';
import { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import axios from 'axios';
import Topbar from '../Topbar'
import ChatData from '../Components/ChatData/ChatData';



function ChatMessanger() {
    const [user, setUser] = useState([])
    const [message, setMessage] = useState(["messages"])
    const [chat, setChat] = useState([])
    const [useronline, setUserOnline] = useState([])
    const [arrivalmessage, setArrivalmessage] = useState([])
    const [newMessage, setNewmessage] = useState([])
    const scrollRef = useRef()
    const socket = useRef(io("ws://localhost:3001"));
    const [currentchat, setCurrentchat] = useState([null])
    const [friends,setFriends]=useState([])
    const [onlinefriend,setOnlineFriend]=useState([])
    const[members,setMembers]=useState([])
    let m;


useEffect (()=>{
    const getfriendlist=async ()=>{
        try{
            const result = await axios.get('/chatdata'+user._id)
        setFriends(result.data)


        }catch(error){
            console.log(error);
        }
        

    }
    getfriendlist();

},[user._id])

    

        

    useEffect(() => {
        arrivalmessage && currentchat?.member.includes(arrivalmessage.sender) &&
            setMessage((prev) => [...prev, arrivalmessage])
    }, [arrivalmessage, chat])

    useEffect(() => {
        Socket.current.emit('user')


        if (arrivalmessage === user.currentchatchat?.includes(arrivalmessage.sender) && setArrivalmessage((Prev) => [...Prev, arrivalmessage]))


            setChat(chat.data)
        console.log(chat);
    }, [arrivalmessage, user])





    useEffect(() => {
        socket.current = io("ws://localhost:3001");
        Socket.current.on("getMessage", (data) => {
            setArrivalmessage({
                sender: data.senderId,
                text: data.text,
                created_At: Date.now()
            })

        })
    }, [user]);

  

    useEffect(() => {
        const getMessage = () => {
            try {

                const result = axios.get('/message' + user?._id);
                setMessage(result.data)
            } catch (error) {

            }
            getMessage()
        }
    }, [user]);


   

    useEffect(() => {
        let clients
        Socket.current.emit("addClient", user._id);
        Socket.current.on("getClient", (clients))
        setUserOnline(user.following.filter((f) => clients.some((u) => u.clientId === f))

        );
    }, [user])
    console.log(user);

    const hanldesubmit = (event) => {

        if (chat === "User can view " ? "messages" : "not send the messages")
            event.preventDefault()
        const message = {
            sender: user._id,
            text: newMessage,
            chatdataId: user._id
        }
        setUser(chat)
        if (chat == "")
            setChat(user)
        hanldesubmit(setCurrentchat)

    }

    const receiverid = currentchat.members.find(member => member !== user._id)

    socket.current.emit("sendMessages", {
        senderId: user._id,
        receiverid,
        text: newMessage
    })


    useEffect(() => {
        const message = async () => {
            try {
                const res = await axios.post("/messages", message)
                setMessage([...message, res.data]);
                setNewmessage("")
            } catch (error) {
                console.log(error);

            }

        }
    })

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior : "smooth"})
    },[message])




    return (
        <div>


            <div className='chat-messenger'>
                <div className='chat-menu'>
                    <div className='Menu-Wrapper'>
                        <input placeholder='Search for Users' className='Menu-Input'></input>
                        {/* <ChatData />
                        <ChatData />
                        <ChatData /> */}
                        {chat.map((c) => {

                            return <div onClick={() => { setChat(c) }} />


                        })}
                    </div>
                    <div className='chat-box'>
                        <div className='Box-wrapper'>

                            <div className='chatboxtop'>
                                <Message />
                                <Message />
                                <Message />   


                            </div>

                            <div className='chatbox-bottom'>
                                <textarea className='chatmessage-input' placeholder='Text here ' onChange={(e) => setNewmessage(e.target.value)}></textarea>
                                <Button className='chatsubmit-button' >SEND</Button>



                            </div>


                        </div>

                    </div>


                </div>
                <span className='conversation-text'>Open the chat and start the chating process</span>
                <div className='online-chat'>online
                    <div className='onlinechat-wrapper'>
                        <ChatData useronline={useronline} currentId={user._id} setCurrentchat={setCurrentchat} />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessanger