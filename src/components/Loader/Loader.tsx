import React from '../../assets/video/Loading_Animation.mp4'

const Loader = () => {
  return (
    <>
    <div className='relative flex items-center justify-center overflow-hidden h-screen' id="loader">
        <video loop={true} playsInline autoPlay muted style={{pointerEvents:"none"}}>
            <source src="./Loading_Animation.mp4" type="video/mp4" />
        </video>
    </div>
    </>
  )
}

export default Loader