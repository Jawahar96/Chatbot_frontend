import { Chat, QuestionAnswer, RssFeed } from '@mui/icons-material'
import { Group } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebarwraper'>
                    <div className='sidebarList'>
                        <div className='sidebarlist-item'>
                           <li><RssFeed className='icon' />
                            <span className='sidebaritemTexticon'>Feed</span>
                        </li> </div>
                      <div className='sidebarlist-item'>
                       <li><Chat  className='chat-icon'/></li> 
                       <span className='sidebaritemTexticon'>Chat</span>
                      </div>
                    </div>
                    <div className='sidebarlist-item'>
                        <li> <Group className='group-icon' /></li>
                        <span className='sidebaritemTexticon'>Group</span>
                    </div>
                    <div className='sidebarlist-item'>
                     <li><QuestionAnswer className ="question-icon" /></li> 
                     <span className='sidebaritemTexticon'>QuestionsAnswer</span>
                    </div>
                </div>    
            </div>
            <button className='sidebar-button btn-btn-sm-primary'>Show the List</button>
            <hr className='sidebar-hr'/>
            <ul className='sidebar-userlist'/>
        </div>
    </div>
  )
}

export default Sidebar