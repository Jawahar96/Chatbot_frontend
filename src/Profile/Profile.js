import React, { useContext, useState } from 'react'
import Rightbar from '../Rightbar'
import './Profile.css'
// import { ChatUsers } from '../userContext'




function Profile() {
const [userprofile,setUserProfile]=useState({})
const PF= process.env.ReactImage2

const image1=process.env.ReactImage2
// const {users}=useContext(ChatUsers)




  return (
    <div>
 
        <div className='Profile'>
  
        </div>
        <div className='profile-rightcontainer'>
            <div className='right-top'>
                <div className='profile-cover'>
                <img className='profile-image' src={userprofile.ReactImage1? PF + userprofile.ReactImage1 : PF + "person/nocover"} />
                </div>
                <img className='user-image' src= {userprofile.ReactImage2 ? PF + userprofile.ReactImage2 : PF + "person/noAvatar.png"}></img>
            </div>
            <div className='profile-info'>
                <h4 className='profileinfo-name'>{userprofile.username}</h4>
                <span className='profilename-desc'>{userprofile.desc}</span>
            </div>
        </div>
        <div className='profile-bottom'>
            <Rightbar userprofile={userprofile} />
        </div>
    </div>
  )
}

export default Profile