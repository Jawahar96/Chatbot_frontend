import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ChatData.css'

function ChatData(currentuser,m) {
const [userdata,setUserdata]=useState([])
const [chatdata,setChatdata] =useState([])

const image = process.env.ReactImage


useEffect(()=>{
    const userId =chatdata.find((m)=> m !== currentuser._id);
   
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
},[])
    

    




  return (
    <div>
        <div className='chatdata-container'>
           <img className='chatdata-Img'   src={userdata ?.Image ?  image + userdata.image : image +"Untitled.jpeg"} alt=''/>
 </div>
 <span className='chatdataName'></span>

    </div>
  )
}

export default ChatData





