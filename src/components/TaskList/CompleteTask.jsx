import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-blue-400  rounded-xl p-4'>
            <div className='flex justify-between p-5 items-center'>
                <h3 className='bg-red-600 hover:bg-red-700 cursor-pointer px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                {data.title}
            </h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-2 flex justify-center '>
                <button className='w-auto bg-yellow-400 hover:bg-yellow-500 rounded px-2 cursor-pointer'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
