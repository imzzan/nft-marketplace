import React from "react";
import { Timer } from "../atoms";

const ActionTimer = () => {
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
    <div className="mt-10  md:mt-0 bg-secondary/60 backdrop-opacity-60 backdrop-blur-[6px] p-8 rounded-[20px]">
      <p className="font-[400] blur-none text-[12px] leading-[13.2px] font-mono">
        Auction ends in:
      </p>
      <div className="flex justify-between mt-2 md:gap-6">
        {items.map((item) => {
          return (
            <Timer time={item.time} oclock={item.oclock}/>
          );
        })}
      </div>
    </div>
  );
};

export default ActionTimer;
