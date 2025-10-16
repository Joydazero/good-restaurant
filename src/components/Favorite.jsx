import React from 'react'
import PlaceItem from './PlaceItem'

function Favorite() {
  return (
    <div className='flex flex-row flex-wrap bg-white'>
      <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
        <h2 className='text-center text-2xl font-bold'>찜한 맛집</h2>
        <div className='flex-wrap flex justify-around'>
          <PlaceItem />
        </div>
      </div>
    </div>
  )
}
export default Favorite