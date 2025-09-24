import React from 'react'
import {useState} from "react"
const Login = ({handleLogin}) => {
    
    // console.log({handleLogin})

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submithandler=(e)=>{
        e.preventDefault();
        // console.log("Email is ", email);
        // console.log("Password is ", password);
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={submithandler} className='flex flex-col items-center justify-center' >
                    <input required value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='outline-none  border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email'
                    />
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                        // console.log(e.target.value);
                    }} required className='outline-none  border-2 border-emerald-600 py-3 px-5 mt-4 text-xl rounded-full placeholder:text-gray-400' type="Password" placeholder='Enter Your Password'/>
                    <button className='outline-none  border-none bg-emerald-600 py-3 px-5 mt-4 text-xl rounded-full cursor-pointer'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login