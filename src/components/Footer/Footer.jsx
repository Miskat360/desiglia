import React, { useEffect } from "react";
import FooterLink from "./FooterLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let cxt = gsap.context(() => {
      gsap.set(".footerTitle span", {
        y: 140,
      });
      gsap.to(".footerTitle span",{
        y:-10,
        stagger: .1,
        scrollTrigger:{
            trigger: ".footerTitle",
            markers:false,
            start: "5% 75%",
            end: "50% 80%",
            scrub: 3
        }
      })
    });

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="w-full h-[92vh] bg-black text-white px-10 pb-10 pt-20 relative overflow-hidden">
        <div className="w-full flex justify-between">
          <div>
            <FooterLink
              LinkTitle={["home", "solutions", "about", "team", "contact"]}
            />
          </div>
          <div>
            <h1 className="font-[Machina] text-2xl w-[320px] mb-6">
              Join our mailing list for the latest updates.
            </h1>
            <form action="">
              <input
                type="text"
                placeholder="Enter your email address..."
                className="px-6 py-4 text-sm mr-4 w-[300px]"
              />
              <button className="bg-yellow-200 text-sm px-6 text-black py-4 uppercase font-medium">
                subscribe
              </button>
            </form>
          </div>
          <div className="text-end">
            <FooterLink
              LinkTitle={[
                "insights",
                "newsroom",
                "resources",
                "contact",
                "careers",
              ]}
            />
          </div>
        </div>
        <div>
          <h1 className="footerTitle text-[19.5vw] leading-none font-[Machina] text-center absolute bottom-0 flex">
            {"Significo".split("").map((letter, index) => (
              <span key={index} className="inline-block -ml-1">{letter}</span>
            ))}
          </h1>
        </div>
        <div className="w-[calc(100%-80px)] flex justify-between border-t py-12 absolute bottom-0 bg-black">
          <div className="text-xs underline">
            <span>Privacy Policy</span>
            <span className="ml-4">Terms of Use</span>
          </div>
          <p className="text-xs">© 2024 Signifco. All rights reserved.</p>
          <div>
            <span>facebook</span>
            <span className="ml-4">linkedIn</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
