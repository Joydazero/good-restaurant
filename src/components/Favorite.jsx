import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import FavoriteItem from './FavoriteItem';
import useStore from '../store/store'
import Loading from './Loading';
import { API_BASE_URL } from "../config";

export default function Favorite() {
  const navigate = useNavigate()
  const {  fetchFavoritePlaceData, favoritePlaces, loading, error  } = useStore();
  const location = useLocation();
  const { placesId  } = useParams()
  const handleMoveList = () => {
    navigate('/');
  }  
  useEffect(() => {
      fetchFavoritePlaceData();
  }, [fetchFavoritePlaceData]);

  if (loading) return <Loading />;
  if (error) return <p>에러 발생: {error}</p>;

  return (
      <div className='flex flex-row flex-wrap bg-white w-full'>
        <div className='gap-[1rem] flex justify-center w-full flex-col px-[1rem] py-[1rem]'>
          <h2 className='text-center text-5xl font-bold dongle-regular'>찜한 맛집</h2>
          <div className='flex-wrap flex justify-around gap-5'>
            {favoritePlaces
            .filter(item => item)
            .map( (item) =>(
              <FavoriteItem 
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              location={item.location}                  
              description={item.description}
              />
            ))
            }
          </div>
          {
            placesId && (
              <div className='flex justify-center mt-20'>
                <button className='rounded-5 w-[5rem] h-[2.5rem] rounded-[.5rem] text-white border-1 bg-[rgba(0,0,0,1)] hover:bg-[rgba(0,0,0,0.4)] transition duration-.4 ease-in-out text-sm' onClick={handleMoveList}>목록으로</button>
              </div>
            )
          }
          
        </div>
      </div>
  )
}
