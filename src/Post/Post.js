import React, { useContext, useState } from 'react'
import { ChatUsers } from '../userContext'

function Post() {
const [like,setLike]=useState()
const [isLiked,setIsLiked]=useState()
const [user,setUser]=useState()
const users =useContext(ChatUsers)



  return (
    <div>
      <div className='post'>
        <div className='post-wrapper'>
            <div className='post-Top'>
                <div className='postTopLeft'>
                    <Link to ='/profile'>
                        <img className='postProfileImg' src={user.image} alt='' />
                    </Link>
                    <span>{user.username}</span>
                    
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Post