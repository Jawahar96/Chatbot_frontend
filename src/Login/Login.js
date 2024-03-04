import { Password } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import './Login.css'
import { CircularProgress } from '@mui/material'
import Messagecontext from '../userContext'
import { Link, useNavigate } from 'react-router-dom'




function Login() {

  const [login, setLogin] = useState([])
  const context = useContext(Messagecontext)
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  // const [context]=useContext(ChatUsers)

  const handleSubmit = async () => {
    let event;
    event.preventDefault()
   
 if (login === "email" && Password === "") {
      setLogin(' ')
      navigate();
      

      console.log(" Login credential Successfully");
    return false
    } else {
      if (login == "email") {
        setLogin(!login)
        console.log("Login credential doesn't match");

}
else {
  console.log(password);

}

    }
  }




  const handleclick = async (e) => {
    e.preventDefault()

    if (login == "" && Password == "") {
      console.log("Login successfully");
      setLogin(email)
    }

  }




  return (
    <div>
      <div className='login'>
        <div className='login-wrapper'>
          <div className='login-left'>
            <div className='login-logo'>Google chat
            </div>
            <span>Chatting with friends using google platform</span>
          </div>
        </div>
        <div className='login-right'>
          <form className='login-box' onSubmit={handleSubmit}>
            <input placeholder='email' type='email' required className='login-input' ref={email} />
            <input placeholder='password' type='password' required className='login-input' ref={Password} />
          </form>
        </div>
        <button onClick={() => { handleclick() }} className='login-button' type='submit' disabled={context}>
          {context ? (
        <CircularProgress color='lightgrey' size='25px'/>
       ) : (

          "Sign in"
       )
       }
       
        </button>

      </div>
      <span className='login-forget'>Forget Password</span>
      <input placeholder='Enter a mail id' type="email " className='login-inputtype' />
      <Link className={`${'/register'}`} onClick={() => handleclick()}>Create a new password</Link>
    </div>
  )
}

export default Login