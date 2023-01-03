import React from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  iconRocetLunch,
} from "../../assests";
import { TopArtists } from "../moleculs";
import { Button2 } from "../atoms";

const TopArtist = () => {
  const items = [
    {
      name: "KeepiTreal",
      sales: "35.35",
      profile: avatar1,
      rank: 1,
    },
    {
      name: "DigiLab",
      sales: "32.5",
      profile: avatar2,
      rank: 2,
    },
    {
      name: "GravityOne",
      sales: "30",
      profile: avatar3,
      rank: 3,
    },
    {
      name: "Juanie",
      sales: "28.78",
      profile: avatar4,
      rank: 4,
    },
    {
      name: "BlueWhale",
      sales: "27.88",
      profile: avatar5,
      rank: 5,
    },
    {
      name: "Muzani",
      sales: "23.88",
      profile: avatar6,
      rank: 6,
    },
    {
      name: "Muzani",
      sales: "23.88",
      profile: avatar6,
      rank: 6,
    },
    {
      name: "Muzani",
      sales: "23.88",
      profile: avatar6,
      rank: 6,
    },
    {
      name: "Muzani",
      sales: "23.88",
      profile: avatar6,
      rank: 6,
    },
    {
      name: "Muzani",
      sales: "23.88",
      profile: avatar6,
      rank: 6,
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">
            Top Creators
          </h1>
          <p className="font-normal text-[16px] md:text-[22px] leading-[22.5px] md:leading-[33px] mt-3 mb-6">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button2
          className="hidden my-10 md:flex w-[200px]"
          text="Get Started"
          icon={iconRocetLunch}
        />
      </div>
      <div className="flex flex-col gap-y-10 gap-x-10 md:flex-row flex-wrap justify-center">
        {items.map((item, i) => {
          return <TopArtists key={i} name={item.name} sales={item.sales} rank={item.rank} profile={item.profile} />;
        })}
      </div>
      <Button2
        className="my-10 w-full md:hidden"
        text="Get Started"
        icon={iconRocetLunch}
      />
    </div>
  );
};

export default TopArtist;
