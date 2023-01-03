import React from "react";
import { CardDiscover } from "../moleculs";
import {
  avatar1,
  avatar2,
  avatar3,
  iconEye,
  image8,
  image7,
  image6,
} from "../../assests";
import { Button2 } from "../atoms";
import { Link } from "react-router-dom";

const DiscoverNfts = () => {
  const items = [
    {
      title: "Distant Galaxy",
      profile: avatar1,
      image: image8,
      price: "1.68",
      highestBid: "0.33",
      user: "MoonDancer",
    },
    {
      title: "Life on Endana",
      profile: avatar2,
      image: image7,
      price: "1.34",
      highestBid: "0.28",
      user: "NebulaKid",
    },
    {
      title: "AstroFiction",
      profile: avatar3,
      image: image6,
      price: "1.98",
      highestBid: "0.40",
      user: "SpaceOne",
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">
            Discover More NFTs
          </h1>
          <p className="font-normal text-[16px] md:text-[22px] leading-[22.5px] md:leading-[33px] mt-3 mb-6">
            Explore new trending NFTs
          </p>
        </div>
        <Link to='/marketplace'><Button2
          className="hidden my-10 md:flex w-[200px]"
          icon={iconEye} text="See All"
        /></Link>
      </div>
      <div className="flex flex-col gap-y-10 gap-x-5 md:flex-row flex-wrap">
        {items.map((item, i) => {
          return (
            <CardDiscover
              key={i}
              user={item.user}
              title={item.title}
              profile={item.profile}
              price={item.price}
              highestBid={item.highestBid}
              image={item.image}
              bgColor='bg-gray'
            />
          );
        })}
      </div>
      <Button2 className="my-10 w-full md:hidden" icon={iconEye} text="See All" />
    </div>
  );
};

export default DiscoverNfts;
