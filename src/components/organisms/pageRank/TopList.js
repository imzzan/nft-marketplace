import React from "react";
import Tabbar from "./Tabar";
import { Route, Routes } from "react-router-dom";
import Top1d from "./Top1d";
import Top7d from "./Top7d";
import Top30d from "./Top30d";
import TopAllTime from "./TopAllTime";

const TopList = () => {
  return (
    <>
      <Tabbar />
      <div className="mt-8 md:my-10 w-[315px] md:w-[750px] lg:w-full container mx-auto">
        {" "}
        <div className="flex justify-between items-center bg-secondary border border-gray w-full h-[50px] px-3 rounded-[20px]">
          <div className="flex gap-4 items-center">
            <p className="text-[16px] leading-[13.2px] font-normal text-[#858584]">
              #
            </p>
            <p className="text-[12px] md:text-[16px] leading-[13.2px] font-normal text-[#858584]">
              Artist
            </p>
          </div>
          <p className="text-[12px] md:text-[16px] leading-[13.2px] font-normal text-[#858584] hidden md:block md:ml-10">
              Change
            </p>
            <p className="text-[12px] md:text-[16px] leading-[13.2px] font-normal text-[#858584] hidden lg:block ml-10">
              NFTs Sold
            </p>
          <p className="text-[12px] md:text-[16px] leading-[13.2px] font-normal text-[#858584]">
            Valume
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Top1d />} />
        <Route path="/top7d" element={<Top7d />} />
        <Route path="/top30d" element={<Top30d />} />
        <Route path="/topalltime" element={<TopAllTime />} />
      </Routes>
    </>
  );
};

export default TopList;
