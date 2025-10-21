import PlaceList from '../components/PlaceList'
import Header from './Header'
import Favorite from '../components/Favorite'
import GeoLocationPlace from '../components/GeoLocationPlace';


function Home() {

  return (
    <div className='flex w-full bg-[#ffde9c] flex-col'>
        <Header></Header>
        <div className='flex flex-col justify-center w-full px-[2rem] py-[1rem]'>
            <section>
                <Favorite/>
            </section>
            <section className='mt-[3rem]'>
                <PlaceList/>
            </section>
        </div>
    </div>
  )
}
export default Home