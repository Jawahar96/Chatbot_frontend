import React, { useContext, useEffect, useState } from 'react'
import Rightbar from '../Rightbar'
import Sidebar from '../Sidebar'
import './Profile.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Messagecontext from '../userContext'

// import { ChatUsers } from '../userContext'


function Profile() {
    const [userprofile, setUserProfile] = useState([])
    const PF = process.env.ReactImage2
    const image1 = process.env.ReactImage2
    const Username = useParams().Username
    const context=useContext(Messagecontext)
    // const {users}=useContext(ChatUsers)

    useEffect(() => {
        const getProfile = () => {
            const result = axios.get(`chatusers/Username=${Username}`)
            setUserProfile(result.data)
          
        };
        getProfile()

    }, [Username])


    if(userprofile=== ""){
        return PF?.Username 
    }

    return (
        <div>

            <div className='Profile'>
  <Sidebar />
            </div>
            <div className='profile-rightcontainer'>
                <div className='right-top'>
                    <div className='profile-cover'>
                        <img className='profile-image' src={userprofile.profile ? PF + userprofile.ReactImage1 : PF + "person/nocover"} />
                    </div>
                    <img className='user-image' src={userprofile.profile ? PF + userprofile.ReactImage2 : PF + "person/noAvatar.png"}></img>
                </div>
                <div className='profile-info'>
                    <h4 className='profileinfo-name'>{userprofile.username}</h4>
                    <span className='profilename-desc'>{userprofile.desc}</span>
                </div>
            </div>
            <div className='profile-bottom'>
                <Rightbar userprofile={userprofile} />
                {userprofile.map(()=>{
                  return  Username != userprofile.Username
                })}
            </div>
        </div>
    )
}

export default Profile