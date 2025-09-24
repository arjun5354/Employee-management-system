import React from 'react'

function TaskListNumber({ data }) {
  if (!data || !data.taskCount) {
    return null; // Or a fallback UI like <div>Loading...</div>
  }

  const { newTask = 0, completed = 0, active = 0, failed = 0 } = data.taskCount;

  return (
    <div className='flex mt-10 justify-between gap-5 w-full flex-nowrap '>
      <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400 hover:bg-blue-500 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{newTask}</h2>
        <h2 className='text-2xl font-medium'>New Task</h2>
      </div>
      <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400 hover:bg-green-500 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{completed}</h2>
        <h2 className='text-2xl font-medium'>Completed Task</h2>
      </div>
      <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{active}</h2>
        <h2 className='text-2xl font-medium'>Accepted Task</h2>
      </div>
      <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400 hover:bg-red-500 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{failed}</h2>
        <h2 className='text-2xl font-medium'>Failed Task</h2>
      </div>
    </div>
  );
}

export default TaskListNumber;
