import React from 'react'
import CloseIcon from "../../assets/Close.png"
import CityOne from "../../assets/City-01.png"
import CityTwo from "../../assets/City-02.png"
import CityThree from "../../assets/City-03.png"
import CityFour from "../../assets/City-04.png"
import CityFive from "../../assets/City-05.png"
import CitySix from "../../assets/City-06.png"
import Character1 from "../../assets/character-1.png"
import Character2 from "../../assets/character-2.png"
import Character3 from "../../assets/character-3.png"
import Character4 from "../../assets/character-4.png"
import Character5 from "../../assets/character-5.png"
import Character6 from "../../assets/character-6.png"
import Character7 from "../../assets/character-7.png"

const RoadmapModals = ({showModal, setShowModal, showModal1, setShowModal1, showModal2, setShowModal2, showModal3, setShowModal3, showModal4, setShowModal4, showModal5, setShowModal5, showModal6, setShowModal6} : any) => {
  return (
    <div className='hidden md:block'>
        {/* ROADMAP MODAL SCREENs  */}
        {/* MODAL 1  */}
        {showModal && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] md:min-h-[350px] lg:min-h-[370px]">
                <div className="lg:w-[280px] w-[210px] md:h-auto flex items-center">
                    <img src={CityOne} alt="picone" loading="lazy" className='lg:max-w-[80%] max-w-[87%] mt-4 lg:ml-3'/>
                </div>
                <div className="pt-7">
                    <h1 className="md:text-[32px] text-[20px] text-[#FF616B] font-bold md:mb-2 mb-2 hidden md:block">Chapter 1: Vision &amp; Values</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[360px] mt-4'>Aibo Adventures aims to become a Galactical character brand that is able to unite people through a shared journey of story-telling and fun-filled experiences, adding a little bit of excitement to the lives of all Axplorers! We believe the NFT system is well equipped for new business ventures especially for original art IP brands, and so here we are!</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal(!showModal)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character1} alt="Character1" className='absolute bottom-0 right-[43px] lg:h-[182px] h-[160px] lg:w-[169px] w-[130px]' />
                </div>
            </div>
        </div>
        )}


        {/* MODAL 2  */}
        {showModal1 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] md:min-h-[350px] lg:min-h-[370px]">
                <div className="lg:w-[280px] w-[210px] md:h-auto flex items-center">
                    <img src={CityTwo} alt="picone" loading="lazy" className='max-w-[90%] mt-5 lg:ml-3'/>
                </div>
                <div className="pt-7 lg:ml-2">
                    <h1 className="md:text-[32px] text-[20px] text-[#98BA00] font-bold md:mb-2 mb-2 hidden md:block">Chapter 2: Wonder World Series</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[360px] mt-4'>Aibo has had his story told to the world, but his <br /> adventure has just begun! There’s so much more <br />
                    to discover and see, and we can't wait to share it <br /> with you guys in time to come. One of the key <br />
                    aims of the team is to grow not only on each <br /> character's IP development but the overall <br /> 
                    Wonder World brand too. Something is <br /> lurking in the shadows since the start...</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal1(!showModal1)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character2} alt="Character1" className='absolute bottom-0 lg:right-[50px] right-[45px] lg:h-[190px] h-[170px] lg:w-[230px] w-[179px]' />
                </div>
            </div>
        </div>
        )}

        {/* MODAL 3  */}   
        {showModal2 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] lg:min-h-[370px] md:min-h-[350px]">
                <div className="lg:w-[280px] w-[230px] md:h-auto flex items-center">
                    <img src={CityThree} alt="picone" loading="lazy" className='max-w-[90%] mt-5'/>
                </div>
                <div className="pt-7">
                    <h1 className="md:text-[32px] text-[20px] text-[#40A9FF] font-bold md:mb-2 mb-2 hidden md:block">Chapter 3: Community</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[340px] mt-4'>The Circle of Axplorers would not exist would not exist without you Humos, and we cannot understate this importance! To respect this, we will be building with the Axplorers, to guide the direction of Aibo to shape his Adventures! Who knows, we may support some of your Adventures as well. And they may very well end up in the Wonder World...</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal2(!showModal2)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character3} alt="Character1" className='absolute bottom-0 right-[30px] lg:h-[176px] h-[150px] lg:w-[186px] w-[143px]' />
                </div>
            </div>
        </div>
        )}   
        {/* MODAL 4  */}   
        {showModal3 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] md:min-h-[370px]">
                <div className="lg:w-[280px] w-[210px] md:h-auto flex items-center">
                    <img src={CityFour} alt="picone" loading="lazy" className='lg:max-w-[90%] max-w-[96%] mt-5'/>
                </div>
                <div className="pt-7">
                    <h1 className="md:text-[32px] text-[20px] text-[#3DD5B4] font-bold md:mb-2 mb-2 hidden md:block">Chapter 4: Merch &amp; Branding</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[350px] mt-4'>The Circle is renowned through the Galaxy by their amazing outfits! Axplorers will be able to get an exclusive set of uniforms just for themselves. However, we cannot forget our supporters of the Circle, and hence we will be giving others a chance to acquire several other merch as well! We see merchandizing as not only a tangible reward but more of a strategic collaborations with established brands.</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal3(!showModal3)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character4} alt="Character1" className='absolute bottom-0 right-[30px] lg:h-[241px] h-[228px] lg:w-[170px] w-[151px]' />
                </div>
            </div>
        </div>
        )}   
        {/* MODAL 5  */}   
        {showModal4 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] lg:min-h-[370px] md:min-h-[350px]">
                <div className="lg:w-[280px] w-[210px] md:h-auto flex items-center">
                    <img src={CityFive} alt="picone" loading="lazy" className='lg:max-w-[90%] md:max-w-[93%] mt-5'/>
                </div>
                <div className="pt-7">
                    <h1 className="md:text-[32px] text-[20px] text-[#FFB70A] font-bold md:mb-2 mb-2 hidden md:block">Chapter 5: Creative Commons</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[350px] mt-4'>AA aims to provide freedom of contention creation while avoiding messy copyright complications. Our goal is to simulate community creativity, gaining brand identity and growth. Thus, the team decided to adopt the CC0. This allows content creators to create derivative works and profit from NFTs without fear of legal repercussions, maximizing the liberation of creation.</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal4(!showModal4)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character5} alt="Character1" className='absolute bottom-0 right-[30px] lg:h-[241px] h-[220px] lg:w-[170px] w-[150px]' />
                </div>
            </div>
        </div>
        )}   
        {/* MODAL 6  */}   
        {showModal5 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] lg:min-h-[370px] md:min-h-[350px]">
                <div className="lg:w-[280px] w-[210px] md:h-auto flex items-center">
                    <img src={CitySix} alt="picone" loading="lazy" className='max-w-[90%] mt-5'/>
                </div>
                <div className="pt-7">
                    <h1 className="md:text-[32px] text-[20px] text-[#FF5F16] font-bold md:mb-2 mb-2 hidden md:block">Chapter 6: Brand Identity</h1>
                    <p className='font-normal text-[14px] md:text-base max-w-[350px] mt-4'>We understand as a young art brand, exposure is one of our top priorities. Hence, the next step is to establish our brand identity and to raise awareness. Growing the brand by leveraging our IP concepts is key but we aim to diversify our products in terms of games, software, product endorsement and franchising models. These come hand in hand with our current plans.</p>
                </div>
                <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal5(!showModal5)}>
                    <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={Character6} alt="Character1" className='absolute bottom-0 right-[50px] lg:h-[200px] h-[185px] lg:w-[170px] w-[150px]' />
                </div>
            </div>
        </div>
        )} 
        {/* MODAL 7  */}   
        {showModal6 && (
        <div className="fixed top-0 w-full z-[100]">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
                <div className="relative bg-white w-full lg:max-w-[880px] max-w-[780px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] lg:min-h-[370px] md:min-h-[350px]">
                    <div className="pl-10 py-4">
                        <h1 className="md:text-[32px] text-[20px] text-[#49CFFF] font-bold md:mb-2 mb-2 hidden md:block">Phase 7: Future</h1>
                        <p className='font-normal mb-5 text-[14px] md:text-base hidden md:block max-w-[500px]'>
                            The battle upon the Cursed Mountain is just the beginning, we heard a sound of a crack in the distance ... - <i> coming soon</i>
                        </p>
                        <p className='font-bold text-[14px] md:text-base hidden md:block'>Have something in mind? Share with us, we won't bite:</p>
                        <div className="flex justify-end items-center max-w-[410px] mt-5 pt-5">
                            <button className='text-white font-medium text-center
                            bg-[#49CFFF] w-[250px] py-5 rounded-2xl border border-white/[0.3] outline-none'>Contact Aibo</button>
                        </div>
                    </div>
                    <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal6(!showModal6)}>
                        <img src={CloseIcon} alt="close" height={20} width={20} />
                    </div>
                    <img src={Character7} alt="Character1" className='absolute bottom-0 right-[30px] h-[200px] w-[170px]' />
                </div>
            </div>
        </div>
        )} 
    </div>
  )
}

export default RoadmapModals