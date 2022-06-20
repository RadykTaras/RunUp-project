import React,{useState, useRef} from "react"
import "./Home.css"
import PromoVideo from "./video/RUN.mp4"


const Home = () =>{
  
  const [isOpen, setOpen] = useState(false);
  const runVideo = useRef();
  
  function promoVideoHide (){
    setOpen(isOpen => !isOpen); 
  }
  
  let video = isOpen ? '' : ' hiden';

  return (
    <div className={`contentSectionHomePage${video}`}>
        <video className={`promoVideo${video}`}
          ref={runVideo}
          src={PromoVideo}
          preLoad="auto"
          loop 
          onClick={() => {runVideo.current.pause()}}
        />
        <div onClick={() => promoVideoHide()}>
          <h1 className="mainTitleHomePage" onClick={() => {runVideo.current.play()}}>RunUp with us</h1>
        </div>
    </ div>
  )
}

export default Home;