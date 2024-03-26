import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Horizontal = () => {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalCursor = useRef(null);

  useEffect(() => {
    let ctx2 = gsap.context(() => {
      gsap.to("#horizontalElem", {
        transform: "translateX(-300vw)",
        scrollTrigger: {
          trigger: "#horizontalContainer",
          // scroller:"body",
          markers: false,
          start: "0 0",
          end: "top -200%",
          scrub: 3,
          pin: true,
        },
      });

      window.addEventListener("mousemove", (e) => {
        gsap.set(horizontalCursor.current, {
          xPercent: -50,
          yPercent: -50,
        });
        gsap.to(horizontalCursor.current, {
          x: e.clientX,
          y: e.clientY,
        });
      });
    });

    return () => ctx2.revert();
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => {
          horizontalCursor.current.style.display = "block";
        }}
        onMouseLeave={()=>{
          horizontalCursor.current.style.display = "none"
        }}
        id="horizontalContainer"
        className="w-0 bg-[#ef9d90] relative cursor-none"
      >
        <div id="horizontalElem" className="w-[400vw] h-screen">
          <div className="whitespace-nowrap w-full h-full">
            <div className="whitespace-normal w-full h-full flex items-center">
              <div className="text-[7vw] w-[40vw] ml-[30vw]">
                <h1>Real Talk, Real Impact</h1>
              </div>
              <div className="w-[22vw] rounded-full overflow-hidden ml-[10vw]">
                <img
                  src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ed8426a9be08870acb09_1.jpg"
                  alt=""
                  className="scale-[1.1]"
                />
              </div>
              <div className="ml-[10vw] relative w-screen h-screen flex flex-col justify-center">
                <div className="flex">
                  <p className="w-[18vw] font-medium z-10">
                    We're on a mission to impact as many lives as possible and
                    build a better company while we do it. Here's our progress.
                  </p>
                  <h1 className="text-[10vw] text-white -ml-[3.5vw]">20.4M</h1>
                </div>
                <h1 className="text-[3vw] w-[48vw] text-center -mt-[3vw] ml-[10vw]">
                  Real people — real lives — we have built products and
                  solutions for.
                </h1>
                <div className="w-[150px] rounded-full overflow-hidden absolute left-0 top-[68%]">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9edafe67e88c12db2d78b_2.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[220px] rounded-full overflow-hidden absolute left-[25%] -top-[5%]">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9edd08cc0ac13ed6995bd_4.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[280px] rounded-full overflow-hidden absolute left-[20%] top-[75%]">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ee19cb5203ee12c21ba3_3.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[270px] rounded-full overflow-hidden absolute right-20">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ee2e5e80fe8ace7a1ff3_5.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
              </div>
              <div className="relative w-screen h-screen flex flex-col justify-center">
                <div className="flex -mt-20">
                  <p className="w-[16vw]">
                    Our team is global and diverse, because our individual
                    experiences make us stronger.
                  </p>
                  <h1 className="text-[11vw] text-white text-center leading-none">
                    49%
                    <p className="text-[3.5vw] mt-4 text-black">
                      Expert Women in Tech.
                    </p>
                  </h1>
                </div>
                <div className="absolute w-[370px] left-20 -bottom-20 ">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png"
                    alt=""
                  />
                </div>
                <div className="absolute w-[260px] left-[50%] -top-10">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png"
                    alt=""
                  />
                </div>
                <div className="absolute w-[300px] right-0">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="bg-re-800 relative w-screen h-screen flex flex-col justify-center items-center">
                <h1 className="text-[10vw] text-white -ml-[3.5vw]">13</h1>
                <h1 className="text-[3vw] w-[48vw] text-center -mt-[3vw]">
                  Nationalities Represented on Our Team.
                </h1>
                <div className="w-[200px] rounded-full overflow-hidden absolute left-[30%] -top-[4%]">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ef82bb0daca6843ce305_7.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[300px] rounded-full overflow-hidden absolute left-20 bottom-0">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ef723a7cfee7941b52f3_6.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[80px] rounded-full overflow-hidden absolute left-[70%] top-[65%]">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9ef9463d57ead8406a444_8.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
                <div className="w-[370px] rounded-full overflow-hidden absolute top-0 -right-20">
                  <img
                    src="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65e9efa87b272d53118849fa_9.jpg"
                    alt=""
                    className="scale-[1.2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed w-[20vw] bottom-20 left-20">
          <a
            href=""
            className="font-semibold bg-[#F5F19C] border border-black py-4 px-8 uppercase"
          >
            partner with us
          </a>
        </div>
        <div
          ref={horizontalCursor}
          className="fixed hidden w-10 top-0 left-0 z-[9999] -rotate-[90deg] pointer-events-none select-none"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACE0lEQVR4nO2ay0oDMRSGP6p4WVtXCoo+iFLBJ7AiPoAiLr09iBdc6cLLa0i9g4piKz6BGy97izCRQAaGoZYmJ9MJMj+czXTm5HzJSZrJGSj0vzUKLAGHwB3wlvjtzVw7MPeMEJhKQBWoARGgUhYrfV3fewbMGR+5qgI8twiyE5CkPQHTeQD0A3t/jIALSDxC20BftyDKwG0HgdmCxHYFDGUNMQzULYJyAVEmXXWHZaJB4MYimB9gM/H8hrlmMzIDWYDsW/bqWgsfG5Y+dnxDzFoGoBKpoXv2IpGaNj4iYMYXRC/w6gASSzJXFNAAenyALDo07hNEAfM+QK4DALmUQkx2+KeXNUgEjEtAVh0b9g2igGUJyGlAIEcSkEdBw/Hyq5fec8flVyXsQQLyJWh4vYW/TYG/DwlIU9Cw3o5sJXxtWW5RVMp0LM5ybbTdXPHhy1oFCMWIkElqFQpNKjBzVt6BqwIkpX8zIs0AglfGviUgnwEAKGPveW3jfdu9BOQkAADl48VqJQAAZUzXVJw1ITh88GkRMIZQlwGA1PCghQBAqj5A9HHlS44QdZ+luakc50oFz9rLAWKbDDRgWXKT2rWpVWaicpfmS6MbdUTbYqjLSAzRJek02/UMEJenM0undqp4SrV6Xh8MJFUyFaVzyyU6Ms9UQ/iEI61xU8c4NtvuT/Ny1jSH0PdmF7skLdwUInD9AgXhzfXNozLSAAAAAElFTkSuQmCC" />
        </div>
      </div>
    </>
  );
};

export default Horizontal;
