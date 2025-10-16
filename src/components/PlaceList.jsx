import React from 'react'
import PlaceItem from './PlaceItem'
import PlaceData from '../api/placedata.json'


function PlaceList() {
  return (
    <div className='flex flex-row flex-wrap bg-white'>
      <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
        <h2 className='text-center text-2xl font-bold'>맛집 목록</h2>
        <div className='flex-wrap flex justify-around'>
        {PlaceData.map( (data) => (
          <PlaceItem key={data.id} 
            name={data.name}
            loaction={data.loaction}
            img={data.img}
          />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default PlaceList