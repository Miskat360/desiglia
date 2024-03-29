import React, { useEffect } from "react";
import loaderBg from "../../assets/image/preloader.gif"
const Preloader = () => {
    useEffect(() => {
      window.onload = ()=>{
        document.querySelector("#preloader").style.display = "none"
      }
    }, [])
    
  return (
    <>
      <div
      id="preloader"
        className="w-screen h-screen bg-white fixed top-0 left-0 z-[101] flex items-center justify-center"
      >
        <img src={loaderBg} alt="" className="w-[40vw]"/>
      </div>
    </>
  );
};

export default Preloader;
