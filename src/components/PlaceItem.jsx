import React from 'react'

function PlaceItem({title, image, description}) {
  return (
    <div className='bg-[#ccc] flex flex-col'>
        <img src={image} alt="" />
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default PlaceItem