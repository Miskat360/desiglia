import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Horizontal from "./components/Horizontal/Horizontal";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import CapsuleSection from "./components/CapsuleSection/CapsuleSection";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let cxt = gsap.context(() => {
      document.querySelectorAll(".section").forEach((e) => {
        console.log(e)
        ScrollTrigger.create({
          trigger: e,
          start: "top 50%",
          end: "bottom 50%",
          markers: false,
          onEnter: function(){
            document.body.setAttribute("theme", e.dataset.bgcolor)
          },
          onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.bgcolor)
          }
        });
      });
    });

    return () => cxt.revert();
  }, []);

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Header />
      <About />
      <div
        data-bgcolor="salmon"
        className="section overflow-hidden"
      >
        <Horizontal />
      </div>
      <Team />
      <CapsuleSection />
      <Footer />
    </>
  );
};

export default App;
