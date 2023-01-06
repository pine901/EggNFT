import React, { useState, useEffect,CSSProperties  } from 'react'
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core';
import mintBg from '../../assets/mint-background.jpeg'
import MintItemsLight from '../../assets/Mint Items-02.png'
import MintItemsDark from '../../assets/Mint Items-03.png'
import MintItems from '../../assets/Mint Items-04-cropped.png'
import MintItemsMob from '../../assets/Mint Items-04-cropped-mob.png'
import LightLogo from '../../assets/Light Icon.png'
import DarkLogo from '../../assets/Dark Icon.png'
import CloseIcon from '../../assets/Close.png'
import ColoredLogo from '../../assets/Logo-Colors.png'
import PurpleLogo from '../../assets/Logo-Blacked.png'
import Loader from '../../components/Loader/Loader'
import { CONTRACT_ABI, CONTRACT_ADDRESS,} from '../../utils/constants';
import { NotificationManager} from 'react-notifications';
import Icons from "../../components/Icons";

const Mint = () => {
  const navigate = useNavigate();
  const { activate, account, connector,library, ...props } = useWeb3React();
   const [showLightModal, setLightModal] = useState(false)
   const [showDarkModal, setDarkModal] = useState(false)
   const [showDarkLoader, setshowDarkLoader] = useState(true)
   const [totalSupply, setTotalSupply] = useState(0)
   const [mintedNftCount, setMintedCount] = useState(0)
   const [goodMintedNftCount, setGoodMintedCount] = useState(0)
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
      setTotalSupply(Number(totalNFT))
      setMintedCount(Number(mintedCount))
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
   const openDarkModal = async() =>{
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = await provider.getBalance(String(account));
    if(Number(signer)>0)
    {
      setDarkModal(true)
    }else{
      NotificationManager.error("Don't have enough ETH to pay gas fees")
    }
  }
   const closeLightModal = () =>{
    setLightModal(false)
    setCount(0)
   }
   const closeDarkModal = () =>{
    setDarkModal(false)
    setCount(0)
   }
    const handleLightCountInc = () => {
      if(Count<maxLightLimit){
        setCount(c => c + 1)
      }else{
        setCount(0)
      }
    }
    const handleDarkCountInc = () => {
      if(Count<maxDarkLimit){
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
    const handleDarkCountDec = () => {
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
    const mintDark = async() =>{
      if(Count>0)
      {
        if(evilMintedNftCount>=4500)
        {
          navigate("/lightwin")
        }else{
          const provider = new ethers.providers.Web3Provider(library.provider);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            let mintPrice = await getNftPrice()
            let myBalance = await provider.getBalance(String(account))
            if(Number(myBalance)>Number(mintPrice)){
            try {
              setLoading(true)
              let transaction = await contract.mint(Count,2, { value:mintPrice });
              await transaction.wait()
              NotificationManager.success("successfully minted")
              getData()
              setLoading(false)
            } catch (error:any) {
              setLoading(false)
              console.log(error.message)
            }
          }else{
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
    <div style={{display: showDarkLoader ? "block" : "none"}}>
       <Loader/>
    </div>
    <div style={{display: showDarkLoader ? "none" : "block"}}>
    <div className='relative h-screen xl:h-auto'>
      <img src={mintBg} onLoad={()=>setshowDarkLoader(false)} alt="Mint" className='w-screen h-full object-cover object-[center_center]' />
      <div className='absolute top-0 w-full h-full'>
        <div className="absolute top-[8%] md:top-[30%] w-full m-auto">
            <p className='text-white text-normal md:text-4xl text-center font-cornerstone'>total:</p>
            <p className='text-white text-normal md:text-4xl text-center font-cornerstone'>{mintedNftCount}/{totalSupply}</p>
        </div>
        <div className="md:flex hidden absolute top-[62.5%] w-full justify-around">
          <div className="relative ml-[1%] max-w-[30%] block" onClick={() =>openLightModal()}>
            <img src={MintItemsLight} alt="lightmint" className='max-w-[75%]' />
            <p className='text-white absolute max-w-[75%] flex items-center justify-center cursor-pointer
            text-[#32A2C9] lg:text-[20px] text-[14px] top-0 w-full -mt-1 h-full font-cornerstone'>be enlightened</p>
          </div>
          <div className="relative max-w-[30%] block" onClick={() => openDarkModal()}>
            <img src={MintItemsDark} alt="lightmint" className='max-w-[75%]' />
            <p className='text-white absolute max-w-[75%] ml-4 flex items-center justify-center cursor-pointer
            text-[#39006C] lg:text-[20px] text-[14px] top-0 w-full h-full font-cornerstone'>be corrupted</p>
          </div>
        </div>
        <div className="md:flex hidden absolute bottom-0 w-full">
          <div className="relative max-w-[94%] m-auto">
            <img src={MintItems} alt="lightmint" />
            <img src={LightLogo} alt="lightlogo" className='absolute top-[42%] w-[5%] left-[5%]' />
            <img src={DarkLogo} alt="lightlogo" className='absolute top-[42%] w-[5%] right-[6%]' />
            <p className='text-[#32A2C9] lg:text-[20px] text-[14px] absolute top-[38.5%] left-[25%] font-cornerstone'>{goodMintedNftCount}/4500</p>
            <p className='text-[#39006C] lg:text-[20px] text-[14px] absolute top-[38.5%] right-[25%] font-cornerstone'>{evilMintedNftCount}/4500</p>
          </div>
        </div>

        {/* Mobile Layout  */}
        <div className="block md:hidden absolute top-[70%] w-full flex justify-center">
          <div className="img-btn relative md:max-w-[30%] max-w-[45%] block" onClick={() => openDarkModal()}>
            <img src={MintItemsDark} alt="lightmint" className='md:max-w-[75%] max-w-[100%]' />
            <p className='text-white text-center absolute md:max-w-[75%] max-w-[100%] ml-2 flex items-center justify-center 
            text-[#39006C] md:text-[20px] text-[12px] top-0 w-full h-full hidden'>be corrupted</p>
          </div>
        </div>
        <div className="block md:hidden absolute top-[20%] w-full flex justify-center">
          <div className="img-btn relative md:max-w-[30%] max-w-[45%] block" onClick={() => openLightModal()}>
            <img src={MintItemsLight} alt="lightmint" className='md:max-w-[75%] max-w-[100%]' />
            <p className='text-white text-center absolute md:max-w-[75%] max-w-[100%] md:ml-2 flex items-center justify-center 
            text-[#39006C] md:text-[20px] text-[12px] top-0 w-full h-full hidden'>be enlightened</p>
          </div>
        </div>
        <div className="block md:hidden desktop-mint-text absolute top-[87%] w-full flex justify-center">
          <p className='text-white text-center text-[12px] italic'>P.S: Mint from desktop to achieve a better experience.</p>
        </div>
      </div>
    </div>
    <div className="mint-main-footer relative md:hidden block -mt-[13%] mint-bottom">
        <img src={MintItems} alt="lightmint" className='object-cover object-[center_center] h-[180px] hidden md:block'  />
        <img src={MintItemsMob} alt="lightmint" className='object-cover object-[center_center] h-[180px] block md:hidden'  />
        <p className='text-[#32A2C9] lg:text-[20px] absolute md:top-[38.5%] top-[45%] sm:left-[5%] left-[3.5%] font-cornerstone'>{goodMintedNftCount}/4500</p>
        <p className='text-[#39006C] lg:text-[20px] absolute md:top-[38.5%] top-[45%] sm:right-[5%] right-[3.5%] font-cornerstone'>{evilMintedNftCount}/4500</p>
    </div>      

    
    {/* Modal Light Win */}
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

    {/* Modal Dark Win */}
    {showDarkModal && (
    <div className="fixed top-0 w-full z-[100]">
      <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
        <div className="relative bg-white w-full max-w-[400px] m-auto sm:rounded-[36px] rounded-[65px] pt-12 pb-10">
          <div className="max-w-[68%] h-[100px] m-auto">
            <img src={PurpleLogo} alt="ColoredLogo"/>
          </div>
          <p className='font-bold text-[17px] italic text-center mt-3 hidden sm:block'>On to The Path of Light..</p>
          <p className='font-normal text-[16px] text-center mt-3 block sm:hidden'>"Our future lies in your choice..."</p>
          <div className="relative flex item-center justify-center mt-12">
            <button onClick={handleDarkCountDec} className='font-cornerstone leading-none text-[22px] text-[#600097] block mr-5'>-</button>
            <input type="text" value={Count} className='font-cornerstone text-[20px] text-center text-[#600097] block outline-none border
            border-[#600097] w-[50px] py-2 px-1 rounded-[12px]'/>
            <button onClick={handleDarkCountInc} className='font-cornerstone leading-none text-[22px] text-[#600097] block ml-4'>+</button>
          </div>
          <p className='text-center text-[#600097] text-[12px] -ml-[4px] mb-12'>(max-{maxDarkLimit})</p>
          {!loading ? <button onClick={mintDark} className='font-cornerstone leading-none bg-[#1CCDFF] w-full block max-w-[200px] pt-[1.3rem] pb-[1rem] text-center text-white sm:text-[24px] text-[20px] py-4 sm:rounded-[14px] rounded-full m-auto' style={{marginBottom:"10px"}}>Mint Now</button>:<Icons size={70} />}
          <p className='font-normal text-[16px] text-center mt-5 block sm:hidden'>P.S: Mint from desktop to achieve <br /> a better experience.</p>
          <div className="absolute right-[30px] top-[28px] cursor-pointer">
            <img src={CloseIcon} alt="close" height={17} width={17} onClick={() => closeDarkModal()} />
          </div>
        </div>
      </div>
    </div>
    )} 
    </div> 
    </>
  )
}

export default Mint