import React, { useContext,useEffect, useState } from 'react'
import { ChatUsers } from '../userContext'
import axios from 'axios'


function MesssageScroll() {
const [userpost,setUserPost]=useState([])
const User =useContext(ChatUsers)

useEffect((username)=>{
    const scrollpost =  async()=>{
        const res = username
        console.log(res);
    }
},[])
 
let users= axios.get('')
console.log(users)

        


  return (
    <div>
       <div className='scroll'>
        <div className='scrollwrapper'>
        {/* {userpost.map(()=>{
            <Post key={p_.id} post={p} 
       /> }) */}
       
        </div>
        
       </div>
    </div>
    
  )
}

export default MesssageScroll