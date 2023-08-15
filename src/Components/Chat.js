
import React, { useState } from 'react'
import './Chat.css'


function Chat() {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState([])
  const [profilechange,setProfilechange]=useState([])
  let PF

  const handleSubmit =()=>{
    // event.preventDefault()
   
    if(username === profilechange  ){
      setProfilechange(username)
      console.log("Profile picture changed");
    }else{
      setUsername(profilechange)
      console.log("Profile picture not changed");

    }
    
  }


  return (
    <div>
      <div className='container'>
        <li className='sidebar-friend' >
          <img className='sidebar-freindimg' src={PF + user.profile} alt='' />
        </li>
</div>


      {/* {Data.map(() => {
        return <span  className='rightbarusername'>{user.username}</span>
      })} */}

      <span className='sidebar-button'>If you want to see the profile picture  </span>
      <button  onClick={(e)=>handleSubmit(e.target.value)} className='btn btn-dark'>Change Profile</button>
    </div>
  )
}

export default Chat