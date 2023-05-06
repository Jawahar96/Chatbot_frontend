import {  createContext, useState } from "react";

let Messagecontext=  createContext()

export const ChatUsers =({children})=>{
    const [ChatUser,setChatUser]=useState([])

    return(
        <Messagecontext.Provider value={(ChatUser,setChatUser)}>
           {children}
        </Messagecontext.Provider>
    )

    

}