import React, { useState, useRef } from "react";
import ArtistCard from "./ArtistCard";

const MarketplaceSection = () => {
  const [state, setState] = useState(true);

  const oncliks = () => {
    setState(!state);
    
  };

  const items = [
    {
      name: "NFTS",
      number: 2712,
    },

    {
      name: "Collection",
      number: 46,
    },
  ];

  return (
    <>
      <div className="mt-8 lg:mt-24 w-full">
        <ul className="flex justify-around border-y border-gray h-[60px] lg:h-[70px]">
          {items.map((item, i) => {
            return (
              <li
                onClick={oncliks}
                className="hover:border-b-4 cursor-pointer border-[#858584] text-[#858584] hover:text-white h-[60px] flex items-center text-[16px] leading-[23px] font-[600] gap-1 lg:text-[22px] lg:leading-[31px] lg:h-[70px]"
              >
                {item.name}
                <span className="w-[35px] h-[25px] bg-gray md:flex justify-center items-center rounded-[20px] text-white text-[12px] font-normal hidden hover:bg-[#858584] lg:w-[50px] lg:h-[32px] lg:text-[16px]">
                  {item.number}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      {state ? <ArtistCard/> : <p>Maaf page ini masih dalam pembuatan</p>}
    </>
  );
};

export default MarketplaceSection;
