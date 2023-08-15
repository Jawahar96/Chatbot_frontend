import React from 'react'
import { useState } from 'react'

function Online() {
const [user,setUser]=useState([]) 
let PF

if(user){
    setUser(!user)

}
else{
    console.log("User is not listed");  
}

  return (
    <div>
    <li>
    <div className='rightfriend'>
            <div className='rightbarprofile-container'>
                <img className='rightbarimg' src={PF + user.profile}  alt=''/>
                <span className='rightbar-online'></span>
            </div>
        </div>
        <span className='rightbar-Username'>{user.username}</span>
    </li>
        
    </div>
  )
}

export default Online