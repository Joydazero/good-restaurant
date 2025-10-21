import React from 'react'
import logo from '../assets/main-img.png'
function Header() {
  return (
    <header className='w-full flex flex-col justify-center items-center py-5 mt-1'>
      <article className='flex justify-center flex-col items-center'>
        <h1 className='w-[160px] justify-center ml-[50px]'><img src={logo}  className="w-full h-full" alt="" /></h1>
        <p className='mt-3 text-center leading-tight amatic-sc-bold text-4xl font-bold'>What should we<span className='block'>eat today?</span></p>
      </article>
    </header>
  )
}

export default Header