import React from "react";
import { ArtistCard } from "../atoms";
import { avatar18, iconGlobe } from "../../assests";

const NftDescription = () => {
  const items = ["Animation", "Illustration", "Moon", "Moon", ];

  return (
    <div className="md:w-[50%]">
      <h1 className="text-[28px] leading-[40px] font-[600] md:text-[38px] md:leading-[45px] lg:text-[51px] lg:leading-[56px]">The Orbitians</h1>
      <p className="font-normal text-[16px] leading-[22.4px] text-[#858584] font-mono mb-6 lg:text-[22px] lg:leading-[35.2px]">
      Minted on Sep 30, 2022
      </p>
      <p className="font-normal text-[16px] leading-[22.4px] text-[#858584] font-mono lg:text-[22px] lg:leading-[35.2px]">
        Created By
      </p>
      <ArtistCard image={avatar18} text=" Dish Studio" />
      <h1 className="font-normal text-[16px] leading-[22.4px] text-[#858584] font-mono mb-3 lg:text-[22px] lg:leading-[35.2px]">
        Description
      </h1>
      <p className="font-normal text-[16px] leading-[22.3px] mb-3 lg:text-[22px] lg:leading-[35.2px]">
        The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
        blockchain,
      </p>
      <p className="font-normal text-[16px] leading-[22.3px] mb-3 lg:text-[22px] lg:leading-[35.2px]">
        There are all sorts of beings in the NFT Universe. The most advanced and
        friendly of the bunch are Orbitians.{" "}
      </p>
      <p className="font-normal text-[16px] leading-[22.3px] mb-3 lg:text-[22px] lg:leading-[35.2px]">
        They live in a metal space machines, high up in the sky and only have
        one foot on Earth.
      </p>
      <p className="font-normal text-[16px] leading-[22.3px] mb-3 lg:text-[22px] lg:leading-[35.2px]">
        These Orbitians are a peaceful race, but they have been at war with a
        group of invaders for many generations. The invaders are called
        Upside-Downs, because of their inverted bodies that live on the ground,
        yet do not know any other way to be. Upside-Downs believe that they will
        be able to win this war if they could only get an eye into Orbitian
        territory, so they've taken to make human beings their target.
      </p>
      <h1 className="font-normal text-[16px] leading-[22.4px] text-[#858584] font-mono lg:text-[22px] lg:leading-[35.2px]">
        Details
      </h1>
      <div className="flex items-center gap-2 my-2">
        <img src={iconGlobe} alt="globe" className="w-[24px] h-[24px] lg:w-[32px]" />
        <p className="text-[16px] leading-[22.4px] font-normal lg:text-[22px] lg:leading-[35.2px]">
          View on Etherscan
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src={iconGlobe} alt="globe" className="w-[24px] h-[24px] lg:w-[32px]" />
        <p className="text-[16px] leading-[22.4px] font-normal lg:text-[22px] lg:leading-[35.2px]">
          View Original
        </p>
      </div>
      <h1 className="font-normal text-[16px] leading-[22.4px] text-[#858584] font-mono mt-5 lg:text-[22px] lg:leading-[35.2px]">
        Tags
      </h1>
      <div className="mt-3">
        {items.map((item, i) => {
          return (
            <button key={i} className=" bg-gray py-[15px] px-[30px] block lg:inline lg:mr-4 mb-3 rounded-[20px] font-[600] text-[16px] leading-[22.4px] lg:text-[22px] lg:leading-[35.2px]">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NftDescription;
