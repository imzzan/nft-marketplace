import React from "react";
import { Button, Button2 } from "../../atoms";
import {
  iconCopy,
  iconPlus,
  iconDiscord,
  iconTwitter,
  iconInstagram,
  iconYoutube,
} from "../../../assests";

const ArtistInfo = () => {
  const items = [
    {
      number: "250+",
      text: "Total Sale",
    },
    {
      number: "100+",
      text: "Action",
    },
    {
      number: "240+",
      text: "Artist",
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between my-5">
        <h1 className="font-[600] text-[28px] leading-[39px] lg:text-[38px] lg:leading-[47px]">
          Animakid
        </h1>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 mt-10 lg:mt-0">
          <Button
            className=" w-full md:w-[224px]"
            text="Get Started"
            icon={iconCopy}
          />
          <Button2
            text="Follow"
            icon={iconPlus}
            className="w-full md:w-[200px] md:h-[60px]"
          />
        </div>
      </div>

      <div className="flex justify-between md:justify-start gap-20 mt-10 lg:mt-0">
        {items.map((item, i) => {
          return (
            <div>
              <p className="font-[700] text-[22px] lg:text-[28px] leading-[35.2px] lg:leading-[40px] capitalize font-mono">
                {item.number}
              </p>
              <p className="font-[400] text-[16px] lg:text-[24px] leading-[22.4px] lg:leading-[40px] capitalize">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <p className="font-normal text-[16px] text-[#858584] leading-[22.4px] lg:text-[22px] lg:leading-[35px]">
          Bio
        </p>
        <p className="text-[16px] font-normal leading-[22.4px] mt-1 lg:text-[22px] lg:leading-[35px]">
          The internet's friendliest designer kid.
        </p>
      </div>
      <div className="mt-8">
        <p className="font-normal text-[16px] text-[#858584] leading-[22.4px] lg:text-[22px] lg:leading-[35px]">
          Links
        </p>
        <div className=" flex gap-4 mt-1">
          <img src={iconDiscord} alt="iconDiscord" className="w-[24px]" />
          <img src={iconTwitter} alt="iconTwitter" className="w-[24px]" />
          <img src={iconInstagram} alt="iconInstagram" className="w-[24px]" />
          <img src={iconYoutube} alt="iconYoutube" className="w-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
