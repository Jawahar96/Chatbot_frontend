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
        {userdata.map(()=>{
            
        })}
           <img className='chatdata-Img'   src={userdata ?.profile ?  image2 + userdata.profile : image2 +"image.png"} alt=''/>
 </div>
 <span className='chatdataName'>{userdata.username}</span>

    </div>
  )
}

export default ChatData





