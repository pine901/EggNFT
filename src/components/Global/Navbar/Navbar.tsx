import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/logo.png";
import Twitter from "../../../assets/tweet.png";
import Discord from "../../../assets/discord.png";
import Headphone from "../../../assets/headphone.png";
import AudioFile from "../../../assets/audio-new.mpeg";
import MuteHeadphone from "../../../assets/Music Pause.png";
import Lamp from "../../../assets/Lighted Lamp Menu Button.png";
import MenuPageBackground from "../../../assets/Menu Page Background.png";
import MenuIconHome from "../../../assets/menu icons-home.png";
import MenuIconAbout from "../../../assets/menu icons-about.png";
import MenuIconWhitepaper from "../../../assets/menu icons-whitepaper.png";
import MenuIconWorld from "../../../assets/menu icons-world.png";
import MenuIconFinal from "../../../assets/menu icons-final.png";
import MenuIconResource from "../../../assets/menu icons-resource.png";
import MenuIconContact from "../../../assets/menu icons-contact.png";

// const useAudio = (url:string) => {
//   const audio = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio(url) : undefined);
//   const [playing, setPlaying] = useState(true);

//   const toggle = () => setPlaying(!playing);

//    useEffect(() => {
//     playing ? audio.current?.play() : audio.current?.pause();
//   }, [playing]);

//   useEffect(() => {
//     audio.current?.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.current?.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle] as const;
// };


const Navbar = () => {
  // const [playing, toggle] = useAudio(AudioFile);

  const audioRef = useRef<any>(null)
  const [isPlay, setisPlay] = useState(false)
  const [showMenus, setshowMenus] = useState(false)
  
  const handleAudioPlay = (e:any) => {
    e.preventDefault()
    if(isPlay){
      audioRef.current.pause()
    }
    else{
      audioRef.current.play()
    }
    setisPlay(!isPlay)
  }
  
  const handleShowMenus = (e:any) => {
    e.preventDefault()
    setshowMenus(!showMenus)
  }
  
  useEffect(() =>{
    if(showMenus){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
  })
  
  return (
    <nav>
      <div className='fixed z-[50] top-0 right-0'>
        <div className="flex items-center justify-end md:pr-4 pr-1">
          <img src={Logo} alt="sitename" className='md:h-[119px] md:w-[108px] h-[60px] w-[70]' />
          <button className="border-solid md:border-4 border-2 border-white text-white md:px-5 px-3 md:py-2 py-1 rounded-full md:text-[22px] text-[16px] font-bold hover:bg-black/[0.1]">Get Access</button>
        </div>
        <div className="flex items-center justify-end md:pr-4">
          <ul>
            <li className='mb-4'><a href="https://www.twitter.com/AiboAdventures" target="_blank" rel="noreferrer" className='h-[50px] w-[50px] border-2 border-white flex items-center justify-center rounded-full p-[5px] hover:bg-black/[0.3]'><img src={Twitter} alt="Twitter" height={48} width={48}/></a></li>
            <li className='mb-4'><a href="http://discord.gg/YGDJa3tmZr" target="_blank" rel="noreferrer" className='h-[50px] w-[50px] border-2 border-white flex items-center justify-center rounded-full p-[5px] hover:bg-black/[0.3]'><img src={Discord} alt="Discord"  height={45} width={45}/></a></li>
            {
              !isPlay ? 
              <li><a href="/" onClick={handleAudioPlay}><img src={MuteHeadphone} alt="Headphone" height={50} width={50}/></a></li>
              : 
              <li><a href="/" onClick={handleAudioPlay} className={`h-[50px] w-[50px] border-2 border-white flex items-center justify-center rounded-full p-[5px]`}><img src={Headphone} alt="Headphone" height={44} width={44}/></a></li>
            }
            <li className='mt-3 relative right-[5px]'><a onClick={handleShowMenus} href="/" className='h-[60px] w-[60px] flex items-center justify-center p-[5px]'><img src={Lamp} alt="Discord"  height={50} width={50}/></a></li>
            <li>
              <audio ref={audioRef} loop>
                <source src={AudioFile} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </li>
            {/* <li><button onClick={toggle}>{playing ? "Pause" : "Play"}</button></li> */}
          </ul>
        </div>

        {/* Menus  */}
        {showMenus && (
        <div onClick={handleShowMenus} className="fixed top-0 left-0 w-full h-full bg-[#5A5858]/[0.6] overflow-scroll overflow-x-hidden transition">
          <div className="flex justify-end items-end translate-x-[0.7%]">
            <div className="relative md:max-w-[400px] lg:max-w-[400px] sm:max-w-[400px] max-w-[100%]">
              <img src={MenuPageBackground} alt="MenuPageBackground" className='h-auto object-cover object-center' />
              <div onClick={handleShowMenus} className="lg:w-[9%] w-[9.5%] h-[5%] w-full rounded-[100%] absolute top-[8.2%] cursor-pointer lg:left-[74%] left-[74%] z-[1]"></div>
              <div className="absolute top-0 h-full w-full flex items-center justify-center">
                <ul className='md:h-[70%] sm:h-[70%] h-[70%] flex flex-col items-center w-full justify-between text-center'>
                  <li className='relative'>
                    <Link to="/" className='text-[#FF9120] text-center text-3xl font-cornerstone'>HOME</Link>
                    <img src={MenuIconHome} alt="MenuIconHome" className='h-[44px] w-[33px] absolute top-[-42%] left-[-54%]' />
                  </li>
                  <li className='relative'>
                    <Link to="/about" className='text-[#FF9120] text-center text-3xl font-cornerstone'>ABOUT</Link>
                    <img src={MenuIconAbout} alt="MenuIconHome" className='h-[54px]  w-[35px]  absolute top-[-20px] right-[-40%]' />
                  </li>
                  <li className='relative'>
                    <Link to="/roadmap" className='text-[#FF9120] text-center text-3xl relative z-[1] font-cornerstone'>OUR  WORLD</Link>
                    <img src={MenuIconWorld} alt="MenuIconHome" className='h-[44px] w-[45px] absolute top-[-28px] left-[21%]' />
                  </li>
                  <li className='relative'>
                    <a href="/" className='text-[#FFFFFF] text-center text-3xl font-cornerstone'>WHITE-PAPER</a>
                    <img src={MenuIconWhitepaper} alt="MenuIconHome" className='h-[32px] w-[32px] absolute top-[-29px] right-0' />
                  </li>
                  <li className='relative'>
                    <Link to="/mint" className='text-[#FFFFFF] text-center text-3xl font-cornerstone'>FINAL BATTLE</Link>
                    <img src={MenuIconFinal} alt="MenuIconHome" className='h-[40px] w-[29px] absolute top-[-25px] left-[33%]' />
                  </li>
                  <li className='relative'>
                    <a href="/" className='text-[#FFFFFF] text-center text-3xl font-cornerstone'>RESOURCES</a>
                    <img src={MenuIconResource} alt="MenuIconHome" className='h-[42px] w-[35px] absolute top-[-12px] left-[-27%]' />
                  </li>
                  <li className='relative'>
                    <Link to="/contact"  className='text-[#FFFFFF] text-center text-3xl font-cornerstone'>CONTACT</Link>
                    <img src={MenuIconContact} alt="MenuIconHome" className='h-[40px] w-[33px] absolute top-[-10px] right-[-29%]' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        )}
        {/* End Menus  */}
      </div>
    </nav>
  )
}

export default Navbar