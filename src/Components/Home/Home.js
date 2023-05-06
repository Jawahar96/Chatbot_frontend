import React, { useState } from 'react'
import Rightbar from '../../Rightbar'
import { Button } from '@mui/material'
import './Home.css'


function Home(Contact_name,Phone_no) {
const [user,setChatUser]=useState([])
const [contact,setContact]=useState(true)

const getUser=()=>{
    setChatUser(contact)
     setContact(user)

}


const Data=[
    {
        "Contact_name" : "Jawahar",
        "Phone_no" : "9893412334"

    },
    {
        "Contact_name" : "Selva",
        "Phone_no" : "9345501784"

    },
    {
        "Contact_name" : "Dinesh",
        "Phone_no" : "9893444401"

    },
    {
        "Contact_name" : "Thiyagu",
        "Phone_no" : "925555013"

    },
]

  return (
    <div>
        <div className='home-container'>
           <Rightbar />
            
     
        </div>
        <div className='contact-list'>
        
        
         {Data.map((values)=>{
            
            <Home val={Contact_name} val2={Phone_no} />
            
         })}
        </div>
       <Button   onClick={(e)=>{getUser(e.target.value)}} className='btn-btn -btn-sm-warning'>ContactList</Button>
    </div>
    
  )
}

export default Home