import React from 'react'
import FooterImg from "../../../assets/Aibo Footer.png"
import MobFooterImg from "../../../assets/Aibo Footer-bg.png"
import FooterLogo from "../../../assets/Logo-White-new.png"
import Twitter from "../../../assets/tweet.png"
import Discord from "../../../assets/discord.png"
import OpenSea from "../../../assets/opensea_8.0 copy 3.png"

const Footer = () => {
  return (
   <>
    <div className='relative w-full z-[10] sm:-mt-[5%] -mt-[11%] custom-mt-m'>
        <img src={FooterImg} alt="footer" className='w-screen bg-cover object-fill hidden md:block' />
        <img src={MobFooterImg} alt="footer" className='w-screen bg-cover object-fill block md:hidden' />
        <div className="absolute top-0 z-[3] h-full w-full flex justify-center items-center">
            <div className="hidden md:flex justify-center items-center w-full h-full pt-[5.5%] px-[5.5%] max-w-[1400px] m-auto">
                {/* <img src={FooterLogo} alt="footer" className='lg:h-[100px] lg:w-[250px] md:h-[70px] md:w-[180px]'/> */}
                {/* <img src={FooterLogo} alt="footer" className='max-w-[20%]'/> */}
                <img src={FooterLogo} alt="footer" className='lg:h-[100px] lg:w-[250px] md:h-[70px] md:w-[180px]'/>
                <div className='text-center basis-[60%] lg:mt-[1.8rem] md:mt-[1rem]'>
                    <div className='h-[2px] w-full bg-white w-[70%] m-auto'></div>
                    <p className='text-white md:text-[12px] lg:text-[14px] xl:text-[16px] md:mt-4 lg:mt-6'>© 2022 Wonder World | All Rights Reserved | aiboadventuresnft@gmail.com</p>
                </div>
                <ul className='flex'>
                    <li>
                        <span><a href="https://www.twitter.com/AiboAdventures" target="_blank" rel="noreferrer" className='h-[47px] w-[47px] border-2 border-white flex items-center justify-center rounded-full p-[5px] hover:bg-black/[0.3]'><img src={Twitter} alt="twitter" className='h-[35px] w-[35px]'/></a></span>
                    </li>
                    <li className='lg:ml-[1.7rem] md:ml-[1rem]'>
                        <span><a href="http://discord.gg/YGDJa3tmZr" target="_blank" rel="noreferrer" className='h-[47px] w-[47px] border-2 border-white flex items-center justify-center rounded-full p-[5px] hover:bg-black/[0.3]'><img src={Discord} alt="discord" className='h-[30px] w-[30px]'/></a></span>
                    </li>
                    <li className='lg:ml-[1.7rem] md:ml-[1rem]'>
                        <span><a href="/" target="_blank" rel="noreferrer" className='h-[47px] w-[47px] border-2 border-white flex items-center justify-center rounded-full p-[5px] hover:bg-black/[0.3]'><img src={OpenSea} alt="discord" className='h-[35px] w-[50px]'/></a></span>
                    </li>
                </ul>
            </div>
            {/* MOBILE LAYOUT */}
            <div className='md:hidden relative h-full flex justify-center items-center w-full h-full'>
                <div className='h-full flex justify-center flex-col items-center sm:pt-[5rem] pt-[3rem]'>
                    <div className='flex justify-between items-center px-2 w-full pb-2 custom-max-w'>
                        {/* <img src={FooterLogo} alt="footer" className='footer-logo h-[50px] w-[125px]'/> */}
                        {/* <img src={FooterLogo} alt="footer" className='max-w-[45%]'/> */}
                        <img src={FooterLogo} alt="footer" className='footer-logo h-[50px] w-[125px]'/>
                        <ul className='flex'>
                            <li>
                                <span><a href="https://www.twitter.com/AiboAdventures" target="_blank" rel="noreferrer" className='h-[35px] w-[35px] border-2 border-white flex items-center justify-center rounded-full p-[5px]'><img src={Twitter} alt="twitter" className='sm:h-[40px] h-[24px] sm:w-[40px] w-[28px]'/></a></span>
                            </li>
                            <li className='ml-4'>
                                <span><a href="http://discord.gg/YGDJa3tmZr" target="_blank" rel="noreferrer" className='h-[35px] w-[35px] border-2 border-white flex items-center justify-center rounded-full p-[5px]'><img src={Discord} alt="discord" className='sm:h-[40px] h-[22px] sm:w-[40px] w-[22px]'/></a></span>
                            </li>
                            <li className='ml-4'>
                                <span><a href="/" className='h-[35px] w-[35px] border-2 border-white flex items-center justify-center rounded-full p-[5px]'><img src={OpenSea} alt="twitter" className='sm:h-[40px] h-[24px] sm:w-[40px] w-[40px]'/></a></span>
                            </li>
                        </ul>
                    </div>
                    <div className='text-center px-4'>
                        <div className='h-[2px] w-full bg-white'></div>
                        <p className='copyright-text text-white sm:text-[14px] text-[12px] sm:mt-4 mt-2'>© 2022 Wonder World | All Rights Reserved | aiboadventuresnft@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
   </>
  )
}

export default Footer