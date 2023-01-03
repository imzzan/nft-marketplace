import React from "react";
import { Button } from "../atoms";
import { iconRocetLunch } from "../../assests";
import { Link } from 'react-router-dom';

const HeroText = ({ items }) => {
  return (
    <div className="">
      <h1 className=" text-[28px] md:text-[38px] lg:text-[67px] lg:leading-[80px] font-[600] leading-[39.2px] md:leading-[47px] mb-4">Discover Digital Art & Collect NFTs</h1>
      <p className="font-[400] text-[16px] lg:text-[23px] leading-[22.4px] lg:leading-[36px] capitalize">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </p>
      <Link to='/signup'><Button className=" w-full my-10 md:w-[224px]" text="Get Started" icon={iconRocetLunch} /></Link>
      <div className=" md:flex justify-between my-10 hidden">
        {items.map((item, i) => {
          return (
            <div>
              <p className="font-[700] text-[22px] lg:text-[28px] leading-[35.2px] lg:leading-[40px] capitalize font-mono">{item.number}</p>
              <p className="font-[400] text-[16px] lg:text-[24px] leading-[22.4px] lg:leading-[40px] capitalize">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroText;
