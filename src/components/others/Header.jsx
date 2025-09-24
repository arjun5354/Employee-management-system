import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data)
  // console.log("hi")
  //  if (!data) return null;
  // console.log(data.firstName)
  // const [username,setUsername]=useState("");
  // if(!data)setUsername('Admin')
  //   else{
  // setUsername(data.firstName)
  //   }
  const username = props.data?.firstName || 'Alivia-(Admin)'
  const logOutUser=()=>{
    localStorage.setItem("loggedInUser",'')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 hover:bg-red-600 cursor-pointer text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header