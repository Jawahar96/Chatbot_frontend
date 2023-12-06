import React, { useRef, useState, } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



function Register() {
    const navigate = useNavigate()
    const username = useRef(0);
    const email = useRef(0);
    const password = useRef(0);
    const confirmpassword = useRef(0)
    const mobileno = useRef(0)
  const [user,setUser]=useState([])

    const handleClick= async(e)=>{
        
        let user = e.preventDefault()
        
        
        console.log(user);
        if(confirmpassword.current.valueOf!== password .current.valueOf){
            confirmpassword.current.setCustomValidity("Strong Password contains")
        }else if (confirmpassword){
            confirmpassword.current.setCustomValidity("Password does not match")
        }else{
            const users = {
                username :  username.current.value,
                email : email.current.value,
                password : password.current.value
                
                
            }
            console.log(users);
        };
        try{
            await axios.post('/authenticate/register',user)
            navigate('/login')
           
        }catch(error){
            console.log("Error Occured");

        }
    }


    

    return (
        <div>
            <div className='register'>
                <div className='register-wrapper'>
                    <div className='register-left'>
                        <h4 className='register-logo'> Chat</h4>
                        <span className='register-desc'>Chatting with friends using google platform</span>

                    </div>
                </div>
                <div className='register-right'>
                    <form className='register-box' >
                        <input placeholder='Username' required ref={username} className='register-input' />

                        <input placeholder='Email' required ref={email} className='register-input' />
                        
                        <input placeholder='Password' required ref={password} className='register-input' />

                        <input placeholder='Confirm password' required ref={confirmpassword} className='register-input' />

                        <input placeholder='Mobile number' required ref={mobileno} className='register-input' />

                    </form>
                </div>
                <button  onSubmit={()=>handleClick()} className='register-button' type='submit '>Register </button>
                
              {/* <Button className='registor-button' type='submit'>Register</Button> */}

            

            </div>
        </div>
    )
}

export default Register