import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const Card = ({ cardData }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      document.querySelectorAll(".card").forEach((e) => {
        gsap.set(e, {
          width: "90%",
        });
        gsap.to(e, {
          backgroundColor: "black",
          color: "#AEDEE0",
          width: "100%",
          scrollTrigger: {
            trigger: e,
            markers: false,
            start: "10% 58%",
            end: "60% 58%",
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="cardContainer w-full h-full pt-[55vh] pb-[50vh] pr-[11vw] flex flex-col gap-8 items-center">
        {cardData.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="card w-[90%] h-[180px] px-10 py-6 border border-black flex justify-between items-center gap-10"
          >
            <div>
              <h1 className="text-xl mb-4 font-semibold">{title}</h1>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              <div className="cards__icon">
                <div className="svg w-embed flex items-end justify-end">{icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
