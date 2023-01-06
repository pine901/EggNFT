import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";


import RoadmapHeroBg from '../../assets/Roadmap Wallpaper.png'
import WonderWorld from '../../assets/VideoBackground.png'
import circleOne from '../../assets/number-1.png'
import circleTwo from '../../assets/number-2.png'
import circleThree from '../../assets/number-3.png'
import circlefour from '../../assets/number-4.png'
import circlefive from '../../assets/number-5.png'
import circleSix from '../../assets/number-6.png'
import circleSeven from '../../assets/number-7.png'

import CityOne from "../../assets/City-01.png"
import CityTwo from "../../assets/City-02.png"
import CityThree from "../../assets/City-03.png"
import CityFour from "../../assets/City-04.png"
import CityFive from "../../assets/City-05.png"
import CitySix from "../../assets/City-06.png"
import CitySeven from "../../assets/City-07.png"


// Components 
import Footer from '../../components/Global/Footer/Footer'
import Navbar from '../../components/Global/Navbar/Navbar'
import RoadmapModals from '../../components/Roadmap/RoadmapModals'
import Loader from '../../components/Loader/Loader'

const Roadmap = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [showModal5, setShowModal5] = useState(false)
  const [showModal6, setShowModal6] = useState(false)

  const [RoadmapLoader, showRoadmapLoader] = useState(true)

    useEffect(() =>{
        if(showModal || showModal1 || showModal2 || showModal3 || showModal4){
        document.body.style.overflow = 'hidden'
        }
        else{
        document.body.style.overflow = 'auto'
        }
    })

    
  return (
    <>
    <div style={{display: RoadmapLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: RoadmapLoader ? "none" : "block"}}>
    <div className='relative'>
        <Navbar/> 
        <div className='relative'>
            <img src={RoadmapHeroBg} onLoad={()=>showRoadmapLoader(false)} alt="mintBg" className='w-screen object-fit bg-cover' />
            <div className='absolute top-0 w-full h-full hidden md:block'>
                <img src={circleOne} alt="tileone" className='max-w-[8%] absolute top-[62.5%] left-[9%] cursor-pointer' onClick={() => setShowModal(!showModal)} />
                <img src={circleTwo} alt="tiletwo" className='max-w-[8%] absolute top-[21.4%] left-[22.5%] cursor-pointer' onClick={() => setShowModal1(!showModal1)}/>
                <img src={circleThree} alt="tilethree" className='max-w-[8%] absolute top-[18.4%] left-[47.7%] cursor-pointer' onClick={() => setShowModal2(!showModal2)} />
                <img src={circlefour} alt="tilefour" className='max-w-[8%] absolute top-[20%] left-[68.9%] cursor-pointer' onClick={() => setShowModal3(!showModal3)} />
                <img src={circlefive} alt="tilefour" className='max-w-[8%] absolute top-[42.5%] left-[83.2%] cursor-pointer' onClick={() => setShowModal4(!showModal4)} />
                <img src={circleSix} alt="tilefour" className='max-w-[8%] absolute top-[71.1%] left-[71.7%] cursor-pointer' onClick={() => setShowModal5(!showModal5)}/>
                <img src={circleSeven} alt="tilefour" className='max-w-[8%] absolute top-[50%] left-[50%] cursor-pointer' onClick={() => setShowModal6(!showModal6)}/>
            </div>
            <div className='md:hidden block absolute top-0 w-full h-full'>
                <img src={circleOne} alt="tileone" className='max-w-[8%] absolute top-[62.5%] left-[9%] cursor-pointer' />
                <img src={circleTwo} alt="tiletwo" className='max-w-[8%] absolute top-[21.4%] left-[22.5%] cursor-pointer'/>
                <img src={circleThree} alt="tilethree" className='max-w-[8%] absolute top-[18.4%] left-[47.7%] cursor-pointer' />
                <img src={circlefour} alt="tilefour" className='max-w-[8%] absolute top-[20%] left-[68.9%] cursor-pointer' />
                <img src={circlefive} alt="tilefour" className='max-w-[8%] absolute top-[42.5%] left-[83.2%] cursor-pointer' />
                <img src={circleSix} alt="tilefour" className='max-w-[8%] absolute top-[71.1%] left-[71.7%] cursor-pointer'/>
                <img src={circleSeven} alt="tilefour" className='max-w-[8%] absolute top-[50%] left-[50%] cursor-pointer'/>
            </div>
        </div>
        <div className="relative md:hidden block">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px]'>
                            <img src={CityOne} alt="city one" className='w-[180px]' />
                        </div>
                        <h3 className='text-2xl text-[#FF616B] text-center font-normal py-4 font-cornerstone'>chapter 1: Vision</h3>
                        <p className='max-w-[330px] text-[14px] text-center m-auto'>Aibo Adventures aims to become a Galactical character brand that is able to unite people through a shared journey of story-telling and fun-filled experiences, adding a little bit of excitement to the lives of all Axplorers!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px] '>
                            <img src={CityTwo} alt="city one" className='w-[200px]' />
                        </div>
                        <h3 className='text-2xl text-[#98BA00] text-center font-normal py-4 font-cornerstone'>chapter 2: wonder world</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>Aibo has had his story told to the world, but his adventure has just begun! There’s so much more to discover and see. One of the key aims of the team is to grow each character's IP development but the overall Wonder World brand too.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px] '>
                            <img src={CityThree} alt="city one" className='w-[200px]' />
                        </div>
                        <h3 className='text-2xl text-[#40A9FF] text-center font-normal py-4 font-cornerstone'>Chapter 3: community</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>The Circle of Axplorers would not exist would not exist without you Humos, and we cannot understate this importance! To respect this, we will be building with the Axplorers, to guide the direction of Aibo to shape his Adventures! LFG!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px] '>
                            <img src={CityFour} alt="city one" className='w-[200px]' />
                        </div>
                        <h3 className='text-2xl text-[#3DD5B4] text-center font-normal py-4 font-cornerstone'>chapter 4: Merchandize</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>The Circle is renowned through the Galaxy by their amazing outfits! Axplorers will be able to get an exclusive set of uniforms just for themselves. However, we cannot forget our supporters of the Circle, and hence we will be giving others a chance to acquire several other exclusive merch as well!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px]'>
                            <img src={CityFive} alt="city one" className='w-[175px]' />
                        </div>
                        <h3 className='text-2xl text-[#FFB70A] text-center font-normal py-4 font-cornerstone'>chapter 5: cc0</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>AA aims to provide freedom of contention creation while avoiding messy copyright complications. Our goal is to simulate community creativity, gaining brand identity and growth. Thus, the team decided to adopt the CC0 license.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px] '>
                            <img src={CitySix} alt="city one" className='w-[190px]' />
                        </div>
                        <h3 className='text-2xl text-[#FF5F16] text-center font-normal py-4 font-cornerstone'>chapter 6: brand identity</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>We understand as a young art brand, exposure is one of our top priorities. Hence, the next step is to establish our brand identity and to raise awareness. Growing the brand by leveraging our IP concepts is key but we aim to diversify our products in terms of games, software, product endorsement and franchising models.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative pt-10 pb-6">
                        <div className='flex items-center justify-center h-[220px] '>
                            <img src={CitySeven} alt="city one" className='w-[190px]' />
                        </div>
                        <h3 className='text-2xl text-[#8D57D2] text-center font-normal font-cornerstone'>the future</h3>
                        <p className='max-w-[350px] text-[14px] text-center m-auto py-2'>
                            The battle upon the Cursed Mountain is just the start, our adventure has just began! -<i> coming soon</i> 
                        </p>
                        <p className='max-w-[350px] text-[14px] text-center m-auto'>
                            <b> Have something in mind? Share with us, we won't bite (yet): </b>
                        </p>
                        <div className="flex justify-center items-center max-w-[190px] m-auto pt-4">
                            <button className='text-white font-medium text-center rounded-full
                            bg-[#49CFFF] w-[250px] py-4 border border-white/[0.3] outline-none'>Contact Aibo</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="relative sm:-mt-[5.7%]">
            <img src={WonderWorld} alt="wonderworld" className='w-screen object-fit bg-cover'/>
            <div className='absolute flex justify-center h-full w-full top-0 sm:pt-[10%] pt-[8%] text-center'>
                <div className="text-center">
                    <h1 className='sm:text-4xl sm:mb-2 text-[1.3rem] font-normal font-cornerstone'>the wonder world</h1>
                    <p className='text-[12px] sm:text-[16px] md:text-[18px] hidden sm:block'>To inspire through our characters and storytelling, <br /> Aibo Adventures is driven by three core beliefs: </p>
                    <p className='text-[12px] sm:text-[16px] md:text-[18px] sm:hidden block'>Meet the Jesters, the visionaries and the <br /> team behind the Aibo Adventures! </p>
                </div>
            </div>
        </div>
        <Footer/>
        <RoadmapModals  showModal={showModal} setShowModal={setShowModal}
        showModal1={showModal1} setShowModal1={setShowModal1} 
        showModal2={showModal2} setShowModal2={setShowModal2} 
        showModal3={showModal3} setShowModal3={setShowModal3} 
        showModal4={showModal4} setShowModal4={setShowModal4} 
        showModal5={showModal5} setShowModal5={setShowModal5} 
        showModal6={showModal6} setShowModal6={setShowModal6} 
        /> 
    </div>
    </div>
    </>
  )
}

export default Roadmap