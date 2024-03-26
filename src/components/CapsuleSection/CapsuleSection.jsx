import React from "react";
import Capsule from "./Capsule";

const CapsuleSection = () => {
  return (
    <>
      <div data-bgcolor="yellow" className="section w-full px-10 py-32 flex gap-7">
        <div className="basis-1/3 flex flex-col justify-between">
          <p>
            Stay up-to-date on the latest healthcare innovations and thought
            leadership.
          </p>
          <div>
            <h1 className="text-[4.5vw] mb-7">Explore <p>Our Insights</p></h1>
            <a href="" className="px-4 py-2 bg-yellow-600">view all articals</a>
          </div>
        </div>
        <div className="basis-2/3 flex gap-16">
          <Capsule flexReverse="flex-col"/>
          <Capsule flexReverse="flex-col-reverse"/>
        </div>
      </div>
    </>
  );
};

export default CapsuleSection;
