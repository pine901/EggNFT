import React, { useState, useEffect } from 'react'
import AboutWallpaper from '../../assets/About Page Wallpaper.png'
import AboutWallpaperMob from '../../assets/About page mobile wallpaper.png'
import AboutPageLogo from '../../assets/Logo-Blacked.png'
import JounralLogo from '../../assets/Jounral Button-01.png'
import TwitterLogoRed from '../../assets/Twitter Button Red.png'
import TwitterLogoBlue from '../../assets/Twitter Button Blue.png'
import TwitterLogoBlack from '../../assets/Twitter Button Black.png'
import TwitterLogoPeach from '../../assets/Twitter Button peach.png'
import TwitterLogoGreen from '../../assets/Twitter Button Green.png'
import Footer from '../../components/Global/Footer/Footer'
import Navbar from '../../components/Global/Navbar/Navbar'
import Loader from '../../components/Loader/Loader'


const About = () => {
  const [aboutLoader, setaboutLoader] = useState(true)
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setaboutLoader(false)
  //   }, 1000)
  // })
  // if(aboutLoader){
  //   return(
  //     <Loader/>
  //   )
  // }
  // else{
  return (
    <>
    <div style={{display: aboutLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: aboutLoader ? "none" : "block"}}>
      <div className="relative">
        <Navbar/>
        <img src={AboutWallpaper} onLoad={()=>setaboutLoader(false)} alt="AboutWallpaper"  className='w-screen object-cover object-center md:block hidden'/>
        <img src={AboutWallpaperMob} onLoad={()=>setaboutLoader(false)} alt="AboutWallpaper"  className='w-screen object-cover object-center md:hidden block'/>
        <div className="absolute top-0 w-full h-full">
          <div className="absolute top-[3%] left-[2%] sm:left-[4%] md:top-[7%] lg:max-w-[31%] sm:max-w-[250px] max-w-[175px] flex flex-col items-center justify-center" id="hero">
            <img src={AboutPageLogo} alt="AboutPageLogo" />
            <p className='text-center font-normal lg:max-w-[350px] sm:max-w-[220px] max-w-[150px] lg:text-base text-[12px] sm:text-sm lg:mt-5 ms:mt-3 mt-4'>
              Aibo Adventures is a collection of 7777+ NFTs with 700+ traits, consisting of Aibo and 7 other characters, his friends,
              as well as a mysterious dark force.
            </p>
            <p className='hidden lg:block text-center font-normal lg:max-w-[350px] sm:max-w-[220px] max-w-[150px] lg:text-base text-[12px] sm:text-sm lg:mt-5 ms:mt-3 mt-4'>
              With this, we aim to establish a Brand of Axplorers that follow Aibo's journey into his world of fun-filled fantasy and imagination,
              united by a common passion for Adventure and Design. To support this vision, the team is focused on building both in the Web 2 &amp; 3 spaces.
              With exciting plans set in place for our Axplorers. 
            </p>
            <p className='text-center font-normal lg:max-w-[270px] sm:max-w-[220px] max-w-[150px] lg:text-base text-[12px] sm:text-sm lg:mt-5 ms:mt-3 mt-4'>
              “Together, we dare to dream. Together, we dare to discover.”
            </p>
          </div>
          <div className="absolute md:top-[29.4%] lg:top=[30%] top-[28.8%] left-[23%] sm:left-[28%] sm:top-[29.5%]  md:left-[32%] lg:left-[36%] xl:left-[38%] lg:max-w-[380px] sm:max-w-[320px] max-w-[250px]" id="values">
            <h1 className='lg:text-4xl sm:text-2xl text-xl text-center font-cornerstone'>Our Values</h1>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-5 sm:mt-3 mt-1 hidden lg:block'>
            These values are the heart of what drives the Axplorer within us.
            It allows us to go on any Adventure, big or small, and overcome any obstacles in our path. 
            Our Axplorers had already pledged the oath, now its your turn! Come join us!</p>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-5 sm:mt-3 mt-1 block lg:hidden'>
            These values are the heart of what drives the Axplorer within us. It allows us to go on any Adventure,
            big or small, and overcome any obstacles in our path.</p>
          </div>
          <div className="absolute lg:top-[45.5%] lg:left-[8%] md:left-[5%] md:top-[45%] sm:top-[39%] top-[37.5%] sm:left-[39%] left-[27%] lg:max-w-[265px] sm:max-w-[220px] max-w-[48%]" id="courage">
            <h1 className='lg:text-4xl md:text-2xl text-xl text-center flex md:items-center items-end md:pl-4 pl-7 font-cornerstone'><span><img src={JounralLogo} alt="JounralLogo" className='lg:w-auto w-[40px]' /></span> Courage</h1>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-5 mt-1 pl-2 sm:pl-0'>"Inspiring courage within to chase the <b> adventure of our dreams</b>"</p>
          </div>
          <div className="absolute lg:top-[45.5%] md:top-[45%] top-[47%] md:left-[39%] left-[28%] sm:left-[36%] sm:top-[48%] lg:left-[38%] xl:left-[41%] lg:max-w-[265px] md:max-w-[200px] sm:max-w-[33%] max-w-[45%]" id="dream">
            <h1 className='lg:text-4xl  md:text-2xl text-xl text-center flex md:items-center items-end  pl-5 font-cornerstone'><span><img src={JounralLogo} alt="JounralLogo" className='lg:w-auto w-[40px]' /></span> Dream</h1>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-5 mt-1'>"To create a world where the sky's the limit, a world born from our wildest <b>imagination.</b>"</p>
          </div>
          <div className="absolute lg:top-[45.5%] lg:left-[73%] md:top-[45%] sm:top-[57.8%] top-[56.8%] sm:left-[34%] left-[27%] md:left-[71%] lg:max-w-[265px] md:max-w-[200px] sm:max-w-[35%] max-w-[46%]" id="unity">
            <h1 className='lg:text-4xl md:text-2xl text-xl text-center flex md:items-center items-end pl-6 font-cornerstone'><span><img src={JounralLogo} alt="JounralLogo" className='lg:w-auto w-[40px]' /></span> Unity</h1>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-5 mt-1'>"We build together, as a <b>Circle of Axplorers.</b> Alone we are strong, together we are invincible."</p>
          </div>
          <div className="absolute lg:top-[64%] md:top-[64%] top-[68%] left-[29%] md:left-[6%] lg:left-[10%] lg:max-w-[400px] md:max-w-[300px] max-w-[48%]" id="coreteam">
            <h1 className='lg:text-4xl md:text-2xl text-xl text-center hidden md:block font-cornerstone'>Our Core Team</h1>
            <h1 className='md:text-2xl text-xl text-center block md:hidden font-cornerstone'>core team:</h1>
            <p className='text-center font-normal lg:text-base text-sm lg:mt-0 mt-1 hidden lg:block'>
              "HELLO HUMOS! <br />
              We're the Jesters and the Aibo Guardian Spirits! We're here to assist you on your quest to repair the Dream Machine!
              Please do not hesitate to contact us if you have any questions or contact Aibo directly here! We came from a variety of backgrounds,
              from Finance to Architecture and Design. And are constantly learning and developing. Can't wait to share with you more of our fun-filled
              plans...prepare yourself!"
            </p>
            <p className='text-center font-normal lg:text-base sm:text-sm text-[12px] lg:mt-0 mt-1 block lg:hidden'>
              "HELLO HUMOS! <br />
              We're the Jesters and the Aibo Guardian Spirits! We're here to assist you on your quest to repair the Dream Machine!"
            </p>
          </div>
          <div className="absolute lg:top-[74.5%] md:top-[75%] lg:left-[49%] md:left-[48%] top-[77%] left-[55%]" id="team-member">
            <div className="flex items-center">
              <div className='lg:mr-5 mr-2'>
                <h1 className='lg:text-4xl md:text-2xl text-[1.2rem] leading-[1.1rem] md:leading-[1rem] lg:leading-[2rem] text-center font-cornerstone'>KALE</h1>
                <p className='text-center font-normal lg:text-base sm:text-sm text-[9px]'>Project Lead</p>
              </div>
              <img src={TwitterLogoRed} alt="TwitterLogo" className='lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] w-[25px] h-[25px]' />
            </div>
          </div>
          <div className="absolute lg:top-[76.3%] lg:left-[79.7%] md:top-[76.2%] md:left-[77%] top-[80.5%] left-[13%]" id="team-member">
            <div className="flex items-center">
              <div className='lg:mr-5 mr-2'>
                <h1 className='lg:text-4xl md:text-2xl text-[1.2rem] leading-[1.1rem] md:leading-[1rem] lg:leading-[2rem] text-center font-cornerstone'>waffy</h1>
                <p className='text-center font-normal lg:text-base sm:text-sm text-[9px]'>Community Lead</p>
              </div>
              <img src={TwitterLogoBlue} alt="TwitterLogo" className='lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] w-[25px] h-[25px] md:mt-3 lg:mt-auto' />
            </div>
          </div>
          <div className="absolute lg:top-[85.5%] lg:left-[30%] md:top-[85.5%] md:left-[27%] left-[57%] top-[86%]" id="team-member">
            <div className="flex items-center">
              <div className='lg:mr-5 mr-2'>
                <h1 className='lg:text-4xl text-[1.2rem] leading-[1.1rem] md:leading-[1rem] lg:leading-[2rem] text-center font-cornerstone'>shake</h1>
                <p className='text-center font-normal lg:text-base sm:text-sm text-[9px]'>Marketing Lead</p>
              </div>
              <img src={TwitterLogoBlack} alt="TwitterLogo" className='lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] w-[25px] h-[25px]' />
            </div>
          </div>
          <div className="absolute lg:top-[88.9%] lg:left-[58%] md:top-[88.9%] top-[89.5%] md:left-[55%] left-[15%]" id="team-member">
            <div className="flex items-center">
              <div className='lg:mr-5 mr-2'>
                <h1 className='lg:text-4xl text-[1.2rem] leading-[1.1rem] md:leading-[1rem] lg:leading-[2rem] text-center font-cornerstone'>chen</h1>
                <p className='text-center font-normal lg:text-base sm:text-sm text-[9px]'>Art &amp; Branding</p>
              </div>
              <img src={TwitterLogoPeach} alt="TwitterLogo" className='lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] w-[25px] h-[25px]' />
            </div>
          </div>
          <div className="absolute lg:top-[92%] lg:left-[82.4%] md:top-[91%] top-[94.6%] md:left-[81.4%] left-[61.4%]" id="team-member">
            <div className="flex items-center">
              <div className='lg:mr-5 mr-1'>
                <h1 className='lg:text-4xl text-[1.2rem] leading-[1.5rem] md:leading-[1rem] lg:leading-[2rem] text-center font-cornerstone'>Yogesh</h1>
                <p className='text-center font-normal lg:text-base sm:text-[13px] text-[8px]'>Lead Developer</p>
              </div>
              <img src={TwitterLogoGreen} alt="TwitterLogo" className='lg:h-[50px] lg:w-[50px] md:h-[35px] md:w-[35px] w-[25px] h-[25px] md:mt-6 lg:mt-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[11.5%] md:mt-0">
      <Footer/>
      </div>
    </div>
    </>
  )
}
// }

export default About