import React from "react";
import { avatar1 } from "../../assests";

const RankCard = ({number, nft, name, avatar}) => {
  return (
    <div className="flex items-center justify-between bg-gray w-full h-[50px] md:h-[60px] px-3 md:px-5 rounded-[20px] hover:scale-110 transition">
      <div className="flex items-center gap-2">
        <p className="text-[12px] md:text-[16px] leading-[13.2px] font-normal text-[#858584] mr-2">{number}</p>
        <img src={avatar} alt="avatar" className="w-[24px] h-[24px] lg:w-[50px] lg:h-[50px]"/>
        <p className="font-normal text-[16px] md:text-[22px] md:leading-[30.8px] leading-[22.4px]">{name}</p>
      </div>
      <p className="hidden md:block text-[16px] text-[#00AC4F] font-normal font-mono">+1.41%</p>
      <p className='hidden lg:block "font-normal text-[16px] leading-[22.4px]'>600</p>
      <p className="font-normal text-[12px] md:text-[16px] leading-[22.4px] font-mono">{nft} ETH</p>
    </div>
  );
};

export default RankCard;
