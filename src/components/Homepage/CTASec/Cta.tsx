import React from 'react'
import CTAImg from "../../../assets/03 Email Page.png"
import MobCTAImg from "../../../assets/03 Email Page-cropped.png"
import ParaImg from "../../../assets/Jounral Button-01.png"

const Cta = () => {
    return(
        <>
        <div className="relative z-[10]">
            <img src={CTAImg} alt="imgsec" className='bg-cover w-screen object-fit -mt-[4%] hidden md:block' />
            <img src={MobCTAImg} alt="imgsec" className='bg-cover w-screen -mt-[4.3%] md:hidden block'/>
            <div className='absolute w-full flex items-center h-full justify-center sm:justify-end z-[10] top-0'>
                <div className='ml-[12%] sm:ml-0 sm:mr-[17%] font-bold text-center sm:pt-[8%] md:pt-[16%] lg:pt-[8%] pt-[16%] pr-1'>
                    <h1 className='cta-head text-[16px] sm:text-[22px] lg:text-4xl text-[#FF9120] sm:mb-2 mt-[16px] sm:mt-[0px]  font-cornerstone'>A NEW ADVENTURE AWAITS</h1>
                    <p className='text-[#FF9120] font-normal relative hidden sm:block'>Sign up to unravel some secrets of the universe ... and a</p>
                    <p className='text-[#FF9120] font-normal sm:flex align-items justify-center hidden'>chance to get special gifts from me!
                        <span><img src={ParaImg} alt="para" className="h-[32px] w-[32px] -mt-[3px]"/></span>
                    </p>
                    <div className='relative sm:hidden'>
                        <p className='cta-para sm:text-[14px] text-[12px] text-[#FF9120] relative font-normal'>Sign up to unravel some secrets of the <br /> universe ... and a chance to get special gifts</p>
                        <p className='cta-para sm:text-[14px] text-[12px] text-[#FF9120] flex align-items justify-center font-normal'>
                            from me!
                            <span>
                                <img src={ParaImg} alt="para" className="cta-logo h-[20px] w-[20px]"/>
                            </span>
                        </p>
                    </div>
                    <div className='max-w-[400px] m-auto'>
                        <input className='cta-mail bg-white/[.57] md:mt-8 mt-2 sm:py-3 py-[8px] w-[150px] sm:w-auto px-[12px] sm:text-[16px] text-[12px] sm:px-3 outline-none font-normal placeholder:text-center sm:placeholder:text-[16px] placeholder:text-[12px] placeholder:text-[#FF9120] rounded-full sm:rounded-[18px]' placeholder='Enter Email Address' type="email" name="email" id="email" required/>
                    </div>
                    <div className='max-w-[400px] m-auto'>
                        <input className='cta-button bg-[#FFBD1F] md:mt-8 mt-3 outline-none font-bold sm:py-4 py-2 px-8 sm:px-11 rounded-full sm:rounded-[18px] text-white cursor-pointer text-[12px] sm:text-[16px]' type="button" name="btn" id="btn" value="Join The Circle"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cta