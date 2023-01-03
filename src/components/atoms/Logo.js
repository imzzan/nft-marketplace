import React from "react";
import { logo } from "../../assests";

const Logo = () => {
  return (
    <div className="flex items-center font-mono gap-[10px]">
      <img src={logo} className="w-[32px]" alt="logo" /> <p>NFT Marketplace</p>
    </div>
  );
};

export default Logo;
