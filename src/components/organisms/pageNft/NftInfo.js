import React from "react";
import { NftDescription } from "../../moleculs";
import { Timer } from "../../atoms";

const NftInfo = () => {
  const items = [
    {
      oclock: "Hours",
      time: 59,
    },
    {
      oclock: "Minutes",
      time: 59,
    },
    {
      oclock: "Second",
      time: 59,
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6">
        <NftDescription />
        <div className="mt-10 h-[234px] lg:w-[300px] md:mt-0 bg-gray backdrop-opacity-60 backdrop-blur-[6px] p-8 rounded-[20px]">
          <p className="font-[400] blur-none text-[12px] leading-[13.2px] font-mono lg:text-[16px] lg:leading-[20px]">
            Auction ends in:
          </p>
          <div className="flex justify-between mt-2 md:gap-6">
            {items.map((item) => {
              return <Timer time={item.time} oclock={item.oclock} />;
            })}
          </div>
          <button className="bg-primary w-full mt-8 py-3 rounded-[20px]">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftInfo;
