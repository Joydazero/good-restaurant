import React, { useEffect } from 'react'
import PlaceItem from './PlaceItem'
import useStore from '../store/store'
import { API_BASE_URL } from "../config";

function PlaceList() {
  const { data, loading, error, fetchData }= useStore();
  useEffect( () => {
    fetchData();
    
  },[fetchData]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className='flex flex-row flex-wrap bg-white'>
      <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
        <h2 className='text-center text-2xl font-bold'>맛집 목록</h2>
        <div className='flex-wrap flex justify-around'>
        {data.map( (item) => (
          <PlaceItem key={item.id} 
            title={item.title}
            loaction={item.location}
            image={`${API_BASE_URL}/${item.image.src}`}
            description={item.description}
          />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default PlaceList