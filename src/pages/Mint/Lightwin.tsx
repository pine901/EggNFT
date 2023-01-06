import React, { useState, useEffect } from 'react'
import LightwinBg from '../../assets/Lightwin.png'
import lightLogo from '../../assets/Logo-White-new.png'
import AiboSymbols from '../../assets/Aibo Symbols-26.png'
import Loader from '../../components/Loader/Loader'
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core';
import { CONTRACT_ABI, CONTRACT_ADDRESS,} from '../../utils/constants';
import { NotificationManager} from 'react-notifications';
import ColoredLogo from '../../assets/Logo-Colors.png'
import CloseIcon from '../../assets/Close.png'
import Icons from "../../components/Icons";
const Lightwin = () => {
    const { activate, account, connector,library, ...props } = useWeb3React();
   const navigate = useNavigate();
  const [LightLoader, setLightLoader] = useState(true)
  const [goodMintedNftCount, setGoodMintedCount] = useState(0)
  const [showLightModal, setLightModal] = useState(false)
  const [evilMintedNftCount, setEvilMintedCount] = useState(0)
  const [maxLightLimit,setMaxLightLimit] = useState(0)
  const [maxDarkLimit,setMaxDaxLimit] = useState(0)
  const [Count,setCount] = useState(0)
  const [loading, setLoading] = useState(false);
  const getData =async()=>{
    try {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    const whiteListed = await contract.getUserWhiteListed();
      const totalNFT = await contract.getTotalSupply();
      const mintedCount = await contract.getMintedCount();
      const goodMintedCount = await contract.getGoodMintedCount();
      const evilMintedCount = await contract.getEvilMintedCount();
      if(whiteListed==1) 
      {
        const limit = await contract.getOgLimit();
        const myList = await contract.getOgMintedCountList()
        console.log(Number(limit))
        if(Number(limit)>Number(myList)){
        setMaxLightLimit(Number(limit)-Number(myList))
        setMaxDaxLimit(Number(limit)-Number(myList))
        }else{
          setMaxLightLimit(0)
          setMaxDaxLimit(0)
        }
      }else if(whiteListed==2){
        const limit = await contract.getWlLimit();
        const myList = await contract.getWlMintedCountList()
        if(Number(limit)>Number(myList)){
        setMaxLightLimit(Number(limit)-Number(myList))
        setMaxDaxLimit(Number(limit)-Number(myList))
      }else{
          setMaxLightLimit(0)
          setMaxDaxLimit(0)
        }
      }else{
        const limit = await contract.getPlLimit();
        const myList = await contract.getPlMintedCountList()
        if(Number(limit)>Number(myList)){
        setMaxLightLimit(Number(limit)-Number(myList))
        setMaxDaxLimit(Number(limit)-Number(myList))
      }else{
          setMaxLightLimit(0)
          setMaxDaxLimit(0)
        }
      }
      setGoodMintedCount(Number(goodMintedCount))
      setEvilMintedCount(Number(evilMintedCount))
    } catch (error) {
      NotificationManager.error("Your wallet is not whitelisted to mint");
      navigate('/mint')
    }
     
   }
   const openLightModal = async() =>{
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = await provider.getBalance(String(account));
    if(Number(signer)>0)
    {
      setLightModal(true)
    }else{
      NotificationManager.error("Don't have enough ETH to pay gas fees")
    }
   }
 
   const closeLightModal = () =>{
    setLightModal(false)
    setCount(0)
   }

    const handleLightCountInc = () => {
      if(Count<maxLightLimit){
        setCount(c => c + 1)
      }else{
        setCount(0)
      }
    }
    const handleLightCountDec = () => {
      if (Count > 0){
        setCount(c => c - 1)
      }
    }
   const getNftPrice = async()=>{
       const provider = new ethers.providers.Web3Provider(library.provider);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
         const getMintPrice = await contract.getNftMintPrice(Count);
         console.log(getMintPrice,"price")
         return getMintPrice;
     }
     const mintLight = async() =>{
      if(Count>0)
      {
        if(goodMintedNftCount>=4500)
        {
          navigate("/darkwin")
        }else{
            const provider = new ethers.providers.Web3Provider(library.provider);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            let mintPrice = await getNftPrice()
            let myBalance = await provider.getBalance(String(account))
            if(Number(myBalance)>Number(mintPrice)){
              try {
                setLoading(true)
                let transaction = await contract.mint(Count,1, { value: mintPrice });
                await transaction.wait()
                NotificationManager.success("successfully minted")
                setLoading(false)
                getData()
              } catch (error:any) {
                setLoading(false)
                console.log(error.message)
              }
            }
            else{
              NotificationManager.error("You don't have amount in your wallet to mint")
            }
        }
      }
      else{
        NotificationManager.error("input correct amount")
      }
      }
    useEffect(() =>{
     if(library)
     {
       getData()
     }
     else{
       navigate('/mint')
     }
   },[])
  return (
    <>
    <div style={{display: LightLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: LightLoader ? "none" : "block"}}>
    <div className='relative h-screen xl:h-auto'>
        <img src={LightwinBg} onLoad={()=>setLightLoader(false)} alt="Lightwin" className='w-screen h-full object-cover object-[center_center]' />
        <div className='absolute top-0 w-full h-full'>
            <div className="absolute top-[5%] w-full m-auto">
                <div className='sm:max-w-[50%] max-w-[67%] m-auto'>
                    <img src={lightLogo} alt="lightLogo" className='xl:max-w-[72.5%] max-w-[400px] w-full m-auto' />
                </div>
            </div>
            <div className="absolute top-[23%] w-full m-auto">
                <div className='max-w-[50%] m-auto'>
                    <h1 className='font-cornerstone leading-none text-center text-white font-normal text-4xl -ml-[5%] hidden sm:block'>{goodMintedNftCount}/4500</h1>
                </div>
            </div>
            <div className="absolute top-[77%] flex items-center justify-center flex-col w-full">
                <button onClick={() => openLightModal()} className='font-cornerstone leading-none sm:text-[28px] text-[24px] -ml-[5%] glass-effect
                flex items-center sm:pl-[3.5rem] pl-[3rem] sm:pr-[3.5rem] pr-[3rem] justify-center relative pt-[1.3rem] pb-[1rem] sm:rounded-[16px]
                rounded-full text-center text-white'>
                    mint now
                    <span className='absolute right-[1rem]'>
                        <img src={AiboSymbols} alt="AiboSymbols" className='h-[40px] w-[30px]' />
                    </span>
                </button>
                <h1 className='font-cornerstone leading-none text-center text-white font-normal text-2xl -ml-[5%] md:mt-[5%] mt-[3%] block sm:hidden'>{goodMintedNftCount}/4500</h1>
            </div>
        </div>
    </div>
    </div>
    {showLightModal && (
    <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[400px] m-auto sm:rounded-[36px] rounded-[65px] pt-12 pb-10">
          <div className="max-w-[68%] h-[100px] m-auto">
            <img src={ColoredLogo} alt="ColoredLogo"/>
          </div>
          <p className='font-bold text-[17px] italic text-center mt-3 hidden sm:block'>On to The Path of Light..</p>
          <p className='font-normal text-[16px] text-center mt-3 block sm:hidden'>"Our future lies in your choice..."</p>
          <div className="relative flex item-center justify-center mt-12">
            <button onClick={handleLightCountDec} className='font-cornerstone leading-none text-[22px] text-[#1CCDFF] block mr-5'>-</button>
            <input type="text" value={Count} className='font-cornerstone text-[17px] text-center text-[#1CCDFF] block outline-none 
            border border-[#1CCDFF] w-[50px] py-2 px-1 rounded-[12px]'/>
            <button onClick={handleLightCountInc} className='font-cornerstone leading-none text-[22px] text-[#1CCDFF] block ml-4'>+</button>
          </div>
          <p className='text-center text-[#1CCDFF] text-[12px] -ml-[4px] mb-12'>(max-{maxLightLimit})</p>
          {!loading ? <button onClick={mintLight} className='font-cornerstone leading-none bg-[#1CCDFF] w-full block max-w-[200px] pt-[1.3rem] pb-[1rem] text-center text-white sm:text-[24px] text-[20px] py-4 sm:rounded-[14px] rounded-full m-auto' style={{marginBottom:"10px"}}>Mint Now</button>:<Icons size={70} />}
          <p className='font-normal text-[16px] text-center mt-5 block sm:hidden'>P.S: Mint from desktop to achieve <br /> a better experience.</p>
          <div className="absolute right-[30px] top-[28px] cursor-pointer">
            <img src={CloseIcon} alt="close" height={17} width={17} onClick={() => closeLightModal()}  />
          </div>
        </div>
      </div>
    </div>
    )}  
    </>
  )
}

export default Lightwin