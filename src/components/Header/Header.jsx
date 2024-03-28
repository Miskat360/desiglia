import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowDown } from "react-icons/go";

import "./header.css";
import TextLine from "./TextLine";
const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const VideoElem = useRef(null);
  const TextElem = useRef(null);
  const Container = useRef(null);
  const DataTextImgRow1 = [
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
    },
    {
      text: "intuitive",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
    },
  ];
  const DataTextImgRow2 = [
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317e_Ellipse%20845-7.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
    },
    {
      text: "intuitive",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483182_Ellipse%20845-8.png",
    },
  ];
  const DataTextImgRow3 = [
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png",
    },
    {
      text: "intuitive",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png",
    },
  ];
  const DataTextImgRow4 = [
    {
      text: "intuitive",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483182_Ellipse%20845-8.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png",
    },
    {
      text: "empathetic",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png",
    },
    {
      text: "useful",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png",
    },
    {
      text: "intuitive",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png",
    },
  ];
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: Container.current,
          markers: false,
          start: "top top",
          bottom: "bottom top",
          scrub: 4,
          pin: true,
        },
      });
      gsap.set(".headerPeraAnim span", { opacity: 0 });
      gsap.to(".headerPeraAnim span", {
        opacity: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".headerPeraAnim",
          markers: false,
          start: "200% top",
          end: "350% top",
          scrub: 1,
        },
      });
      gsap.set(TextElem.current, {
        scale: 15,
      });
      tl.to(
        VideoElem.current,
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        "a"
      );
      tl.to(
        TextElem.current,
        {
          scale: 1,
        },
        "a"
      );
      tl.to(
        ".rft",
        {
          x: "70px",
          stagger: 0.03,
        },
        "b"
      );
      tl.to(
        ".lft",
        {
          x: "-70px",
          stagger: 0.03,
        },
        "b"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] relative">
        <div
          data-bgcolor="black"
          ref={Container}
          className="section w-full h-screen text-white sticky top-0 overflow-hidden"
        >
          <div
            ref={VideoElem}
            className="w-full h-full overflow-hidden z-[3] absolute top-0"
            style={{ clipPath: "circle(75% at 50% 50%)" }}
          >
            <video autoPlay loop muted src="https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/bBj1XfrSyi/1ENIoa5sjq"></video>
          </div>
          <div className="text-center flex items-center justify-center">
            <p className="headerPeraAnim w-[25vw] text-2xl text-zinc-200 pt-20 leading-[1.5] font-semibold">
              {"Crafting a new paradigm of healthcare, one that is"
                .split("")
                .map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
            </p>
          </div>
          <div
            ref={TextElem}
            className="w-full h-screen absolute top-0 flex items-center"
          >
            <div className="mt-[70px]">
              <div className="rft">
                <TextLine
                  DataTextImgRow={DataTextImgRow1}
                  Translate={"-translate-x-[420px]"}
                />
              </div>
              <div className="lft">
                <TextLine
                  DataTextImgRow={DataTextImgRow2}
                  Translate={"-translate-x-[87px]"}
                />
              </div>
              <div className="rft">
                <TextLine
                  DataTextImgRow={DataTextImgRow3}
                  Translate={"-translate-x-[550px]"}
                />
              </div>
              <div className="lft">
                <TextLine
                  DataTextImgRow={DataTextImgRow4}
                  Translate={"-translate-x-[100px]"}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[6%] flex justify-between items-center w-full px-10">
            <p className="w-[160px] text-sm">
              We build big ideas. Software. Apps. Tools.
              <p>For real people. Real lives.</p>
            </p>
            <a
              href="/"
              className="roundArrowBtn w-12 h-12 border rounded-full flex items-center justify-center relative overflow-hidden text-4xl"
            >
              <span className="topArrow absolute -top-[70%]">
                <GoArrowDown />
              </span>
              <span className="bottomArrow absolute top-[11%]">
                <GoArrowDown />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        data-bgcolor="black"
        className="section w-full h-screen"
      ></div>
    </>
  );
};

export default Header;
