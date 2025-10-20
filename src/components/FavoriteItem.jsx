import { useEffect, useState } from "react"
import  useStore  from '../store/store'

export default function FavoriteItem({title, image, id  }) {
    const { deleteFavoritePlace } = useStore();    
    const handleDeleteFavItem = () => {
        console.log("🗑️ 삭제 요청 id:", id);
        deleteFavoritePlace(id); 
    }
  return (
    <div className='bg-[#ccc] flex flex-col w-[400px] h-[300px] relative rounded-[1.1rem] overflow-hidden'
    onClick={handleDeleteFavItem} >
        <img src={image} alt="" className='w-full h-full object-cover aspect-16/9' />
        <div className='absolute bottom-0 right-0 px-3 py-3 w-full text-right bg-[rgba(0,0,0,0.5)] text-white font-medium'>{title}</div>
    </div>
  )
}
