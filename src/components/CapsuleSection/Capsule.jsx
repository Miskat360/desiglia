import React from "react";

const Capsule = ({ flexReverse, capsuleData }) => {
  return (
    <div
      className={`w-[25vw] h-[110vh] border rounded-full py-7 px-5 border-black overflow-hidden -rotate-[15deg] flex ${flexReverse}`}
    >
      <div className="flex justify-center">
        <div className="w-[20vw] h-[20vw] overflow-hidden rounded-full">
          <img
            src={capsuleData.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className={`text-center mb-16 flex ${
          capsuleData.paraText !== "" ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-[Machina] my-16">
            {capsuleData.headingText}
          </h1>
          {capsuleData.paraText !== "" && (
            <p className="-mt-14 text-xs w-[18vw]">{capsuleData.paraText}</p>
          )}
        </div>
        <div>
          <a
            href=""
            className="px-4 py-2 inline font-medium bg-[#E9BBFF] rounded-full"
          >
            Thought Leadership
          </a>
        </div>
      </div>
    </div>
  );
};

export default Capsule;
