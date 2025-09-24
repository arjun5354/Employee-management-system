import React from 'react'

const AcceptTask = ({data}) => {
    // if(!data.taskTitle)return null
    console.log(data.title)
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-red-400  rounded-xl p-4'>
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
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 hover:bg-green-600 py-1 px-2 text-sm cursor-pointer'>Mark As Completed</button>
                <button className='bg-red-500 hover:bg-red-600 py-1 px-2 text-sm cursor-pointer'>Mark As Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
