import React from 'react'
import PlaceList from './PlaceList'
import Header from '../pages/Header'
import Favorite from './Favorite'

function Home() {
  return (
    <div className='flex w-full bg-[#7c7c7c] flex-col'>
        <Header></Header>
        <div className='flex flex-col justify-center w-full px-[2rem] py-[2rem]'>
            <section className='mt-[3rem]'>
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