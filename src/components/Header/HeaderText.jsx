import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextLine from "./TextLine";

const HeaderText = () => {
  gsap.registerPlugin(ScrollTrigger);
  const trsnslateLeft1 = useRef(null);
  const trsnslateLeft2 = useRef(null);
  const trsnslateRight1 = useRef(null);
  const trsnslateRight2 = useRef(null);
  const rowContainer = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: rowContainer.current,
          markers: false,
          start: "50% top",
          end: "bottom top",
          scrub: 3,
          pin:   true
        },
      });
      tl2.to(
        trsnslateRight1.current,
        {
          x: "135px",
          // duration: 2,
        },
        "b"
      );
      tl2.to(
        trsnslateLeft1.current,
        {
          x: "-100px",
          // duration: 2,
        },
        "b"
      );
      tl2.to(
        trsnslateRight2.current,
        {
          x: "135px",
          // duration: 2,
        },
        "b"
      );
      tl2.to(
        trsnslateLeft2.current,
        {
          x: "-70px",
          // duration: 2,
        },
        "b"
      );
    });
    return () => ctx.revert();
  }, []);

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
  return (
    <>
      <div ref={rowContainer} className="rowContainer w-full h-full flex justify-center flex-col mt-[70px]">
        <div ref={trsnslateRight1}>
          <TextLine
            DataTextImgRow={DataTextImgRow1}
            Translate={"-translate-x-[420px]"}
          />
        </div>
        <div ref={trsnslateLeft1}>
          <TextLine
            DataTextImgRow={DataTextImgRow2}
            Translate={"-translate-x-[120px]"}
          />
        </div>
        <div ref={trsnslateRight2}>
          <TextLine
            DataTextImgRow={DataTextImgRow3}
            Translate={"-translate-x-[560px]"}
          />
        </div>
        <div ref={trsnslateLeft2}>
          <TextLine
            DataTextImgRow={DataTextImgRow4}
            Translate={"-translate-x-[100px]"}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderText;
