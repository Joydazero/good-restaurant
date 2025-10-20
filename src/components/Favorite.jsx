import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import FavoriteItem from './FavoriteItem';
// import { useStore } from 'zustand';

export default function Favorite() {
  // const { data, loading, error, fetchData } = useStore();
  const { placesId  } = useParams()
  // const [favoriteItem , setFavoriteItem ]  = useState();    

  return (
    <div className='flex flex-row flex-wrap bg-white'>
      <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
        <h2 className='text-center text-2xl font-bold'>찜한 맛집</h2>
        <div className='flex-wrap flex justify-around'>
          <FavoriteItem />
        </div>
      </div>
    </div>
  )
}
