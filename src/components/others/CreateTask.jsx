import React, { act, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData]=useContext(AuthContext)

    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const [date,setdate]=useState('')
    const [asignTo,setAsignTo]=useState('')
    const [category,setCategory]=useState('')

    const [newtask,setNewTask]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        
        // console.log(task)
        setNewTask({title,description,date,category,active:false,newTask:true,failed:false,comleted:false})
        // console.log(task)
        console.log(userData)
        userData.forEach(element => {
            // console.log(element.firstName)
            if(asignTo==element.firstName){
                element.tasks.push(newtask)
                element.taskCount.newTask=element.taskCount.newTask+1;
                console.log(element)  
            }
        });
        setUserData(userData)
        console.log(userData)

        settitle('')
        setdescription('')
        setdate('')
        setAsignTo('')
        setCategory('')

    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-wrap items-start w-full justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input value={title} onChange={(e)=>{
                            settitle(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI-design '/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={date} onChange={(e)=>{
                            setdate(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                        <input value={asignTo} onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc'/>
                    </div>
                </div>
                 
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
                    <textarea value={description} onChange={(e)=>{
                            setdescription(e.target.value)
                            // console.log(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='mt-4 w-full text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500 cursor-pointer'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask