import React from "react";

const Capsule = ({flexReverse}) => {
  return (
    <div className={`w-[25vw] border rounded-full py-7 px-5 border-black overflow-hidden -rotate-[15deg] flex ${flexReverse}`}>
      <div className="flex justify-center">
        <div className="w-[20vw] h-[20vw] overflow-hidden rounded-full">
            <img src="https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65e61826ab9558e05e681a7f_Untitled%20design.png" alt="" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="text-center mb-16">
        <h1 className="text-2xl font-[Machina] my-16">
          Equity in Tech: An International Women's Day Conversation with
          Caroline Nieto, Significo's CPO
        </h1>
        <a href="" className="px-4 py-2 font-medium bg-[#E9BBFF] rounded-full">Thought Leadership</a>
      </div>
    </div>
  );
};

export default Capsule;
