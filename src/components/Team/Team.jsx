import React from "react";
import Member from "./Member";
import chairman from '../../assets/image/chairman.png'
import Button from "../Button/Button";
const Team = () => {
  const memberData = [
    {
      no: "01",
      name: "md. miskat hasan",
      img: chairman,
      title: "chairman",
    },
    {
      no: "02",
      name: "dr. rick mcCartney",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483259_Rick%20McCartney%20.png",
      title: "ceo",
    },
    {
      no: "03",
      name: "chris koha",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832ae_655d505c9d551c9c11dd3613_Chris20Koha.png",
      title: "coo",
    },
    {
      no: "04",
      name: "caroline nieto",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65cd134a7ece047ea2260d5b_Caroline%20Nieto.png",
      title: "chief product officer",
    },
    {
      no: "05",
      name: "victor albertos",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e6_655d504bfd0e67e20640dbbd_ViCC81ctor20Albertos.png",
      title: "cto",
    },
    {
      no: "06",
      name: "dr. jana hapfelmeier",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325a_655d4fbc461dbfc3c7e1914e_Dr.20Jana20Hapfelmeier.png",
      title: "chief innovation officer",
    },
    {
      no: "07",
      name: "michael robin",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832da_655d501d4436fe51b356605d_Michael20Robin.png",
      title: "vp of marketing",
    },
    {
      no: "08",
      name: "adrian rubio",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325c_655d50b27e70d440e4404528_AdriaCC81n20Rubio.png",
      title: "vp of engineering",
    },
    {
      no: "09",
      name: "cy serrano",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832c7_655d4fcd461dbfc3c7e19739_Cy20Serrano.png",
      title: "vp of product",
    },
  ];
  return (
    <>
      <div data-bgcolor="white" className="section w-full py-6 px-10 relative">
        <h1 className="text-[4vw] font-[Machina] text-center pb-10">
          Our Team
        </h1>
        <div>
          <Member memberData={memberData} />
        </div>
        <div className="py-20 text-center">
          <Button Content="meet the entire team" className="bg-[#f5f19c] border border-black px-8 py-4 text-sm font-medium"/>
        </div>
      </div>
    </>
  );
};

export default Team;
