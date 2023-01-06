import React, { useState, useEffect } from 'react'
import mintBg from '../../assets/mint-page.png'

// Components 
import Footer from '../../components/Global/Footer/Footer'
import Navbar from '../../components/Global/Navbar/Navbar'
import Loader from '../../components/Loader/Loader'

const HiddenMap = () => {
  const [MapLoader, setMapLoader] = useState(true)

  return (
    <>
    <div style={{display: MapLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: MapLoader ? "none" : "block"}}>
      <div className='relative'>
        <img src={mintBg} onLoad={()=>setMapLoader(false)} alt="mintBg" className='h-screen xl:h-auto w-full object-cover object-center' />
        <div className='absolute flex items-center justify-center h-full w-full top-0'>
          <div className='sm:mt-[5%] mt-[45%] relative'>
            <input type="password" placeholder='Enter Password'
            className='text-white font-normal text-center placeholder:text-white placeholder:text-center
            bg-white/[0.177] sm:px-10 sm:py-5 py-3 px-4 rounded-full sm:rounded-2xl border border-white/[0.3] outline-none' />
          </div>
        </div>
        <Navbar/>
      </div>
      <div className="-mt-[12%] md:-mt-[0%] bg-white/[0.8]">
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default HiddenMap