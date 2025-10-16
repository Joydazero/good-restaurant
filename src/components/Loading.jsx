import React from 'react'
import MyLoadingAnimation from './MyLoadingAnimation'

function Loading() {
  return (
    <div className='flex-inline justify-center px-[2rem] py-[2rem] bg-white'>        
        <MyLoadingAnimation/>
        <p className='flex justify-center text-2xl font-bold text-[#545454]'>Loading</p>
    </div>
  )
}

export default Loading