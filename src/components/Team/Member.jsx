import React from "react";
import "./team.css";
const Member = ({ memberData }) => {
  return (
    <>
      {memberData.map(({ no, name, img, title }, index) => (
        <div
          key={index}
          className="memberContainer w-full h-[20vh] border-b last:border-b-0 flex justify-between items-center px-14 hover:px-10 transition-all duration-500 ease-in-out py-6 relative hover:bg-[#2544EE] hover:text-gray-300"
        >
          <div className="font-[Machina] text-[3vw] capitalize flex items-center gap-8">
            <p className="text-gray-300">{no}</p>
            <p>{name}</p>
          </div>
          <div className="avater absolute w-[200px] left-1/2 rounded-full overflow-hidden">
            <img
              src={img}
              alt=""
            />
          </div>
          <p className="uppercase font-medium">{title}</p>
        </div>
      ))}
    </>
  );
};

export default Member;
