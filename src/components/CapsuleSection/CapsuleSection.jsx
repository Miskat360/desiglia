import React, { useState } from "react";
import Capsule from "./Capsule";

const CapsuleSection = () => {
  const capsuleData1 = {
    img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65e61826ab9558e05e681a7f_Untitled%20design.png",
    headingText: "Equity in Tech: An International Women's Day Conversation with Caroline Nieto, Significo's CPO",
    paraText: ""
  };
  const capsuleData2 = {
    img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65affe89f470b736a1da1ba2_How%20to%20Use%20Digital%20Health%20Interventions.jpg",
    headingText: "How to Use Digital Health Interventions to Align Employee & Organizational Goals",
    paraText: "How to use personalized digital health interventions to empower employees while achieving your organization’s goals."
  };
  return (
    <>
      <div
        data-bgcolor="yellow"
        className="section w-full px-10 py-32 flex gap-7"
      >
        <div className="basis-1/3 flex flex-col justify-between">
          <p>
            Stay up-to-date on the latest healthcare innovations and thought
            leadership.
          </p>
          <div>
            <h1 className="text-[4.5vw] mb-7 font-[Machina]">
              Explore <p>Our Insights</p>
            </h1>
            <a href="" className="px-4 py-2 bg-yellow-600">
              view all articals
            </a>
          </div>
        </div>
        <div className="basis-2/3 flex gap-16">
          <Capsule flexReverse="flex-col" capsuleData={capsuleData1}/>
          <div data-scroll data-scroll-speed={0.12}>
            <Capsule flexReverse="flex-col-reverse" capsuleData={capsuleData2}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapsuleSection;
