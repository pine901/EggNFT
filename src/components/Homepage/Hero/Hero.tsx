import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from "../../../assets/Hero_Full_Wallpaper.png"
import Navbar from '../../Global/Navbar/Navbar'

const Hero = ({setHomeLoader}:any) => {
  return (
    <>
    <div className="relative">
      <img src={HeroImg} onLoad={()=>setHomeLoader(false)} alt="hero" className='custom-hero-height h-[65vh] sm:h-auto w-full object-cover object-[60%_center]' />
      <div className="absolute top-0 left-0 w-full h-full">
        <Link to="/signin" className='custom-mini-icon sm:w-[7%] w-[10%] h-[8.9%] sm:h-[5.6%] w-full rounded-[28px] absolute top-[66.5%] cursor-pointer sm:left-[25.2%] z-[1]'></Link>
      </div>
      <Navbar/>
    </div>
    </>
  )
}

export default Hero