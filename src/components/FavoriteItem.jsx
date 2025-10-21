import { useEffect, useState } from "react"
import  useStore  from '../store/store'
import heart from '../assets/fav-heart.png'
import Modal from "./Modal";

export default function FavoriteItem({title, image, id  }) {
    const { deleteFavoritePlace } = useStore();    
    const [modalOpen, setModalOpen] = useState(false);
    const handleDeleteFavItem = () => {
        console.log("🗑️ 삭제 요청 id:", id);
        setModalOpen(true);
       
    }
    const handleConfirmDelete = () => {
      deleteFavoritePlace(id);      
      setModalOpen(false);   
    }
    const handleCancelDelete = () =>{
      setModalOpen(false);
    }
  return (
    <>
    { modalOpen && (
      <Modal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
    )}
    
    <div className='bg-[#ccc] flex flex-col w-[400px] h-[300px] relative rounded-[1.1rem] overflow-hidden'
    onClick={handleDeleteFavItem} >
    <div className='bg-[#ccc] flex flex-col w-[400px] h-[300px] relative rounded-[1.1rem] overflow-hidden' >
        <img src={heart} alt=""  className='absolute top-5 right-5 w-[40px] h-[40px]'/>
        <img src={image} alt="" className='w-full h-full object-cover aspect-16/9' />
        <div className='absolute bottom-0 right-0 px-3 py-3 w-full text-right bg-[rgba(0,0,0,0.5)] text-white font-medium'>{title}</div>
    </div>
    </div>
    </>
  )
}
