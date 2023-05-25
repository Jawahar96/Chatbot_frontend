import { Chat, Search,Person ,NotificationAdd } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

function Topbar() {

  return (
    <div>
    
        <div className='container'>
            <div className='topbar-container'>
                <div className='topbar-left'>
               
                    <Link to ='/'  style={{textDecoration : "none"}} ><h2 className='logo'> Google Chat</h2></Link>
                </div>
            </div>
            <div className='topbar-centre'>
                <div className='search-bar'>
                <Search className='search-icon' />
                <input type='text' placeholder='Search for userslist ' className='searchInput'/>
             </div>

            </div>
            <div className='topbar-right'>
            <div className='topbar-link'>
                <span className='topbar-links'>Homepage</span>
                <span className='topbar-links'>Timeline</span>
            </div>
                <div className='topbaricon'>
                    <Person  />
                    <span className='topbariconbatch'>1</span>
                </div>
                <div className='topbaricon'>
                    <Chat />
                    <span className='topbaricon '>2</span>
                </div>
            </div>
            <div className='topbariconbatch'>
                <NotificationAdd />
                <span className='topbariconitem '></span>
            </div>
        </div>
        {/* <Link to ={`/profile/${user.username}`} */}
    </div>
    
  )
}

export default Topbar