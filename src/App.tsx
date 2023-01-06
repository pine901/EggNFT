
import { Routes, Route } from 'react-router-dom'
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HiddenMap from "./pages/HiddenMap/HiddenMap";
import Home from "./pages/Home/Home";
import Darkwin from "./pages/Mint/Darkwin";
import Lightwin from "./pages/Mint/Lightwin";
import Mint from "./pages/Mint/Mint";
import Roadmap from "./pages/Roadmap/Roadmap";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";
import { Web3ReactProvider } from '@web3-react/core';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from "react-notifications";
import { Web3Provider } from '@ethersproject/providers'
function getLibrary(provider:any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
function App() {
  return(
    <>
    <NotificationContainer/>
     <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/connect" element={<Mint/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/roadmap" element={<Roadmap/>}/>
        <Route path="/mint" element={<ConnectWallet/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/darkwin" element={<Darkwin/>}/>
        <Route path="/lightwin" element={<Lightwin/>}/>
        <Route path="/signin" element={<HiddenMap/>}/>
      </Routes>
      </Web3ReactProvider>
    </>
  );
}

export default App;
