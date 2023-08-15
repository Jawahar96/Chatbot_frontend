import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ChatData.css'

function ChatData(currentuser,m) {
const [userdata,setUserdata]=useState([])
const [chatdata,setChatdata] =useState([])

const image2 = process.env.ReactImage2


useEffect(()=>{
    const userId =chatdata.find((m)=> m !== currentuser._id);
    // setChatdata(userId.data)
   
    const getuser =async ()=>{
        try{
            const res =await axios.get('/chatuser ?userId ' +userId)
            setUserdata(res.data)
        }
        catch(error){
            console.log(error);
        }
 
    };
    getuser() ; 
},[currentuser,chatdata])
    

    




  return (
    <div>
        <div className='chatdata-container'>
        <img className='chatdata-image ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGKvdoUGFGwxUoFxrHWVn-NF_UODJAWkK-jc9II2MFA&s' alt='' />
        <span className='chatdata-name '>{userdata.username}</span>
        {userdata.map(()=>{
            
        })}
           
 </div>
 <span className='chatdataName'>{userdata.username}</span>

    </div>
  )
}

export default ChatData





