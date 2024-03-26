import React from "react";

const TextLine = ({ DataTextImgRow, Translate }) => {
  return (
    <>
      <div className={`flex gap-7 ${Translate}`}>
        {DataTextImgRow.map(({text, img}, index)=>(
            <div key={index} className="flex items-center gap-5">
                <span className="font-[Machina] text-7xl font-semibold">{text}</span>
                <div className="w-[36px]">
                    <img src={img} alt="" />
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default TextLine;
