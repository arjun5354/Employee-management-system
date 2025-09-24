import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const AllTask = () => {
    const [userData,setUserData]=useContext(AuthContext)
    console.log(userData)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60'>

        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
            <div className='h-[80%]  overflow-auto'>
                {userData.map((elem,idx)=>{
                return <div className='text-white border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                <h3 style={{color:'blue'}} className='w-1/5 text-blue-900 text-lg font-medium'>{elem.taskCount.newTask}</h3>
                <h5 style={{color:'yellow'}} className='w-1/5 text-yellow-400 text-lg font-medium'>{elem.taskCount.active}</h5>
                <h5 className='w-1/5 text-white text-lg font-medium'>{elem.taskCount.completed}</h5>
                <h5 style={{color:'red'}} className='w-1/5 text-red-600 text-lg font-medium'>{elem.taskCount.failed}</h5>
            </div>
            })}
        </div>
    </div>
  )
}

export default AllTask