import React from 'react'

function PlaceItem({name, loaction, img}) {
  return (
    <div className='bg-[#ccc] flex flex-col'>
        <img src={img} alt="" />
        <div>{name}</div>
        <div>{loaction}</div>
    </div>
  )
}

export default PlaceItem