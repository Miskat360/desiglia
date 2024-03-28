import React from "react";

const FooterLink = ({ LinkTitle }) => {
  return (
    <>
      <ul className="capitalize text-xl flex flex-col gap-3 font-[Machina]">
        {LinkTitle.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </>
  );
};

export default FooterLink;
