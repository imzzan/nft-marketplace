import React from "react";
import { iconMateMask } from "../../assests";

const ButtonWallet = ({image, name}) => {
  return (
    <div className="flex gap-6 items-center justify-center bg-gray border border-primary w-[w-full] h-[60px] lg:h-[72px] rounded-[20px] cursor-pointer">
      <img src={image} alt="iconWallet" className="w-[32px] h-[32px] lg:w-[40px]"/>
      <p className="text-[22px] leading-[30.8px] font-[600]">{name}</p>
    </div>
  );
};

export default ButtonWallet;
