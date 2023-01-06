
import ImgSection from "../../../assets/Second_Page_Without_Modals.png"
import MobImgSection from "../../../assets/Second_Page_Without_Modal-cropped.png"
import TileOne from "../../../assets/Journal Pop Up-01 cropped.png"
import TileTwo from "../../../assets/Journal Pop Up-02 cropped.png"
import TileThree from "../../../assets/Journal Pop Up-03 cropped.png"
import Tilefour from "../../../assets/Journal Pop Up-04 cropped.png"
import Tilefive from "../../../assets/Journal Pop Up-05 cropped.png"


const ImgSec = ({showModal, setShowModal, showModal1, setShowModal1, showModal2, setShowModal2, showModal3, setShowModal3, showModal4, setShowModal4} : any) => {
  return (
    <>
    <div className='relative'>
      <img src={ImgSection} alt="imgsec" className='w-screen bg-cover object-fit relative -mt-[19.5%] -z-[1] hidden sm:block' />
      <img src={MobImgSection} alt="imgsec" className='w-screen bg-cover -mt-[31%] relative -z-[1] sm:hidden block' />
      <div className='sm:block hidden absolute top-0 w-full h-full'>
        <img src={TileOne} alt="tileone" className='max-w-[10%] absolute top-[32.5%] left-[52.7%] rotate-[-7deg] cursor-pointer' onClick={() => setShowModal(!showModal)}/>
        <img src={TileTwo} alt="tiletwo" className='max-w-[10.5%] absolute top-[34%] left-[67.3%] rotate-[4deg] cursor-pointer' onClick={() => setShowModal1(!showModal1)}/>
        <img src={TileThree} alt="tilethree" className='max-w-[11%] absolute top-[64%] left-[48.7%] rotate-[7deg] cursor-pointer' onClick={() => setShowModal2(!showModal2)}/>
        <img src={Tilefour} alt="tilefour" className='max-w-[10.4%] absolute top-[67%] left-[60.9%] rotate-[0deg] cursor-pointer' onClick={() => setShowModal3(!showModal3)}/>
        <img src={Tilefive} alt="tilefour" className='max-w-[10.4%] absolute top-[67%] left-[72.9%] rotate-[5deg] cursor-pointer' onClick={() => setShowModal4(!showModal4)}/>
      </div>
      <div className='sm:hidden block absolute top-0 w-full h-full'>
        <img src={TileOne} alt="tileone" className='max-w-[20%] absolute top-[33%] left-[24.7%] rotate-[-7deg] cursor-pointer' onClick={() => setShowModal(!showModal)}/>
        <img src={TileTwo} alt="tiletwo" className='max-w-[21.5%] absolute top-[34.7%] left-[55.3%] rotate-[4deg] cursor-pointer' onClick={() => setShowModal1(!showModal1)}/>
        <img src={TileThree} alt="tilethree" className='max-w-[22%] absolute top-[64.5%] left-[16.7%] rotate-[7deg] cursor-pointer' onClick={() => setShowModal2(!showModal2)}/>
        <img src={Tilefour} alt="tilefour" className='max-w-[21%] absolute top-[67%] left-[41.8%] rotate-[1deg] cursor-pointer' onClick={() => setShowModal3(!showModal3)}/>
        <img src={Tilefive} alt="tilefour" className='max-w-[21.4%] absolute top-[67%] left-[67.8%] rotate-[5deg] cursor-pointer' onClick={() => setShowModal4(!showModal4)}/>
      </div>
    </div>
    </>
  )
}

export default ImgSec