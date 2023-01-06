import React, { useEffect, useState } from "react";

import Cta from "../../components/Homepage/CTASec/Cta";
import Hero from "../../components/Homepage/Hero/Hero";
import ImgSec from "../../components/Homepage/ImgSection/ImgSec";
import Footer from "../../components/Global/Footer/Footer";
import PicOne from "../../assets/Journal Pop Up-01.png";
import PicTwo from "../../assets/Journal Pop Up-02.png";
import PicThree from "../../assets/Journal Pop Up-03.png";
import PicFour from "../../assets/Journal Pop Up-04.png";
import PicFive from "../../assets/Journal Pop Up-05.png";
import CloseIcon from "../../assets/Close.png";
import Loader from '../../components/Loader/Loader'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [HomeLoader, setHomeLoader] = useState(true)

  useEffect(() =>{
    if(showModal || showModal1 || showModal2 || showModal3 || showModal4){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
  })

  useEffect(()=>{
    setTimeout(()=>{
      setHomeLoader(false)
    }, 3000)
  })
  if(HomeLoader){
    return(
      <Loader/>
    )
  }
  else{
  return (
    <>
      <Hero/>
      <ImgSec showModal={showModal} setShowModal={setShowModal}
        showModal1={showModal1} setShowModal1={setShowModal1} 
        showModal2={showModal2} setShowModal2={setShowModal2} 
        showModal3={showModal3} setShowModal3={setShowModal3} 
        showModal4={showModal4} setShowModal4={setShowModal4} 
      />
      <Cta/>
      <Footer/>
    {/* Modal 1 */}
    {showModal && (
    <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[980px] m-auto md:flex px-4 py-4 rounded-[50px] min-h-[60vh] md:min-h-min">
          <div className="md:max-w-[300px] md:m-0 max-w-[180px] m-auto md:w-[400px]">
            <img src={PicOne} alt="picone" loading="lazy"/>
          </div>
          <div className="md:pt-8 ml-5">
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone hidden md:block">#01 Daring Crash Land</h1>
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone md:hidden block text-center">#01 Destiny</h1>
            <p className="md:mb-[32px] mb-[16px] font-medium text-[14px] md:text-base hidden md:block">May Day May Day!!!</p>
            <p className="md:mb-[32px] mb-[16px] font-medium text-[14px] md:text-base md:hidden block">MAY DAY!!! Its HIM! Ooo Noo this is really bad!</p>
            <p className="max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">I’ve been hit by HIM! Ooo Nooo this is really bad. The main parts of the Dream Machine have been knocked off and everything's on fire!</p>
            <p className="max-w-[500px] font-medium text-[14px] md:text-base md:hidden block">The Dream Machine is falling apart …trying to control … too much fire  … can’t focus … losing consciousness … need to slow do … hel … meeee</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Trying to control … too much fire  … can’t focus … losing consciousness … need to slow do … Hel … meeee</p>
            <div className="flex items-center justify-center md:justify-end max-w-[600px] w-full md:mt-[32px] mt-[8px]">
          </div>
          </div>
          <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal(!showModal)}>
            <img src={CloseIcon} alt="close" height={25} width={25} />
          </div>
        </div>
      </div>
    </div>
    )}
    {/* Modal 2 */}
    {showModal1 && (
     <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[980px] m-auto md:flex p-4 rounded-[50px] min-h-[60vh] md:min-h-min">
          <div className="md:max-w-[300px] md:m-0 max-w-[180px] m-auto md:w-[400px]">
            <img src={PicTwo} alt="picone" loading="lazy"/>
          </div>
          <div className="md:pt-8 ml-5">
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone hidden md:block">#02 Reality Unfolds </h1>
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone md:hidden block text-center">#02 Recovery</h1>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Ughhh everything's spinning … need to go find the parts to fix the Dream Machine … but first, getting some shut eye won't hurt …</p>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base md:hidden block">Owww oww owieee everything hurts! Where am I? </p>
            <p className="max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Wait, who is that staring at me? O MY YOU’RE A HUMO! I’ve read so much about you in my class! Gosh you people are tall … nowhere near as adorable as i am though HAHAH</p>
            <p className="max-w-[500px] font-medium text-[14px] md:text-base md:hidden block">Wait, who is that staring at me? O MY YOU’RE A HUMO! Gosh you people are tall. Where am I anyways? Can you show me around!</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Where am I anyways? Can you show me around?</p>
            <div className="flex items-center justify-center md:justify-end max-w-[600px] w-full md:mt-[32px] mt-[8px]">
          </div>
          </div>
          <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal1(!showModal1)}>
            <img src={CloseIcon} alt="close" height={25} width={25} />
          </div>
        </div>
      </div>
    </div>
    )}
    {/* Modal 3 */}
    {showModal2 && (
     <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[980px] m-auto md:flex p-4 rounded-[50px] min-h-[60vh] md:min-h-min">
          <div className="md:max-w-[300px] md:m-0 max-w-[180px] m-auto md:w-[400px]">
            <img src={PicThree} alt="picone" loading="lazy"/>
          </div>
          <div className="md:pt-8 ml-5">
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone hidden md:block">#03 Everything is Different</h1>
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone md:hidden block text-center">#03 Experience</h1>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Thanks Humo so much for welcoming me into this new world! Everything here is so bright and wonderful … Kinda reminds me of home. The people here are amazing as well! It feels like everyone is already my friend though I just met them!</p>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base block md:hidden">Thanks Humo so much for welcoming me into this new world! Everything here is so bright and wonderful … Kinda reminds me of home. The people here are amazing as well! It feels like everyone is already my friend though I just met them!</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">O and THE FOOD! Bless the food y'all have! Can’t wait to see what lies ahead and meet even more Humos on this adventure!</p>
            <div className="flex items-center justify-center md:justify-end max-w-[600px] w-full md:mt-[32px] mt-[8px]">
          </div>
          </div>
          <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal2(!showModal2)}>
            <img src={CloseIcon} alt="close" height={25} width={25} />
          </div>
        </div>
      </div>
    </div>
    )}
    {/* Modal 4 */}
    {showModal3 && (
    <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[980px] m-auto md:flex p-4 rounded-[50px] min-h-[60vh] md:min-h-min">
          <div className="md:max-w-[300px] md:m-0 max-w-[180px] m-auto md:w-[400px]">
            <img src={PicFour} alt="picone" loading="lazy"/>
          </div>
          <div className="md:pt-8 ml-5">
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone hidden md:block">#04  A Dreaded Foe</h1>
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone block md:hidden text-center">#04 Adversity</h1>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">This is badddd! I didn't expect HIM of all people to land here too! He is the reason my ship crashed ...</p>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base md:hidden">This is badddd! I didn't expect HIM of all people to land here too! Chumpo is the reason all this is happening and if we don’t stop him … our problems will only get worse.</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">Chumpo was the pariah of our people, an entity evolved from being constantly filled with anger and hatred, without any outlet to let it out. Due to this darkness in him, it has created a void within, preventing him from experiencing the pleasures and happiness of Dreams, the driving force behind our people.</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base md:hidden">He must be stopped at all cost...</p>
            <div className="flex items-center justify-center md:justify-end max-w-[600px] w-full md:mt-[32px] mt-[8px]">
          </div>
          </div>
          <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer"  onClick={()=>setShowModal3(!showModal3)}>
            <img src={CloseIcon} alt="close" height={25} width={25} />
          </div>
        </div>
      </div>
    </div>
    )}
    {/* Modal 5 */}
    {showModal4 && (
    <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[980px] m-auto md:flex p-4 rounded-[50px] min-h-[60vh] md:min-h-min">
          <div className="md:max-w-[300px] md:m-0 max-w-[180px] m-auto md:w-[400px]">
            <img src={PicFive} alt="picone" loading="lazy"/>
          </div>
          <div className="md:pt-8 ml-5">
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone hidden md:block">#05 Make Your Adventure</h1>
            <h1 className="md:text-[32px] text-[20px] text-[#FF9120] font-bold md:mb-4 mb-2 font-cornerstone md:hidden block text-center">#05 Machine</h1>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">This my friend. THIS is what gives my people dreams. Built by the founders of my civilization millennia ago, this machine is what enables not just my world but the WHOLE universe to dream as well! It is used to go to different worlds to Axplore and collect all the different experiences to broadcast it all over the universe!</p>
            <p className="md:mb-[32px] mb-[16px] max-w-[500px] font-medium text-[14px] md:text-base md:hidden block">This my friend. THIS is what gives my people dreams, The Dream Machine. This is what the Circle of Axplorers were created for. Now, it is my duty to fix it, to save dreams across the Universe.</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base md:hidden block">There's no time to lose!</p>
            <p className="md:mt-[32px] mt-[16px] max-w-[500px] font-medium text-[14px] md:text-base hidden md:block">There's no time to lose! Get you stuff and we are OFF ON AN ADVENTURE!</p>
            <div className="flex items-center justify-center md:justify-end max-w-[600px] w-full md:mt-[32px] mt-[8px]">
          </div>
          </div>
          <div className="absolute md:right-[60px] right-[30px] top-[35px] cursor-pointer" onClick={()=>setShowModal4(!showModal4)}>
            <img src={CloseIcon} alt="close" height={25} width={25} />
          </div>
        </div>
      </div>
    </div>
    )} 
    </>
  );
}
  }

export default Home;
