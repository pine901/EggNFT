import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../utils/connector';
import { Link } from 'react-router-dom'
import ConnectWalletBg from "../../assets/New-Connect-Wallet-Page.png"
import WalletCharacter from "../../assets/connect wallet characters-32.png"
import WalletCharacterTwo from "../../assets/connect wallet characters-31.png"
import ModalLogo from "../../assets/Logo-Blacked.png"
import CloseIcon from "../../assets/Close.png"
import Navbar from '../../components/Global/Navbar/Navbar'
import Footer from '../../components/Global/Footer/Footer'
import { NotificationManager} from 'react-notifications';
import Loader from '../../components/Loader/Loader'
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS, } from '../../utils/constants';
const ConnectWallet = () => {
  const navigate = useNavigate();
  const { activate, account, connector, library, ...props } = useWeb3React();
  const [ConnectError, showConnectError] = useState(false)
  const [ConnectLoader, showConnectLoader] = useState(true)
  const [errorText, setErrorText] = useState("")
  const connect = async () => {
    try {
      await activate(injected, undefined, true);
    } catch (err:any) {
      console.log(err)
      if(err.message.indexOf("Supported chain ids are: 5")){
        showConnectError(!ConnectError)
        setErrorText("You are on wrong network, Change your network to goerli")
        // NotificationManager.error("You are on wrong network, Change your network to goerli","Network Error")
      }else{
        setErrorText(err.message)
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (library) {
        try {
          const provider = new ethers.providers.Web3Provider(library.provider);
          const signer = provider.getSigner();
          let chainId = await signer.getChainId()
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            const whiteListed = await contract.getUserWhiteListed();
            navigate("/connect");
        } catch (error) {
          showConnectError(!ConnectError)
          setErrorText("Your wallet is not whitelisted")
          // NotificationManager.error("Your wallet is not whitelisted")
        }
      }
    })()
  }, [library]);

  // useEffect(() =>{
  //   if(ConnectError){
  //     document.body.style.overflow = 'hidden'
  //   }
  //   else{
  //     document.body.style.overflow = 'auto'
  //   }
  // })

  return (
    <>
      <div style={{ display: ConnectLoader ? "block" : "none" }}>
        <Loader />
      </div>
      <div>
        <div className="relative">
          <Navbar />
          <img src={ConnectWalletBg} onLoad={() => showConnectLoader(false)} alt="AboutWallpaper" className='md:h-[165vh] w-screen object-cover md:object-center object-[center_center]' />
          <div className="absolute top-0 w-full h-full">
            <div className="absolute md:top-[47.8%] top-[38%] flex items-center justify-center flex-col w-full">
              <button onClick={connect} className='font-cornerstone glass-effect-v2 md:border md:border-white/[0.3] sm:text-[22px] sm:leading-none leading uppercase sm:py-3 md:py-5 py-2
            sm:px-5 sm:w-[200px] md:w-[250px] w-[150px] text-[12px] sm:rounded-[18px] rounded-full text-center text-white'>
                Connect Wallet
              </button>
              <p className='text-center text-white font-normal italic mt-[3%] md:block hidden' onClick={() => showConnectError(!ConnectError)}>
                "This is where it ends. This is where you choose <br />
                your allegiance. Make your decision, make a <br />
                stand. Take note, your decision will not only <br />
                choose the Winner, but also choose the path of<br />
                the Wonder World. One thing is certain, this <br />
                World will never be the same..."</p>
              <p className='text-center text-white sm:text-[14px] text-[12px] font-normal mt-[10%] md:hidden block max-w-[270px]'>
                "Immerse in the light, embrace the darkness. The choice is yours!"
              </p>
              <p onClick={() => showConnectError(!ConnectError)} className='text-center text-white sm:text-[14px] text-[12px] font-normal italic mt-[16px] md:hidden block max-w-[285px]'>
                P.S: Mint from desktop to achieve a better experience
              </p>
            </div>
          </div>
          <div className="md:-mt-[0%] -mt-[12%]">
            <Footer />
          </div>
        </div>

        {/* Connection Error Modal  */}
        {ConnectError && (
          <div className="fixed top-0 w-full h-full z-[100] overflow-scroll overflow-x-hidden">
            <div className="h-screen bg-[#5A5858]/[0.6] w-full flex items-center justify-center p-2">
              <div className="relative bg-white w-full md:max-w-[850px] max-w-[450px] m-auto md:flex px-4 py-4 rounded-[50px] md:min-h-[350px]">
                <div className="lg:w-[200px] w-[170px] md:flex hidden items-end justify-end relative top-[18px] left-[18px]">
                  <img src={WalletCharacter} alt="picone" loading="lazy" />
                </div>
                <div className="md:pt-1 sm:pt-2 pt-6 md:w-[57%]">
                  <img src={ModalLogo} alt="modalimg" className='md:max-w-[350px] sm:max-w-[300px] max-w-[275px] m-auto md:h-[120px]' />
                  <div className="flex items-center justify-center my-4 relative">
                    <div className="h-[50px] w-[50px] rounded-full" style={{ backgroundColor: "#EF2E2E" }}></div>
                    <div className="absolute top-[21.5px] h-[7px] w-[50px] bg-white"></div>
                  </div>
                  <p className="italic max-w-[320px] m-auto text-center md:block hidden">{errorText}</p>
                  <p className="italic max-w-[320px] m-auto text-center md:block hidden">"Sorry seems like you are not part of the Circle of Axplorers. For your safety, you are not allowed to go the Final Battle at the moment! Hang tight while the Circle goes to work!"</p>
                  <p className="italic max-w-[240px] m-auto text-center md:hidden block">"Sorry seems like you are not part of the Circle of Axplorers.</p>
                  <p className="italic max-w-[270px] m-auto text-center md:hidden block"> For your safety, you are not allowed to join the final battle!"</p>
                  <div className="flex items-center justify-center md:hidden mt-6">
                    <img src={WalletCharacterTwo} alt="Character1" className='h-[210px] relative left-[-16px] top-[16px] w-[190px]' />
                  </div>
                </div>
                <div className="absolute md:right-[60px] right-[18px] top-[35px] cursor-pointer" onClick={() => showConnectError(!ConnectError)}>
                  <img src={CloseIcon} alt="close" height={20} width={20} />
                </div>
                <img src={WalletCharacterTwo} alt="Character1" className='md:block hidden absolute bottom-0 right-[32px] lg:h-[210px] lg:w-[190px] h-[170px] w-[150px]' />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default ConnectWallet