import React, { useState, useEffect } from 'react'
import ContactBg from '../../assets/Contact Wallpaper-cropped.png'
import COntactLogo from '../../assets/Logo-White-new.png'

// Components 
import Footer from '../../components/Global/Footer/Footer'
import Navbar from '../../components/Global/Navbar/Navbar'
import Loader from '../../components/Loader/Loader'

const Contact = () => {
  const [ContactLoader, setContactLoader] = useState(true)
  
  return (
    <>
    <div style={{display: ContactLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: ContactLoader ? "none" : "block"}}>
      <div className='relative h-[80vh] sm:h-screen xl:h-auto'>
        <Navbar/>
        <img src={ContactBg} onLoad={()=>setContactLoader(false)} alt="mintBg" className='h-full sm:h-screen xl:h-auto w-full object-cover object-[left_center]' />
        <div className='absolute flex items-center justify-center h-full w-full top-0'>
          <div className='relative w-full sm:max-w-[55%] max-w-[60%] mt-[4.5%]'>
            <img src={COntactLogo} alt="contact" className='max-w-[80%] w-full m-auto hidden md:block'/>
            <input type="text" placeholder='Contact: Twitter/Discord/Email'
            className='text-white w-full font-bold placeholder:text-white placeholder:italic placeholder:font-bold
            placeholder:text-[12px] sm:placeholder:text-[14px] md:placeholder:text-[16px] px-3 py-3 sm:px-6 sm:py-3
            md:px-10 md:py-5 rounded-full border border-white/[0.5] outline-none glass-effect' />
            <textarea name="message" id="msg" placeholder="Your Message.." className="sm:h-[270px] h-[200px] glass-effect
            text-white px-3 py-3 sm:px-6 sm:py-3 md:px-10 md:py-5 border border-white/[0.5] mt-3 w-full md:rounded-[36px]
            rounded-[28px] outline-none font-bold placeholder:text-white placeholder:italic resize-none placeholder:font-bold
            placeholder:text-[12px] sm:placeholder:text-[14px] md:placeholder:text-[16px]"></textarea>
            <div className='max-w-[250px] m-auto'>
              <input className='bg-[#49CFFF] w-full md:py-4 py-3 mt-3 outline-none border border-white/[0.2] font-bold 
              md:rounded-[14px] rounded-full text-white cursor-pointer' type="button" name="btn" id="btn" value="Contact Aibo"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}
export default Contact