import React from "react";
import { InfoCard } from "../moleculs";
import { iconCard1, iconCard2, iconCard3 } from "../../assests";

const HowItWork = () => {
  const items = [
    {
      icon: iconCard1,
      title: "Setup Your Wallet",
      desc: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    },
    {
      icon: iconCard2,
      title: "Create Collection",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      icon: iconCard3,
      title: "Start Earning",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">How it Works</h1>
      <p className="font-normal text-[16px] md:text-[22px] leading-[22.5px] md:leading-[33px] mt-3 mb-6">
        Find out how to get started
      </p>
      <div className="flex flex-col gap-y-10 gap-x-5 md:flex-row flex-wrap md:justify-between">
      {
        items.map((item, i) => {
            return (
                <InfoCard key={i} icon={item.icon} title={item.title} desc={item.desc}/>
            )
        })
      }
      </div>
      
    </div>
  );
};

export default HowItWork;
