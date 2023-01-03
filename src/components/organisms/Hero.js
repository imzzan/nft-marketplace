import React from "react";
import { HeroText } from "../moleculs";
import { ArtistCard } from "../atoms";
import { image1, avatar1 } from "../../assests";

const Hero = () => {
  const item = [
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
    <div className="mt-10 md:mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex flex-col gap-1 md:gap-10 lg:gap-24 md:flex-row justify-between">
        <HeroText items={item} />
        <div className="">
          <div className="w-[315px] mx-auto md:w-[330px] lg:w-[510px]">
            <img src={image1} alt="nft" className="w-full object-cover h-[206px] md:h-[222px] lg:h-[401px] rounded-t-[20px]" />
            <div className="bg-gray p-5 rounded-b-[20px]">
                <ArtistCard image={avatar1} text='Animakid' title='Space Walking'/>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between my-10 md:hidden">
        {item.map((item, i) => {
          return (
            <div>
              <p className="font-[700] text-[22px] leading-[35.2px] capitalize font-mono">{item.number}</p>
              <p className="font-[400] text-[16px] leading-[22.4px] capitalize">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
