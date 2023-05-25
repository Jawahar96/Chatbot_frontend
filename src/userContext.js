
import React, {  createContext, useEffect, useState } from "react";




   
let Messagecontext=  createContext()



export const ChatUsers =({children})=>{
    const [ChatUser,setChatUser]=useState([])
    const [datafetch,setDatafetch]=useState([])
    
    useEffect(()=>{
        localStorage.setItem("chatuser",JSON.stringify(ChatUser))
        

    },[])
    


     
    return(
        <Messagecontext.Provider value1={(ChatUser,setChatUser,datafetch ,setDatafetch)  }  >
           {children} 
        </Messagecontext.Provider>
    )

    

}


export default Messagecontext


