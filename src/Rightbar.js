import React, { useState } from 'react'
import Chat from './Components/Chat'
import './Rightbar.css'

function Rightbar() {

  const[text,setText]=useState([])
  const [message,setMessage]= useState()
  return (
    <div>
    <div className='rightbar-container' >
    <div className='rightbar-wrapper'>
        <div className='weddingday-container'>
        <div className='weddingdayImage'>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhappy-wedding-day-just-married-romantic-couple-vector-27219541&psig=AOvVaw1w8PWOWkuNT_HB1WYoKOl2&ust=1683250938550000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjZ1MXE2v4CFQAAAAAdAAAAABAJ' />
                <span className='wedding day text'>
                    <b>Indranil </b> <b>and other 2 friends  </b> <b>have a weddingday today</b>
                </span>
            
        </div>
       <img className='rightbarAD'src='https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-floral-enchantment-bouquet-132891-m.jpg' />
       <h5 className='rightbartitle'> Online Couples</h5>
       <ul className='ShowFriendlist'></ul>
       {text.map((u)=>{
              <Chat key={u.id} users={u} />
       })} 
       </div>
       </div>
</div>
    </div>


    
  
  )

}

export default Rightbar