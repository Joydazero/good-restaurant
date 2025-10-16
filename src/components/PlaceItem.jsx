import React from 'react'

function PlaceItem({title, image, description}) {
  return (
    <div className='bg-[#ccc] flex flex-col w-[220px]'>
        <img src={image} alt="" className='w-full h-full' />
        <div>{title}</div>
        {/* <div>{description}</div> */}
    </div>
  )
}

export default PlaceItem