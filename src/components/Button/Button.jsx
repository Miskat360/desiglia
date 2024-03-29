import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({ Content, ...attributes }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const textUp = () => {
      gsap.set(".animbtn .toptext", {
        y: 0,
      });
      gsap.set(".animbtn .bottomtext", {
        y: 0,
      });
      gsap.to(".animbtn .toptext", {
        y: "-140%",
        stagger: 0.01,
      });
      gsap.to(`.animbtn .bottomtext`, {
        y: "-100%",
        stagger: 0.01,
        delay: 0.1,
      });
    };
    document.querySelectorAll(".animbtn").forEach((e) => {
      e.addEventListener("mouseenter", textUp);
    });
  }, []);
  return (
    <>
      <div
        onMouseOver={() => {
          document.querySelectorAll(".btnarrow").forEach((e) => {
            e.style.transform = "rotate(0)";
            e.style.top = "4px";
          });
        }}
        onMouseOut={() => {
          document.querySelectorAll(".btnarrow").forEach((e) => {
            e.style.transform = "rotate(-45deg)";
            e.style.top = "8px";
          });
        }}
        className="animbtn inline-block"
      >
        <a
          href="/"
          style={{
            display: "inline-block",
            textTransform: "uppercase",
            position: "relative",
          }}
          {...attributes}
        >
          <a
            href="/"
            className="btncontent inline-block pr-8 overflow-hidden relative -mb-1"
          >
            <span className="flex">
              {Content.split("").map((letter, index) => (
                <>
                  {letter == " " && <spna>&nbsp;</spna>}
                  <span key={index} className="toptext">
                    {letter}
                  </span>
                </>
              ))}
            </span>
            <span className="flex absolute">
              {Content.split("").map((letter, index) => (
                <>
                  {letter == " " && <span>&nbsp;</span>}
                  <span key={index} className="bottomtext">
                    {letter}
                  </span>
                </>
              ))}
            </span>
            <span className="btnarrow absolute pl-2 right-0 top-2 -rotate-45">
              <GoArrowRight />
            </span>
          </a>
        </a>
      </div>
    </>
  );
};

export default Button;
