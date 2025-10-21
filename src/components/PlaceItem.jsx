import { useNavigate } from 'react-router-dom';
import  useStore  from '../store/store'

function PlaceItem({title, image, id : placesId, place, location }) {  
 const { addFavoritePlace } = useStore();
  const navigate = useNavigate();
  const handleFavoriteItem = () => {
    const place = { 
      id: placesId, 
      title, 
      image
    };
    const safePlace = Object.fromEntries( Object.entries(place).filter(([_,v])=> v != null ))
    console.log("📤 서버로 보낼 safePlace:", safePlace);
    addFavoritePlace(safePlace)
    navigate(`/favorite/${placesId}`);   
  }
  return (
    <div className='bg-[#ccc] flex flex-col w-[400px] h-[300px] relative rounded-[1.1rem] overflow-hidden'
      onClick={handleFavoriteItem} >
        <img src={image} alt="" className='w-full h-full object-cover aspect-16/9' />
        <div className='absolute bottom-0 right-0 px-3 py-3 w-full text-right bg-[rgba(0,0,0,0.5)] text-white font-medium'>{title}</div>
    </div>
  )
}

export default PlaceItem